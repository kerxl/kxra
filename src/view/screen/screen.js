import { Canvas } from "./canvas";

export class Screen {
    constructor({ width = 640, height = 640 } = {}) {
        this.width  = width;
        this.height = height;

        this.canvas = new Canvas({ width: width, height: height });
    }

    init() {
        this.cnavasDOM = this.canvas.init();
    }

    drawImage(image, x, y) {
        image && this.canvas.context.drawImage(image, x, y);
    }
    
    drawSprite(sprite, x, y) {
        sprite.image && this.canvas.context.drawImage(
            sprite.image,
            sprite.sourceX, sprite.sourceY,
            sprite.width, sprite.height,
            x || sprite.x || 0, y || sprite.y || 0,
            sprite.width, sprite.height
        );
    }

    fill(color) {
        this.canvas.context.fillStyle = color;
        this.canvas.context.fillRect(0, 0, this.width, this.height);
    }
}