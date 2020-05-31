import { IElement } from "./ielement";
import { Label } from "./label";

export class Button extends IElement {
    constructor({ name = "button", width, height, bgcolor, colors, labelProp, x = 0, y = 0, animated = false, animationProp = undefined }) {
        super({ name: name, x: x, y: y, animated: animated, animationProp: animationProp });

        this.width  = width;
        this.height = height;

        this.bgcolor = bgcolor;
        this.colors  = colors;

        this.label = new Label(labelProp);

        this.isMouseDown = false;
    }

    __in__(event) {
        return ( (event.offsetX >= this.x) && (event.offsetX <= this.x + this.width)  )
            && ( (event.offsetY >= this.y) && (event.offsetY <= this.y + this.height) );
    }

    addListeners(target, functions) {
        (this._listenerMouseMove  = functions.mouseMoveHandler ) && target.addEventListener("mousemove", this._listenerMouseMove);
        (this._listenerMouseDown  = functions.mouseDownHandler ) && target.addEventListener("mousedown", this._listenerMouseDown);
        (this._listenerMouseUp    = functions.mouseUpHandler   ) && target.addEventListener("mouseup",   this._listenerMouseUp);
        (this._listenerMouseClick = functions.mouseClickHandler) && target.addEventListener("click",     this._listenerMouseClick);
    }

    removeListeners(target) {
        this._listenerMouseMove  && target.removeEventListener("mousemove", this._listenerMouseMove)  && delete this._listenerMouseMove;
        this._listenerMouseDown  && target.removeEventListener("mousedown", this._listenerMouseDown)  && delete this._listenerMouseDown;
        this._listenerMouseUp    && target.removeEventListener("mouseup",   this._listenerMouseUp)    && delete this._listenerMouseUp;
        this._listenerMouseClick && target.removeEventListener("click",     this._listenerMouseClick) && delete this._listenerMouseClick;
    }

    init() {
        this.label.init();
        
        this.label.x += this.x;
        this.label.y += this.y;

        super.init();
    }

    render(time, screen) { screen.drawButton(this); }
}