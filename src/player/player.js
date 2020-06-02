import { PlayerBody } from "./components/body";
import { PlayerView } from "./components/view";
import { PlayerController } from "./controllers/playerController";

export class Player {
    constructor(prop) {
        this.name = prop.name;
        this.moveSpeed = prop.moveSpeed;

        this.body = new PlayerBody(prop.body);
        this.view = new PlayerView(prop.view);

        this.controller = new PlayerController({ player: this, prop: prop.controller });
    }

    init() { this.view.init(); }

    update(time) { this.controller.update(time); }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
    }
}