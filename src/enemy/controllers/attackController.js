export class EnemyAttackController {
    constructor(range, body) {
        this.range = range;
        this.body = body;

        this.target = null;
    }

    init(player, collision) {
        this.player = player;
        this.collision = collision;

        this.selfBox = {
            x1: this.body.boxCollider.x, x2: this.body.boxCollider.x + this.body.boxCollider.width,
            y1: this.body.boxCollider.y, y2: this.body.boxCollider.y + this.body.boxCollider.height
        };
        this.playerBox = {
            x1: this.player.body.boxCollider.x, x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width,
            y1: this.player.body.boxCollider.y, y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height
        };
    }

    update() {
        this.selfBox = {
            x1: this.body.boxCollider.x, x2: this.body.boxCollider.x + this.body.boxCollider.width,
            y1: this.body.boxCollider.y, y2: this.body.boxCollider.y + this.body.boxCollider.height
        };
        this.playerBox = {
            x1: this.player.body.boxCollider.x+20, x2: this.player.body.boxCollider.x + this.player.body.boxCollider.width-20,
            y1: this.player.body.boxCollider.y+20, y2: this.player.body.boxCollider.y + this.player.body.boxCollider.height-20
        };

        if (this.collision.intersect(this.playerBox, this.range))
            this.target = this.player;
        else this.target = null;
    }

    hit(direction) {
        switch(direction) {
            case "up":    this.player.body.y -= 20; break;
            case "right": this.player.body.x += 20; break;
            case "down":  this.player.body.y += 20; break;
            case "left":  this.player.body.x -= 20; break;
        }
    }

    attack(direction) {
        --this.player.healthPoint;

        this.hit(direction);
    }
}