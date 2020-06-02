import { PlayerKeyController } from "./keyController";
import { PlayerMoveController } from "./moveController";

export class PlayerController {
    constructor({ player, prop }) {
        this.keyController = new PlayerKeyController();
        this.moveController = new PlayerMoveController(player, this.keyController, prop.moveController);
    }

    start() { this.keyController.start(); }

    stop() { this.keyController.stop(); }

    update() { this.moveController.update(); }
}