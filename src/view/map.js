import { SpriteSheet } from "../view/picture/spriteSheet";

export class Map {
    constructor(prop, collision) {
        this.collision = collision;

        this.data = prop.mapData;
        this.name = this.data.name;

        this.width  = this.data.width * this.data.tilewidth;
        this.height = this.data.height * this.data.tileheight;

        this.tileSet = new SpriteSheet(prop.mapSpriteSheet);

        this.row    = this.data.height;
        this.column = this.data.width;

        this.layers    = [];
        this.colliders = [];

        this.defaultLayer = [];
        this.upperLayer   = [];
    }

    init() {
        this.tileSet.init();

        this.createLayers();
    }

    createLayers() {
        this.data.layers.forEach(layer => {
            if (layer.type == "tilelayer") {
                this.layers.push({ name: layer.name, indexes: layer.data, z_index: layer.properties[0].value });
            } else if (layer.type == "objectgroup") {
                this.colliders = layer.objects.map(item => ({
                    x1: item.x, x2: item.x + item.width,
                    y1: item.y, y2: item.y + item.height
                }) );
            }
        });

        this.layers.sort( (a, b) => a.z_index - b.z_index );
        this.collision.colliders = this.colliders;

        delete this.data;
    }

    secondRender(screen) {
        this.upperLayer.forEach(tile => screen.drawSprite(tile.sprite, tile.x, tile.y) );
        this.upperLayer = [];
    }

    render(screen) {
        this.layers.forEach(layer => {
            let col = 0, row = 0;

            layer.indexes.forEach(index => {
                if (index > 0) {
                    if (layer.name == "wall") {
                        this.collision.bodies.forEach( body => {
                            let isIntersect = this.collision.intersect(body, {
                                x1: this.tileSet.spriteWidth * col,  x2: this.tileSet.spriteWidth * col  + this.tileSet.spriteWidth,
                                y1: this.tileSet.spriteHeight * row, y2: this.tileSet.spriteHeight * row + this.tileSet.spriteHeight /2
                            });
                            if (isIntersect)
                                this.upperLayer.push({
                                    sprite: this.tileSet.getSprite(index),
                                    x: this.tileSet.spriteWidth * col,
                                    y: this.tileSet.spriteHeight * row
                                });
                            else screen.drawSprite(this.tileSet.getSprite(index), this.tileSet.spriteWidth * col, this.tileSet.spriteHeight * row);
                        });
                    }
                else screen.drawSprite(this.tileSet.getSprite(index), this.tileSet.spriteWidth * col, this.tileSet.spriteHeight * row);
                }
                (++col > this.column - 1) && ([col, row] = [0, row+1]);
            });
        });
    }

}