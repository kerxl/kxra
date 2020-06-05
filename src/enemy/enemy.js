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

    init() {
        super.init();
        this.rangeZone.init();
    }

    update(time) {
        this.controller.update(time);
        super.update();
    }

    render(time, screen) {
        super.render(time, screen);

        this.rangeZone.render(time, screen);
    }
}