import { IElement } from "./ielement";

export class Label extends IElement {
    constructor({ name = "label", text = "label", x = 10, y = 10, color = "#444444",
        fontSize = 36, fontWeight = "normal", fontFamily = "Courier New", animated = false, animation = undefined }) {
        
        super({ name: name, x: x, y: y });

        this.text = text;
        this.color = color;

        this.fontSize   = fontSize;
        this.fontWeight = fontWeight;
        this.fontFamily = fontFamily;

        (this.animated = animated) && (this.animation = this.createAnimation(animation));
    }

    init() {
        this.animated && this.animation.init();
    }

    update(time) {
        this.animated && this.animation.update(time);
    }

    render(time, screen) {
        this.update(time);
        
        screen.drawLabel(this);
    }
}