import { PlayerKeyController } from "./keyController";

export class PlayerController {
    constructor() {
        this.keyController = new PlayerKeyController();
    }

    start() { this.keyController.start(); }

    stop() { this.keyController.stop(); }
}