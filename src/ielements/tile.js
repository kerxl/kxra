import { IElement } from "./ielement";
import { SpriteSheet } from "../view/picture/spriteSheet";

export class Tile extends IElement {
    constructor({ name = "tile", width, height, spriteSheet, x = 10, y = 10, animated = false, animation = undefined }) {
        super({ name: name, x: x, y: y });

        this.width  = width;
        this.height = height;

        this.spriteSheet = new SpriteSheet(spriteSheet);
        (this.animated = animated) && (this.animation = this.spriteSheet.createAnimation(animation));
    }

    init() {
        this.spriteSheet.init();

        this.animated && this.animation.init();
    }

    update(time) {
        this.animated && this.animation.update(time);
    }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.spriteSheet.getSprite(this.animation.currentFrameIndex +1), this.x, this.y);
    }
}