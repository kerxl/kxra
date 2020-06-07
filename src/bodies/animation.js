export class BodyAnimation {
    constructor(view, moveController, attackController = undefined) {
        this.view = view;
        this.moveController = moveController;
        this.attackController = attackController;
    }
    
    update(time) {
        if (this.attackController && this.attackController.attack.isAttacked && !this.view.animation.isRunning)
            this.attackController.attack.isAttacked = false;

        if (this.attackController && !this.attackController.attack.isAttacked)
            this.view.setAnimation( (this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction );
        if (this.attackController && this.attackController.attack.isAttacked)
            this.view.setAnimation("attack-" + this.attackController.attack.direction);
        else 
            this.view.setAnimation( (this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction );
            
        this.view.animation.update(time);
    }
}