import { Level } from "./level";

export class Level_1 extends Level {
    constructor({ name = "level_1", screen, player, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, player: player, mapData: prop.mapData, parent: parent, next: next });
    }
}