export class EnemyMoveController {
    constructor(body, prop) {
        this.body = body;
        
        this.movePoints = prop.movePoints;
        this.currentMovePointIndex = 0;
        this.currentMovePoint = this.movePoints[this.currentMovePointIndex];

        this.isMove = true;
        this.direction = "down";
    }

    update() {
        if (!this.isMove) return;

        if (this.body.x != this.currentMovePoint.x || this.body.y != this.currentMovePoint.y)
            this.move()();
        else if (this.currentMovePointIndex < this.movePoints.length-1) {
            this.currentMovePoint = this.movePoints[++this.currentMovePointIndex];
            
            this.currentMovePoint.isStop && this.stop();
        }
        else
            this.moveRotate();
    }

    start() { this.isMove = true; }

    stop() {
        this.isMove = false;
        setTimeout(() => {
            this.start();
        }, this.currentMovePoint.stopTime);
    }

    moveRotate() {
        this.movePoints = this.movePoints.reverse();
        this.currentMovePointIndex = 0;
        this.currentMovePoint = this.movePoints[this.currentMovePointIndex];

        if (this.currentMovePoint.isStop)
            this.stop();
    }

    move() {
        let a = this.body, b = this.currentMovePoint;

        if (a.x == b.x && a.y > b.y) return this.moveUp.bind(this);
        if (a.y == b.y && a.x < b.x) return this.moveRight.bind(this);
        if (a.x == b.x && a.y < b.y) return this.moveDown.bind(this);
        if (a.y == b.y && a.x > b.x) return this.moveLeft.bind(this);

        return this.__strictMoveToPoint.bind(this);
    }

    __strictMoveToPoint() {
        this.body.x = this.currentMovePoint.x;
        this.body.y = this.currentMovePoint.y;
        this.direction = "down";
    }

    movePointsReset() { this.movePoints.forEach(point => point.isPassed = false); }

    moveUp()    {
        this.body.y -= this.body.moveSpeed;
        this.direction = "up";
    }

    moveRight() {
        this.body.x += this.body.moveSpeed;
        this.direction = "right";
    }

    moveDown()  {
        this.body.y += this.body.moveSpeed;
        this.direction = "down";
    }

    moveLeft()  {
        this.body.x -= this.body.moveSpeed;
        this.direction = "left";
    }
}