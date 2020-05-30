import { Animation } from "./animation";

export class SpriteAnimation extends Animation{
    constructor({ name = "spriteAnimation", spriteSheet, indices, frameDelay = 100, repeat = true, autorun = false }) {
        super({ name: name, frameDelay: frameDelay, repeat: repeat, autorun: autorun });

        this.spriteSheet = spriteSheet;
        
        this.frames = this.getFrames(indices);
        this.currentFrameIndex = 0;
    }

    init() {
        this.spriteSheet.init();

        super.init();
    }

    getFrames(indices) {
        return indices.map( index => ({
            sourceX: this.spriteSheet.getSourceX(index),
            sourceY: this.spriteSheet.getSourceY(index)
        }) );
    }

    nextFrame() {
        if ((this.currentFrameIndex + 1 == this.frames.length ) && this.repeat)
            this.currentFrameIndex = 0;
        else if (!this.repeat) stop();
        else ++this.currentFrameIndex;
    }
}