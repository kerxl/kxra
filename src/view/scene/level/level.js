import { Scene } from "../scene";
import { Map } from "../../map";

export class Level extends Scene {
    constructor({ name = "level", screen, mapData, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.map = new Map(mapData);
    }

    init() {
        this.map.init();

        super.init();
    }

    render(time) {
        this.map.render(this.screen);

        super.render(time);
    }
}