import { BoxCollider } from "./boxCollider";

export class Body {
    constructor(prop) {
        this.x = prop.x;
        this.y = prop.y;

        this.width  = prop.width;
        this.height = prop.height;
        
        this.moveSpeed = prop.moveSpeed;

        this.visible = prop.visible;

        this.boxCollider = new BoxCollider(prop.boxCollider);
    }

    init() {
        this.boxCollider.x = this.x + this.boxCollider._x;
        this.boxCollider.y = this.y + this.boxCollider._y;
    }

    update() {
        this.boxCollider.x = this.x + this.boxCollider._x;
        this.boxCollider.y = this.y + this.boxCollider._y;
    }

    render(screen) {
        this.visible && screen.strokeRect(this.x, this.y, this.width, this.height);
        this.boxCollider.render(screen);
    }
}