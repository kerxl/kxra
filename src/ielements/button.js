import { IElement } from "./ielement";
import { Label } from "./label";

export class Button extends IElement {
    constructor({ name = "button", width, height, bgcolor, labelProp, x = 0, y = 0, animated = false, animationProp = undefined }) {
        super({ name: name, x: x, y: y, animated: animated, animationProp: animationProp });

        this.width  = width;
        this.height = height;

        this.bgcolor = bgcolor;

        this.label = new Label(labelProp);
    }

    init() {
        this.label.init();
        
        this.label.x += this.x;
        this.label.y += this.y;

        super.init();
    }

    render(time, screen) { screen.drawButton(this); }
}