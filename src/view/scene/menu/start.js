import { Scene } from "../scene";

export class StartMenu extends Scene {
    constructor({ name = "startMenu", screen, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });
    }

    render(time) {
        this.screen.fill("#000000");
    }
}