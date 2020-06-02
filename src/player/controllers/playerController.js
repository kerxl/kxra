import { PlayerKeyController } from "./keyController";
import { PlayerMoveController } from "./moveController";

export class PlayerController {
    constructor({ player, prop }) {
        this.player = player;

        this.keyController = new PlayerKeyController();
        this.moveController = new PlayerMoveController(this.player, this.keyController, prop.moveController);
    }

    start() { this.keyController.start(); }
    stop()  { this.keyController.stop();  }

    update() { this.moveController.update(); }
}