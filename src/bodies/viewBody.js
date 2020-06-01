import { SpriteSheet } from "../view/picture/spriteSheet";
import { BodyAnimation } from "./animationBody";

export class ViewBody {
    constructor(prop) { this.animation = new BodyAnimation({ spriteSheet: new SpriteSheet(prop.spriteSheet), prop: prop.animation }); }

    init() { this.animation.init(); }

    update(time) { this.animation.update(time); }

    getSprite() {
        return this.animation.spriteSheet.getSprite(
            this.animation.currentAnimation.indices[this.animation.currentAnimation.currentFrameIndex]
        );
    }
}