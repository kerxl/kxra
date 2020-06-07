import { PlayerKeyController } from "./keyController";
import { PlayerMoveController } from "./moveController";
import { BodyAnimation } from "../../bodies/animation";
import { PlayerAttackController } from "./attackController";

export class PlayerController {
    constructor({ player, prop }) {
        this.player = player;

        this.keyController = new PlayerKeyController();
        this.moveController = new PlayerMoveController(this.player, this.keyController, prop.moveController);
        this.attackController = new PlayerAttackController({
            attackType:     "warrior",
            keyController:  this.keyController,
            moveController: this.moveController,
            player:         this.player,
            prop:           prop.attackController
        });
        this.animationController = new BodyAnimation(this.player.view, this.moveController, this.attackController);
    }

    start() { this.keyController.start(); }
    stop()  { this.keyController.stop();  }

    update(time) {
        this.keyController.update();
        this.moveController.update();
        this.attackController.update();
        this.animationController.update(time);
    }
}