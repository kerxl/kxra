import { Level } from "./level";

export class Level_2 extends Level {
    constructor({ name = "level_2", screen, collision, player, prop, parent = "none", next = "none" }) {
        super({
            name: name,
            screen: screen,
            player: player,
            prop: prop,
            collision: collision,
            parent: parent,
            next: next
        });
    }
}