export class BodyAnimation {
    constructor(view, moveController) {
        this.view = view;
        this.moveController = moveController;
    }
    
    update(time) {
        this.view.setAnimation( (this.moveController.isMove ? "walk-" : "idle-") + this.moveController.direction );
        this.view.animation.update(time);
    }
}