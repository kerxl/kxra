import { Level } from "./level";

export class Level_1 extends Level {
    constructor({ name = "level_1", screen, player, prop, parent = "none", next = "none" }) {
        super({
            name: name,
            screen: screen,
            player: player,
            mapData: {
                data: prop.level_1.mapData,
                tileSet: prop.mapSpriteSheet
            },
            parent: parent,
            next: next
        });
    }
}