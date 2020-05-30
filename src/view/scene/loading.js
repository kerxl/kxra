import { Scene } from "./scene";
import { Tile } from "../../ielements/tile";
import { Label } from "../../ielements/label";

export class LoadingScene extends Scene {
    constructor({ name = "loading", screen, prop, parent = "none", next = "none", fpsCtrl }) {
        super({ name: name, screen: screen, parent: parent, next: next, fpsCtrl: fpsCtrl });
        
        this.ielements = {
            background: new Tile(prop.background),
            disk:  new Tile(prop.disk),
            label: new Label(prop.label)
        };
    }

    init() {
        for (let ie in this.ielements)
            this.ielements[ie].init();

        super.init();
    }

    render(time) {
        for (let ie in this.ielements)
            this.ielements[ie].render(time, this.screen);
    }
}