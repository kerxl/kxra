import { Scene } from "../scene";
import { Tile } from "../../../ielements/tile";

export class StartMenu extends Scene {
    constructor({ name = "startMenu", screen, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.ielements = {
            background: new Tile(prop.background),
        };
    }
}