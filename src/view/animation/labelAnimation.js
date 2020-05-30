import { Animation } from "./animation";

export class LabelAnimation extends Animation {
    constructor({ name = "labelAnimation", label, frameDelay = 200, textCollection = [], repeat = true, autorun = true }) {
        super({ name: name, frameDelay: frameDelay, repeat: repeat, autorun: autorun });

        this.label = label;
        this.textCollection = textCollection;
        this.currentTextIndex = 0;
    }

    nextFrame() {
        if (this.currentTextIndex + 1 == this.textCollection.length) {
            this.currentTextIndex = 0;
        } else ++this.currentTextIndex;
        
        this.label.text = this.textCollection[this.currentTextIndex];
    }
}