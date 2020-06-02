import { ViewBody } from "../bodies/viewBody";
import { PlayerBody } from "./body";
import { PlayerController } from "./playerControllers/playerController";

export class Player {
    constructor(prop) {
        this.name = prop.name;

        this.view = new ViewBody(prop.view);
        this.body = new PlayerBody(prop.body);
        
        this.controller = new PlayerController();

        this._isInitialized = false;
    }

    init() {
        if (this._isInitialized) return;

        this.view.init();

        this._isInitialized = true;
    }

    update(time) { this.view.update(time); }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
    }
}