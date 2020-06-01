import { IElement } from "./ielement";
import { SpriteSheet } from "../view/picture/spriteSheet";
import { SpriteAnimation } from "../view/animation/spriteAnimation";

export class Tile extends IElement {
    constructor({ name = "tile", width, height, spriteSheet, x = 10, y = 10, animated = false, animationProp = undefined, options = undefined }) {
        super({ name: name, x: x, y: y, animated: animated, animationProp: animationProp });

        this.width  = width;
        this.height = height;

        options && (this.__options__ = options);

        this.spriteSheet = new SpriteSheet(spriteSheet);
    }

    init() {
        this.spriteSheet.init();

        super.init();
    }

    createAnimation(prop) {
        return new SpriteAnimation({
            spriteSheet: this.spriteSheet,
            indices:     prop.indices,
            autorun:     prop.autorun,
            frameDelay:  prop.frameDelay,
            name:        prop.name,
            repeat:      prop.repeat
        });
    }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(
            this.spriteSheet.getSprite((this.animated && this.animation.indices[this.animation.currentFrameIndex]) || 1),
            this.x, this.y
        );
        this.__options__ && this.__options__.fog && screen.fill("#00000066");
    }
}