export class IElement {
    constructor({ name = "ielement", x = 0, y = 0, animated = false, animationProp } = {}) {
        this.name = name;

        this.x = x;
        this.y = y;

        this.animated = animated;
        this._animation = animationProp;
    }

    init() {
        if (this.animated) {
            this.animation = this.createAnimation(this._animation);
            this.animation.init();
        }
        
        delete this._animation;
    }

    update(time) { this.animated && this.animation.update(time); }

    createAnimation() {}

    setXY(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}