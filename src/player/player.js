import { ViewBody } from "../bodies/viewBody";
import { PlayerBody } from "./body";
import { PlayerController } from "./playerControllers/playerController";

export class Player {
    constructor(prop) {
        this.name = prop.name;
        this.moveSpeed = prop.moveSpeed;

        this.view = new ViewBody(prop.view);
        this.body = new PlayerBody(prop.body);

        
        this.controller = new PlayerController({ player: this, prop: prop.controller });
    }

    init() {
        if (this._isInitialized) return;

        this.view.init();

        this._isInitialized = true;
    }

    update(time) {
        this.view.update(time);

        this.controller.update();
    }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
    }
}