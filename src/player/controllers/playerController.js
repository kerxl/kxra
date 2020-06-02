import { PlayerKeyController } from "./keyController";
import { PlayerMoveController } from "./moveController";
import { PlayerAnimationController } from "./animationController";

export class PlayerController {
    constructor({ player, prop }) {
        this.player = player;

        this.keyController = new PlayerKeyController();
        this.moveController = new PlayerMoveController(this.player, this.keyController, prop.moveController);
        this.animationController = new PlayerAnimationController(this.player.view, this.moveController);
    }

    start() { this.keyController.start(); }
    stop()  { this.keyController.stop();  }

    update(time) {
        this.keyController.update();
        this.moveController.update();
        this.animationController.update(time);
    }
}