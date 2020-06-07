export class EnemyRangeZone {
    constructor(body, prop) {
        this.body = body;

        this.up = prop.up;
        this.right = prop.right;
        this.down = prop.down;
        this.left = prop.left;
        this.visible = prop.visible;
    }

    setPosition() {
        this.x1 = this.body.x - this.left;
        this.x2 = this.body.x + this.body.width + this.right;
        this.y1 = this.body.y - this.up;
        this.y2 = this.body.y + this.body.height + this.down;
    }

    init()   { this.setPosition(); }
    update() { this.setPosition(); }

    render(time, screen) {
        this.update(time);
        
        this.visible && screen.strokeRect(this.x1, this.y1, this.x2-this.x1, this.y2-this.y1);
    }
}