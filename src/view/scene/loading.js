import { Scene } from "./scene";
import { Tile } from "../../ielements/tile";
import { SpriteSheet } from "../picture/spriteSheet";

export class LoadingScene extends Scene {
    constructor({ name = "loading", screen, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });
        
        this.ielements = {
            disk: new Tile({
                name:       prop.disk.name,
                animated:   prop.disk.animated,
                animation:  prop.disk.animation,
                width: prop.disk.width, height: prop.disk.height,
                x:     prop.disk.x,     y:      prop.disk.y,
                spriteSheet: new SpriteSheet(prop.disk.spriteSheet)
            })
        }
    }

    init() {
        for (let ie in this.ielements)
            this.ielements[ie].init();

        super.init();
    }

    render(time) {
        this.screen.fill("#000000");

        for (let ie in this.ielements)
            this.ielements[ie].render(time, this.screen);
    }
}