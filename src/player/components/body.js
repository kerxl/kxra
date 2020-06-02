import { BoxCollider } from "./boxCollider";

export class PlayerBody {
    constructor(prop) {
        this.x = prop.x;
        this.y = prop.y;

        this.boxCollider = new BoxCollider(prop.boxCollider);
    }
}