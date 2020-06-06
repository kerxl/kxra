import { Scene } from "../scene";
import { Map } from "../../map";
import { Camera } from "../../camera";
import { Enemy } from "../../../enemy/enemy";

export class Level extends Scene {
    constructor({ name = "level", screen, player, collision, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.map = new Map(prop, collision);
        this.player = player;

        this.enemies = prop.enemies.map(enemy => new Enemy(enemy));

        this.collision = collision;
    }

    init() {
        this.map.init();
        this.player.controller.start();

        this.enemies.forEach(enemy => enemy.init(this.player, this.collision));
        this.collision.bodies.push(this.player.body, ...this.enemies.map(enemy => enemy.body));
        
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

        this.enemies.forEach(enemy => enemy.render(time, this.screen));
        this.player.render(time, this.screen);

        this.map.secondRender(this.screen);

        super.render(time);
    }
}