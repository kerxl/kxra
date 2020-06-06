import { Scene } from "../scene";
import { Map } from "../../map";
import { Camera } from "../../camera";
import { Enemy } from "../../../enemy/enemy";
import { Sprite } from "../../picture/sprite";
import { Label } from "../../../ielements/label";

export class Level extends Scene {
    constructor({ name = "level", screen, player, collision, prop, parent = "none"}) {
        super({ name: name, screen: screen, parent: parent, next: prop.next });

        this.map = new Map(prop, collision);
        this.player = player;

        this.enemies = prop.enemies.map(enemy => new Enemy(enemy));

        this.collision = collision;

        this.interface = {
            healthPoints: {
                sprite: new Sprite(prop.interface.healthPoints.sprite),
                x: prop.interface.healthPoints.x,
                y: prop.interface.healthPoints.y,
                count: prop.interface.healthPoints.count
            },
            time: new Label(prop.interface.time)
        }

        this.time = {
            all: prop.time,
            current: 0
        }
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

        this.interface.healthPoints.sprite.init();
        this.interface.time.init();

        super.init();
    }

    update(time) {
        if (this.time.current == 0) {
            this.time.current = Math.trunc(time / 1000);
            this.time.all += this.time.current;
        }

        this.collision.update();
        this.camera.update();
        this.interface.healthPoints.count = this.player.healthPoint;

        if (this.time.current != Math.trunc(time / 1000)) {
            ++this.time.current;

            let min = Math.trunc((this.time.all - 1) / 60);
            let sec = --this.time.all % 60;
            min = (min > 9) ? min : "0" + min;
            sec = (sec > 9) ? sec : "0" + sec;

            this.interface.time.text = `Time | ${min}:${sec}`;
        }

        if (this.time.all == 0) {
            this.status = "finish";
            this.next = "level_2";
        }
            

        super.update(time);
    }

    render(time) {
        this.update(time);

        this.map.render(this.screen);

        this.enemies.forEach(enemy => enemy.render(time, this.screen));
        this.player.render(time, this.screen);

        this.map.secondRender(this.screen);

        super.render(time);

        for (let i = 0; i < this.interface.healthPoints.count; ++i) {
            let x = this.interface.healthPoints.x + i * this.interface.healthPoints.sprite.width;
            this.screen.drawImage(this.interface.healthPoints.sprite.image, x, this.interface.healthPoints.y);
        }
        this.interface.time.render(time, this.screen);
    }
}