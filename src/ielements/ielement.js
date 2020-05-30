export class IElement {
    constructor({ name = "ielement", x = 0, y = 0 } = {}) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    setXY(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}