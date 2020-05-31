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

    drawButton(button) {
        this.canvas.context.fillStyle = "#000000";
        this.canvas.context.fillRect(button.x - 5, button.y - 5, button.width + 10, button.height + 10);
        this.canvas.context.fillStyle = button.bgcolor;
        this.canvas.context.fillRect(button.x, button.y, button.width, button.height);

        this.drawLabel(button.label);
    }

    drawLabel(label) {
        this.canvas.context.fillStyle = label.color;
        this.canvas.context.font = `${label.fontWeight} ${label.fontSize}px ${label.fontFamily || "Lucida Consolas"}`;

        this.canvas.context.fillText(label.text, label.x, label.y);
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