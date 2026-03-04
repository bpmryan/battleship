const Ship = require('../src/Ship');

describe('Ship', () => {
  test('has the correct name and position', () => {
    const ship = new Ship('destroyer', [20, 21, 22]); // row 2, cols 0–2
    expect(ship.name).toBe('destroyer');
    expect(ship.position).toEqual([20, 21, 22]);
  });

  test('starts with no hits', () => {
    const ship = new Ship('destroyer', [20, 21, 22]);
    expect(ship.hits).toEqual([]);
  });

  test('records a hit at a specific index', () => {
    const ship = new Ship('destroyer', [20, 21, 22]);
    ship.hit(21);
    expect(ship.hits).toContain(21);
  });

  test('is not sunk when partially hit', () => {
    const ship = new Ship('destroyer', [20, 21, 22]);
    ship.hit(20);
    expect(ship.isSunk()).toBe(false);
  });

  test('is sunk when all positions are hit', () => {
    const ship = new Ship('patrol boat', [30, 31]);
    ship.hit(30); ship.hit(31);
    expect(ship.isSunk()).toBe(true);
  });
});