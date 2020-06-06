export class Sprite {
    constructor({ image = undefined, src, width = 64, height = 64, sourceX = 0, sourceY = 0 }) {
        this.image = image;
        this.src = src;
        this.width = width;
        this.height = height;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
    }

    init() { this.image || (this.image = this.loadImage()); }

    _load() {
        return new Promise(resolve => {
            let img = new Image(this.width, this.height);
            img.onload = () => resolve(img);
            img.src = this.src;
        });
    }
    
    loadImage() { this._load().then(img => this.image = img).catch(error => { throw error; }); }
}