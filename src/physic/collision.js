export class Collision {
    constructor(player) {
        this.player = player;
        this.colliders = [];
    }

    update() { this.colliders.forEach(collider => this.intersect(collider) && this.outCollider(collider) ); }

    outCollider(collider) {
        let body = this.player.body;
        let box = {
            x1: this.player.body.boxCollider.x, x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
            y1: this.player.body.boxCollider.y, y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height,
            width: this.player.body.boxCollider.width, height: this.player.body.boxCollider.height,
            _x: this.player.body.boxCollider._x, _y: this.player.body.boxCollider._y
        };

        let min = Math.min(
            Math.abs(collider.x1 - box.x2), Math.abs(collider.x2 - box.x1),
            Math.abs(collider.y1 - box.y2), Math.abs(collider.y2 - box.y1) );

        switch(min) {
            case Math.abs(collider.x1 - box.x2): this.player.body.x = collider.x1 - body.width + box._x; break;
            case Math.abs(collider.x2 - box.x1): this.player.body.x = collider.x2 - box._x+2;            break;
            case Math.abs(collider.y1 - box.y2): this.player.body.y = collider.y1 - body.height-2;       break;
            case Math.abs(collider.y2 - box.y1): this.player.body.y = collider.y2 - box._y+2;            break;
        }
    }

    intersect(collider) {
        let box = {
            x1: this.player.body.boxCollider.x, x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
            y1: this.player.body.boxCollider.y, y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
        };
        
        return (box.x2 > collider.x1 && box.x1 < collider.x1 && box.y2 > collider.y1 && box.y1 < collider.y2) ||
               (box.x1 < collider.x2 && box.x2 > collider.x2 && box.y2 > collider.y1 && box.y1 < collider.y2) ||
               (box.y2 > collider.y1 && box.y1 < collider.y1 && box.x2 > collider.x1 && box.x1 < collider.x2) ||
               (box.y1 < collider.y2 && box.y2 > collider.y2 && box.x2 > collider.x1 && box.x1 < collider.x2);
    }
}