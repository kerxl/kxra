import { Level } from "./level";

export class Level_1 extends Level {
    constructor({ name = "level_1", screen, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, mapData: prop.mapData, parent: parent, next: next });
    }
}