export class BoxCollider {
    constructor(prop) {
        this.width = prop.width;
        this.height = prop.height;

        this.x = prop.x; this._x = prop.x;
        this.y = prop.y; this._y = prop.y;

        this.visible = prop.visible;
    }

    render(screen) {
        this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
    }
}