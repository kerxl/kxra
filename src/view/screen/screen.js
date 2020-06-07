import { Canvas } from "./canvas";

export class Screen {
    constructor({ width = 640, height = 640 } = {}) {
        this.width  = width;
        this.height = height;

        this.canvas = new Canvas({ width: width, height: height });

        this.camera = null;
        this.isCameraSet = false;
    }

    setCamera(camera) {
        this.camera = camera;
        this.isCameraSet = true;
    }

    init() { this.canvas.init(); }

    drawButton(button) {
        this.canvas.context.fillStyle = "#000000";
        this.canvas.context.fillRect(button.x - 5, button.y - 5, button.width + 10, button.height + 10);
        this.canvas.context.fillStyle = button.bgcolor;
        this.canvas.context.fillRect(button.x, button.y, button.width, button.height);

        this.drawLabel(button.label);
    }

    drawLabel(label, camera = false) {
        this.canvas.context.fillStyle = label.color;
        this.canvas.context.font = `${label.fontWeight} ${label.fontSize}px ${label.fontFamily || "Lucida Consolas"}`;

        if (!camera)
            this.canvas.context.fillText(label.text, label.x, label.y);
        else
            this.canvas.context.fillText(label.text, label.x - this.camera.x, label.y - this.camera.y);
    }

    drawImage(image, x, y) { image && this.canvas.context.drawImage(image, x, y); }
    
    drawSprite(sprite, x, y) {
        let spriteX = x;
        let spriteY = y;

        if(this.isCameraSet) {
            spriteX -= this.camera.x;
            spriteY -= this.camera.y;
        }

        if ((spriteX >= this.width)          ||
            (spriteY >= this.height)         ||
            ((spriteX + sprite.width)  <= 0) ||
            ((spriteY + sprite.height) <= 0)
        ) return;

        let sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
        let sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
        let width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
        let height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);

        sprite.image && this.canvas.context.drawImage(
            sprite.image,
            sourceX, sourceY,
            width, height,
            Math.max(0, spriteX), Math.max(0, spriteY),
            width, height
        );
    }

    strokeRect(x, y, width, height) { this.canvas.context.strokeRect(x - this.camera.x, y - this.camera.y, width, height); }

    fill(color) {
        this.canvas.context.fillStyle = color;
        this.canvas.context.fillRect(0, 0, this.width, this.height);
    }
}