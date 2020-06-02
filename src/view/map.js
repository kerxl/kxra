import { SpriteSheet } from "../view/picture/spriteSheet";

export class Map {
    constructor(prop) {
        this.name = prop.name;
        this.mapData = prop;

        
        this.tileSet = new SpriteSheet(prop.spriteSheet);

        this.column = this.mapData.width;
        this.row = this.mapData.height;

        this.layers = [];
        this.colliders = [];
    }

    init() {
        this.tileSet.init();

        this.createLayers();
    }

    createLayers() {
        this.mapData.layers.forEach(layer => {
            if (layer.type == "tilelayer") {
                this.layers.push({
                    name:    layer.name,
                    indexes: layer.data,
                    z_index: layer.properties[0].value
                });
            } else if (layer.type == "objectgroup") {
                this.colliders = layer.objects.map(item => ({
                    x1: item.x1, x2: item.x1 + item.width,
                    y1: item.y1, y2: item.y1 + item.height
                }) );
            }
        });

        this.layers.sort( (a, b) => a.z_index - b.z_index );

        delete this.mapData;
    }

    render(screen) {
        this.layers.forEach(layer => {
            let col = 0, row = 0;

            layer.indexes.forEach(index => {
                if (index > 0)
                    screen.drawSprite(this.tileSet.getSprite(index), this.tileSet.spriteWidth * col, this.tileSet.spriteHeight * row);

                ++col;
                if (col > this.column - 1) {
                    col = 0;
                    ++row;
                }
            });
        });
    }

}