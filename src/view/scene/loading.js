import { Scene } from "./scene";

export class LoadingScene extends Scene {
    constructor({ name = "loading", screen, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });
    }

    init() {
        super.init();
    }

    render() {
        this.screen.fill("#000000");
    }
}