import { Scene } from "../scene";
import { Map } from "../../map";
import { Camera } from "../../camera";

export class Level extends Scene {
    constructor({ name = "level", screen, player, collision, mapData, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.map = new Map(mapData, collision);
        this.player = player;

        this.collision = collision;
    }

    init() {
        this.map.init();
        this.player.controller.start();
        
        this.camera = new Camera({
            width:  this.screen.width,
            height: this.screen.height,
            limitX: this.map.width - this.screen.width,
            limitY: this.map.height - this.screen.height
        });
        this.camera.watch(this.player);

        this.screen.setCamera(this.camera);

        super.init();
    }

    update(time) {
        this.collision.update();
        this.camera.update();

        super.update(time);
    }

    render(time) {
        this.update(time);

        this.map.render(this.screen);
        this.player.render(time, this.screen);
        this.map.secondRender(this.screen);

        super.render(time);
    }
}