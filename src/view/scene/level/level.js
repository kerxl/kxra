import { Scene           } from "../scene";
import { Map             } from "../../map";
import { Camera          } from "../../camera";
import { Enemy           } from "../../../enemy/enemy";
import { Sprite          } from "../../picture/sprite";
import { Label           } from "../../../ielements/label";
import { Player          } from "../../../player/player";
import { LevelController } from "./levelController";
import { LevelUI         } from "./leveUI";

export class Level extends Scene {
    constructor({ name = "level", screen, collision, prop }) {
        super({ name: name, screen: screen, next: prop.next });

        this.map = new Map(prop, collision);
        this.player = new Player(prop.player);

        this.enemies = prop.enemies.map(enemy => new Enemy(enemy));

        this.controller = new LevelController({
            playerHP: this.player.healthPoint,
            enemiesCount: this.enemies.length,
            levelTime: { all: prop.time, current: 0 },
            level: this
        });

        this.collision = collision;

        this.interface = new LevelUI({
            healthPoints: {
                sprite: new Sprite(prop.interface.healthPoints.sprite),
                x: prop.interface.healthPoints.x, y: prop.interface.healthPoints.y,
                count: prop.interface.healthPoints.count
            },
            timeLabel: new Label(prop.interface.time)
        });
    }

    init() {
        this.player.controller.attackController.attack.setEnemies(this.enemies);
        this.player.controller.attackController.attack.setCollision(this.collision);

        this.map.init();
        this.player.init();
        this.interface.init();
        super.init();

        this.player.controller.start();

        this.collision.bodies.push(this.player.body, ...this.enemies.map(enemy => {
            enemy.init(this.player, this.collision);
            return enemy.body;
        }));
        
        (this.camera = new Camera({
            width:  this.screen.width,                  height: this.screen.height,
            limitX: this.map.width - this.screen.width, limitY: this.map.height - this.screen.height
        })).watch(this.player);

        this.screen.setCamera(this.camera);
    }

    update(time) {
        this.collision.update();
        this.camera.update();
        this.controller.update(time, this.player.healthPoint, this.enemiesCount);
        this.interface.update(this.player.healthPoint, this.controller.getTimeLabel(time, this.interface.timeLabel.text));

        this.enemies.forEach((enemy, index) => {
            if (enemy.healthPoint <= 0) {
                this.enemies.splice(index, 1);
            }
        }); 

        super.update(time);
    }

    render(time) {
        this.update(time);

        this.map.render(this.screen);

        this.enemies.forEach(enemy => enemy.render(time, this.screen));
        this.player.render(time, this.screen);

        this.map.secondRender(this.screen);

        super.render(time);
        this.interface.render(time, this.screen);
    }
}