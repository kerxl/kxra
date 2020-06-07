import { WarriorAttack } from "../attack/warriorAttack";
import { ShooterAttack } from "../attack/shooterAttack";
import { WizardAttack  } from "../attack/wizardAttack";

export class PlayerAttackController {
    constructor({ attackType = "warrior", player, keyController, moveController, prop }) {
        switch(attackType) {
            case "warrior": this.attack = new WarriorAttack(player, prop.warrior); break;
            case "shooter": this.attack = new ShooterAttack(player, prop.shooter); break;
            default:        this.attack = new WizardAttack(player, prop.wizard);   break;
        }

        this.keyController = keyController;
        this.moveController = moveController;
        this.keys = prop.keys;
    }

    update() {
        if (!this.keyController.isKeyAttackDown) return;

        if (this.keyController.keys[this.keys.up].isDown)    this.attack.hit("up");
        if (this.keyController.keys[this.keys.right].isDown) this.attack.hit("right");
        if (this.keyController.keys[this.keys.down].isDown)  this.attack.hit("down");
        if (this.keyController.keys[this.keys.left].isDown)  this.attack.hit("left");
    }
}