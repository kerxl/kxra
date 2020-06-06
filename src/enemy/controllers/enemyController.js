import { BodyAnimation } from "../../bodies/animation";
import { EnemyMoveController } from "./moveController";
import { EnemyAttackController } from "./attackController";

export class EnemyController {
    constructor(enemy, prop) {
        this.enemy = enemy;
        
        this.attackController = new EnemyAttackController(this.enemy.rangeZone, this.enemy.body);
        this.moveController = new EnemyMoveController(this.enemy.body, this.attackController, prop.moveController);
        this.animationController = new BodyAnimation(this.enemy.view, this.moveController);
    }
    
    init(player, collision)  { this.attackController.init(player, collision); }

    update(time) {
        this.moveController.update();
        this.animationController.update(time);
        this.attackController.update();
    }
}