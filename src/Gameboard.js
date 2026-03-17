class Gameboard {
    constructor() {
        this.board = Array.from({ length: 100 }, () => ({
            hasShip: null, isShot: false
        }));
        this.ships = [];
    }

    placeShip(ship) {
        ship.position.forEach(index => {
            this.board[index].hasShip = ship;
        });
        this.ship.push(ship);
    }

    receiveShot(index) {
        const cell = this.board[index];
        cell.isShot = true;
        if (cell.hasShip) cell.hasShip.hit(index);
    }

    opponentBoard() {
        return this.board.map(cell => {
            if (cell.isShot && cell.hasShip) return 'hit';
            if (cell.isShot) return 'miss';
            return 'empty';
        });
    }

    allSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}
module.exposts = Gameboard;