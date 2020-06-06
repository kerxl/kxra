export class GameController {
    constructor() { this.length = 0; }

    update(time) {
        this.sceneController && this.sceneController.update(time);
    }

    render(time, screen) {
        this.update(time);

        this.sceneController && this.sceneController.currentScene.render(time, screen);
        this.fpsController   && this.fpsController.render(time, screen);
    }

    add(...controllers) {
        for (let ctrl of controllers) {
            if (!this[ctrl.name]) {
                if (!ctrl.name) throw new Error("Invalid name of controller, name is must be like 'sceneController'");
                
                this[ctrl.name] = ctrl;
                this[ctrl.name].init();

                ++this.length;
            }
        }

        return this.length;
    }

    remove(controllerName) {
        if (this[controllerName]) {
            delete this[controllerName];
            --this.length;
        }
    }
}