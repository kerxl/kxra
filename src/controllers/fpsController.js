import { Label } from "../ielements/label";

export class FPSController {
    constructor(prop) {
        this.name = "fpsController";

        this.fps  = 0;  // every second
        this._fps = 0; // every frame

        this.frameTime = 0;

        this.__label__ = new Label(prop.label);
    }

    init() { this.__label__.init(); }

    update(time) {
        if (this.frameTime == Math.trunc(time / 1000)) {
            ++this._fps;
        } else {
            this.fps = ++this._fps;
            this.frameTime = Math.trunc(time / 1000);
            this._fps = 0;
        }

        this.__label__.text = `FPS: ${this.fps}`;
    }
    
    render(time, screen) {
        this.update(time);

        screen.drawLabel(this.__label__);
    }
}