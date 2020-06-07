import { IElement } from "./ielement";
import { LabelAnimation } from "../view/animation/labelAnimation";

export class Label extends IElement {
    constructor({ name = "label", text = "label", x = 10, y = 10, color = "#444444",
        fontSize = 36, fontWeight = "normal", fontFamily = "Courier New", animated = false, animationProp = undefined }) {
        
        super({ name: name, x: x, y: y, animated: animated, animationProp: animationProp });

        this.text = text;
        this.color = color;

        this.fontSize   = fontSize;
        this.fontWeight = fontWeight;
        this.fontFamily = fontFamily;
    }

    createAnimation(prop) {
        return new LabelAnimation({
            label: this,
            frameDelay:     prop.frameDelay,
            repeat:         prop.repeat,
            autorun:        prop.autorun,
            textCollection: prop.textCollection
        });
    }

    render(time, screen, camera = false) {
        this.update(time);
           
        screen.drawLabel(this, camera);
    }
}