import { SpriteSheet } from "../../view/picture/spriteSheet";

export class PlayerView {
    constructor(prop) {
        this.spriteSheet = new SpriteSheet(prop.spriteSheet);
    }

    init() {
        this.spriteSheet.init();
    }
}