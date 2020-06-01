import { ViewBody } from "../bodies/viewBody";
import { PlayerBody } from "./body";

export class Player {
    constructor(prop) {
        this.name = prop.name;

        this.view = new ViewBody(prop.view);
        this.body = new PlayerBody(prop.body);
    }

    init() { this.view.init(); }

    update(time) { this.view.update(time); }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
    }
}