export class Camera {
    constructor({ width = 640, height = 640, limitX = 640, limitY = 640, scrollEdge = 300 } = {}) {
        this.x = 0;
        this.y = 0;

        this.width = width;
        this.height = height;

        this.limitX = limitX;
        this.limitY = limitY;

        this.watchObject = false;
        this.body = null;

        this.scrollEdge = scrollEdge;
    }

    watch(obj) {
        this.watchObject = true;
        this.body = obj.body;
    }

    update() {
        if (!this.watchObject) return;

        if (this.body.x > (this.x + this.width - this.scrollEdge))
            this.x = Math.min(this.limitX, this.body.x - this.width + this.scrollEdge);

        if (this.body.x < (this.x + this.scrollEdge))
            this.x = Math.max(0, this.body.x - this.scrollEdge);

        if (this.body.y > (this.y + this.height - this.scrollEdge))
            this.y = Math.min(this.limitY, this.body.y - this.height + this.scrollEdge);

        if (this.body.y < (this.y + this.scrollEdge))
            this.y = Math.max(0, this.body.y - this.scrollEdge);
    }
}