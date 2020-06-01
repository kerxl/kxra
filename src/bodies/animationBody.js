import { SpriteAnimation } from "../view/animation/spriteAnimation";

export class BodyAnimation {
    constructor({ spriteSheet, prop }) {
        this.spriteSheet = spriteSheet;

        this.name = prop.name;
        this.animations = prop.states.map(state => new SpriteAnimation({
            name:           state.name,
            spriteSheet:    this.spriteSheet,
            indices:        state.indices,
            frameDelay:     state.frameDelay,
            autorun:        state.autorun,
            repeat:         state.repeat
        }));
    }

    init() {
        this.spriteSheet.init();

        this.animations.forEach(a => a.init());
        
        
        this.currentAnimation = this.animations.find(a => a.name == "idle-down");
        this.currentAnimation.run();
    }

    update(time) { this.currentAnimation.update(time); }

    changeState(stateName) {
        this.currentAnimation && this.currentAnimation.stop();
        this.currentAnimation = this.animations.find(a => a.name == stateName);
        this.currentAnimation.run();
    }
}