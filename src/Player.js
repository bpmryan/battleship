const Gameboard = require("./Gameboard");

class Player {
  constructor(name, isComputer = false) {
    this.namem = name;
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  fireShot(index, enemyBoard) {
    const visible = enemyBoard.opponentBoard();
    if (visible[index] === "empty") {
      enemyBoard.receiveShot(index);
      return true;
    }
    return false;
  }

  randomShot(enemyBoard) {
    const visible = enemyBoard.opponentBoard();
    const available = visible
      .map((cell, i) => (cell === "empty" ? i : null))
      .filter((i) => i !== null);
    const index = available[Math.floor(Math.random() * available.length)];
    return this.fireShot(index, enemyBoard);
  }
}

module.exports = Player;
