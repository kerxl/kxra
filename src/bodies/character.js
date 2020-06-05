import { Body } from "./body";
import { View } from "./view";

export class Character {
    constructor(prop) {
        this.name = prop.name;

        this.body = new Body(prop.body);
        this.view = new View(prop.view);
    }

    init() {
        this.view.init();
        this.body.init();
    }

    update() { this.body.update(); }

    render(time, screen) {
        this.update(time);

        screen.drawSprite(this.view.getSprite(), this.body.x, this.body.y);
        this.body.render(screen);
    }
}