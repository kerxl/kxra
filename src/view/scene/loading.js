import { Scene } from "./scene";
import { SpriteSheet } from "../picture/spriteSheet";

export class LoadingScene extends Scene {
    constructor({ name = "loading", screen, parent = "none", next = "none" }) {
        super({
            name: name,
            screen: screen,
            parent: parent,
            next: next
        });
    }

    init() {
        this.spriteSheet = new SpriteSheet({
            name: "testSS",
            src: "/img/test640.jpg",
            width: 640,
            height: 640,
            spriteWidth: 64,
            spriteHeight: 64
        });
        this.spriteSheet.init();

        console.log(this);
    }

    render() {
        this.screen.fill("#000000");
        this.screen.drawImage(this.spriteSheet.image, 64, 64);
        this.screen.drawSprite(this.spriteSheet.getSprite(15), 0, 0);
    }
}