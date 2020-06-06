import { Body } from "../bodies/body";

export class EnemyBody extends Body {
    constructor(prop) {
        super(prop);

        this.moveSpeed = prop.defaultSpeed;
        this.defaultSpeed = prop.defaultSpeed;
        this.aggressiveSpeed = prop.aggressiveSpeed;
    }
}