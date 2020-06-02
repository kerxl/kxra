import { Scene } from "../scene";
import { Map } from "../../map";

export class Level extends Scene {
    constructor({ name = "level", screen, player, mapData, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.map = new Map(mapData);
        this.player = player;
    }

    init() {
        this.map.init();
        this.player.controller.stop();
        this.player.controller.start();

        super.init();
    }

    render(time) {
        this.map.render(this.screen);
        this.player.render(time, this.screen);

        super.render(time);
    }
}