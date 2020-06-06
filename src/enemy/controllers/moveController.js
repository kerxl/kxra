export class EnemyMoveController {
    constructor(body, attackController, prop) {
        this.body = body;
        this.attackController = attackController;
        
        this.currentMovePointIndex = 0;
        (this.movePoints = prop.movePoints) && (this.currentMovePoint = this.movePoints[this.currentMovePointIndex]);

        this.isMove = true;
        this.direction = "down";
    }

    update() {
        if (this.isStrictStopped) return;
        if (this.attackController.target) {
            this.start();
            
            if (this.attackController.collision.intersect(this.attackController.playerBox, this.attackController.selfBox)) {
                this.attackController.attack(this.direction);
                this.strictStop(1000);
            }
        }

        if (!this.isMove || !this.movePoints) return;

        if (this.body.x != this.currentMovePoint.x || this.body.y != this.currentMovePoint.y)
            this.move();
        else if (this.currentMovePointIndex < this.movePoints.length-1) {
            this.currentMovePoint = this.movePoints[++this.currentMovePointIndex];
            
            this.currentMovePoint.isStop && this.stop(this.currentMovePoint.stopTime);
        }
        else
            this.moveRotate();
    }

    start() { !this.isStrictStopped && (this.isMove = true); }

    stop(time) {
        this.isMove = false;
        setTimeout(() => {
            this.isStrictStopped = false;
            this.start();
        }, time);
    }

    strictStop(time) {
        this.isStrictStopped = true;
        this.stop(time);
    }

    moveRotate() {
        this.movePoints = this.movePoints.reverse();
        this.currentMovePointIndex = 0;
        this.currentMovePoint = this.movePoints[this.currentMovePointIndex];

        if (this.currentMovePoint.isStop)
            this.stop();
    }

    move() {
        let a = this.body, b = this.attackController.target ? {
            x: this.attackController.target.body.x, y: this.attackController.target.body.y
        } : this.currentMovePoint;
        
        if (a.y > b.y) this.moveUp();
        if (a.x < b.x) this.moveRight();
        if (a.y < b.y) this.moveDown();
        if (a.x > b.x) this.moveLeft();
    }

    movePointsReset() { this.movePoints.forEach(point => point.isPassed = false); }

    moveUp()    { this.body.y -= this.body.moveSpeed; this.direction = "up";    }
    moveRight() { this.body.x += this.body.moveSpeed; this.direction = "right"; }
    moveDown()  { this.body.y += this.body.moveSpeed; this.direction = "down";  }
    moveLeft()  { this.body.x -= this.body.moveSpeed; this.direction = "left";  }
}