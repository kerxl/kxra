import { Scene } from "./scene";
import { Tile } from "../../ielements/tile";
import { Label } from "../../ielements/label";

export class LoadingScene extends Scene {
    constructor({ name = "loading", screen, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });
        
        this.ielements = {
            background: new Tile(prop.background),
            disk:  new Tile(prop.disk),
            label: new Label(prop.label)
        };
    }

    init() {
        for (let ie in this.ielements)
            this.ielements[ie].init();

        this.ielements.label.setXY(this.ielements.disk.x - 50, this.ielements.disk.y + 100);

        super.init();
    }

    render(time) {
        this.screen.fill("#000000");

        for (let ie in this.ielements)
            this.ielements[ie].render(time, this.screen);
    }
}