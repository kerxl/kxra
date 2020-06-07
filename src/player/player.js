import { PlayerController } from "./controllers/playerController";
import { Character        } from "../bodies/character";

export class Player extends Character {
    constructor(prop) {
        super(prop);
        this.name = prop.name;
        this.healthPoint = 3;

        this.controller = new PlayerController({ player: this, prop: prop.controller });
    }

    update(time) {
        this.controller.update(time);

        super.update();
    }
}