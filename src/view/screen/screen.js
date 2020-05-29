import { Canvas } from "./canvas";

export class Screen {
    constructor({ width = 640, height = 640 } = {}) {
        this.width  = width;
        this.height = height;

        this.canvas = new Canvas({ width: width, height: height });
    }

    init() { this.canvas.init(); }

    fill(color) {
        this.canvas.context.fillStyle = color;
        this.canvas.context.fillRect(0, 0, this.width, this.height);
    }
}