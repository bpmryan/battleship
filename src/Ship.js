class Ship {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.hits = [];
    }

    hit(index) {
        this.hits.push(index);
    }

    isSunk() {
        return this.hits.length >= this.position.length;
    }
}

module.exports = Ship;