import { BodyAnimation } from "../../bodies/animation";
import { EnemyMoveController } from "./moveController";

export class EnemyController {
    constructor(enemy, prop) {
        this.enemy = enemy;
        
        this.moveController = new EnemyMoveController(this.enemy.body, prop.moveController);
        this.animationController = new BodyAnimation(this.enemy.view, this.moveController);
    }

    update(time) {
        this.moveController.update();
        this.animationController.update(time);
    }
}