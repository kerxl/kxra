import { SpriteAnimation } from "../animation/spriteAnimation";

export class SpriteSheet {
    constructor({ name = "spriteSheet", src, width, height, spriteWidth = 64, spriteHeight = 64 }) {
        this.name = name;
        this.src = src;

        this.width  = width;
        this.height = height;

        this.spriteWidth  = spriteWidth;
        this.spriteHeight = spriteHeight;
    }

    init() { this.image || (this.image = this.loadImage()); }

    getSprite(index) {
        return ({
            image:   this.image,
            width:   this.spriteWidth,
            height:  this.spriteHeight,
            sourceX: this.getSourceX(index),
            sourceY: this.getSourceY(index)
        });
    }

    _load() {
        return new Promise(resolve => {
            let img = new Image(this.width, this.height);
            img.onload = () => resolve(img);
            img.src = this.src;
        });
    }
    
    loadImage() { this._load().then(img => this.image = img).catch(error => { throw error; }); }

    getSourceX(index) { return (index-1) * this.spriteWidth % this.width; }

    getSourceY(index) {
        return Math.trunc( ((index-1) * this.spriteWidth) / this.width ) * this.spriteHeight;
    }
}