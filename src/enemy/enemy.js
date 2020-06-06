import { Character } from "../bodies/character";
import { EnemyRangeZone } from "./rangeZone";
import { EnemyController } from "./controllers/enemyController";
import { EnemyBody } from "./enemyBody";

export class Enemy extends Character {
    constructor(prop) {
        super(prop);


        this.body = new EnemyBody(prop.body);
        this.name = prop.name;

        this.rangeZone = new EnemyRangeZone(this.body, prop.rangeZone);

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

        this.body.moveSpeed = this.controller.attackController.target ? this.body.aggressiveSpeed : this.body.defaultSpeed;
    }

    render(time, screen) {
        super.render(time, screen);

        this.rangeZone.render(time, screen);
    }
}