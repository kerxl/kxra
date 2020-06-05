export class Collision {
    constructor(bodies) {
        this.colliders = [];
        this.bodies = bodies || [];
    }

    update() {
        this.bodies.forEach(body => {
            this.colliders.forEach(collider => {
                if (this.intersect(body, collider))
                    this.outCollider(body, collider)
            });
        });
    }

    outCollider(body, collider) {
        let box = {
            _x: body.boxCollider._x, _y: body.boxCollider._y,
            x1: body.boxCollider.x,  x2: body.boxCollider.x + body.boxCollider.width,
            y1: body.boxCollider.y,  y2: body.boxCollider.y + body.boxCollider.height,
            width: body.boxCollider.width, height: body.boxCollider.height,
        };

        let min = Math.min(
            Math.abs(collider.x1 - box.x2), Math.abs(collider.x2 - box.x1),
            Math.abs(collider.y1 - box.y2), Math.abs(collider.y2 - box.y1) );

        switch(min) {
            case Math.abs(collider.x1 - box.x2): body.x = collider.x1 - body.width + box._x; break;
            case Math.abs(collider.x2 - box.x1): body.x = collider.x2 - box._x+2;            break;
            case Math.abs(collider.y1 - box.y2): body.y = collider.y1 - body.height-2;       break;
            case Math.abs(collider.y2 - box.y1): body.y = collider.y2 - box._y+2;            break;
        }
    }

    intersect(body, collider) {
        let box = {
            x1: body.boxCollider.x, x2: body.boxCollider.x + body.boxCollider.width,
            y1: body.boxCollider.y, y2: body.boxCollider.y + body.boxCollider.height
        };
        
        return (box.x2 >  collider.x1 && box.x1 <  collider.x1 && box.y2 >  collider.y1 && box.y1 <  collider.y2) ||
               (box.x1 <  collider.x2 && box.x2 >  collider.x2 && box.y2 >  collider.y1 && box.y1 <  collider.y2) ||
               (box.y2 >  collider.y1 && box.y1 <  collider.y1 && box.x2 >  collider.x1 && box.x1 <  collider.x2) ||
               (box.y1 <  collider.y2 && box.y2 >  collider.y2 && box.x2 >  collider.x1 && box.x1 <  collider.x2) ||
               (box.x1 >= collider.x1 && box.x2 <= collider.x2 && box.y1 >= collider.y1 && box.y2 <= collider.y2);
    }
}