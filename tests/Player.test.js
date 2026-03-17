const Player = require('../src/Player');
const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

describe('Player', () => {
    test('can fire a shot at an enemy board', () => {
        const player = new Player('Alice');
        const enemy = new Gameboard();
        const ship = new Ship('patrol boat', [0, 1]);
        enemy.placeShip(ship);
        player.fireShot(0, enemy);
        expect(ship.hits).toContain(0);
    });

    test('cannot fire at the same cell twice', () => {
        const player = new Player('Alice');
        const enemy = new Gameboard();
        player.fireShot(5, enemy);
        const result = player.fireShot(5, enemy);
        expect(result).toBe(false);
    });

    test('computer fires at a random empty cell', () => {
        const computer = new Player('CPU', true);
        const enemy = new Gameboard();
        computer.randomShot(enemy);
        const shots = enemy.opponentBoard().filter(c => c !== 'empty');
        expect(shots.length).toBe(1);
    });
});