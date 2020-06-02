import { SpriteSheet } from "../../view/picture/spriteSheet";
import { SpriteAnimation } from "../../view/animation/spriteAnimation";

export class PlayerView {
    constructor(prop) {
        this.spriteSheet = new SpriteSheet(prop.spriteSheet);

        this.animationList = {};
        this.tempAnimationProp = prop.animationList;
    }

    init() {
        if (this.animationList == {}) return;

        this.spriteSheet.init();

        this.tempAnimationProp.forEach(animation => {
            this.animationList[animation.name] = new SpriteAnimation({
                                                    name:        animation.name,
                                                    spriteSheet: this.spriteSheet,
                                                    frameDelay:  animation.frameDelay,
                                                    indices:     animation.indices,
                                                    repeat:      animation.repeat,
                                                    autorun:     animation.autorun 
                                                });
                this.animationList[animation.name].init()
        }); delete this.tempAnimationProp;
        
        this.animation = this.animationList["idle-down"];
        this.animation.run();
    }

    setAnimation(animationName) {
        if (this.animation.name == animationName) return;

        this.animation.stop();
        this.animation = this.animationList[animationName];
        this.animation.run();
    }

    getSprite() {
        return this.spriteSheet.getSprite(this.animation.indices[this.animation.currentFrameIndex]);
    }
}