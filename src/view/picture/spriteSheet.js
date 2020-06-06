import { Sprite } from "./sprite";

export class SpriteSheet extends Sprite {
    constructor({ name = "spriteSheet", src, width, height, spriteWidth = 64, spriteHeight = 64 }) {
        super({ src: src, width: width, height: height });
        this.name = name;

        this.spriteWidth  = spriteWidth;
        this.spriteHeight = spriteHeight;
    }   

    getSprite(index) {
        return new Sprite({
            image:   this.image,
            width:   this.spriteWidth,
            height:  this.spriteHeight,
            sourceX: this.getSourceX(index),
            sourceY: this.getSourceY(index)
        });
    }

    getSourceX(index) { return (index-1) * this.spriteWidth % this.width; }

    getSourceY(index) {
        return Math.trunc( ((index-1) * this.spriteWidth) / this.width ) * this.spriteHeight;
    }
}