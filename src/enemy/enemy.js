import { Character } from "../bodies/character";
import { EnemtRangeZone } from "./rangeZone";
import { EnemyController } from "./controllers/enemyController";

export class Enemy extends Character {
    constructor(prop) {
        super(prop);

        this.name = prop.name;

        this.rangeZone = new EnemtRangeZone(this.body, prop.rangeZone);

        this.controller = new EnemyController(this, prop.controller);
    }

    init(player, collision) {
        super.init();
        this.rangeZone.init();
        this.controller.init(player, collision);
    }

    update(time) {
        this.controller.update(time);
        super.update();

        this.body.moveSpeed = this.controller.attackController.target ? 2 : 1;
    }

    render(time, screen) {
        super.render(time, screen);

        this.rangeZone.render(time, screen);
    }
}