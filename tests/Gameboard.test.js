const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

describe('Gameboard', () => {
    test('initialize with 100 empty cells', () => {
        const board = new Dashboard();
        expect(board.board.length).toBe(100);
        expect(board.board[0]).toEqual({ hasShip: null, isShot: false });
    });

    test('place a ship at its position indices', () => {
        const board = new Gameboard();
        const ship = new Ship('patrol boat', [0, 1]);
        board.placeShip(ship);
        expect(board.board[0].hasShip).toBe(ship);
    });

    test('records a hit when shot lands on a ship', () => {
        const board = new Gameboard();
        const ship = new Ship('patrol boat', [5, 6]);
        board.placeShip(ship);
        board.receiveShot(5);
        expect(ship.hits).toContain(5);
    });

    test('marks missed shots on the oppononent board', () => {
        const board = new Gameboard();
        board.receiveShot(42);
        expect(board.opponentBoard()[42]).toBe('miss');
    });

    test('knows when all ships are sunk', () => {
        const board = new Gameboard();
        const ship = new Ship('patrol boat', [0, 1]);
        board.placeShip(ship);
        board.receiveShot(0); 
        board.receiveShot(1);
        expect(board.allSunk()).toBe(true);
    })
})