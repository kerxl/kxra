export class GameController {
    constructor() {
        this.length = 0;
    }

    add(...controllers) {
        for (let ctrl of controllers) {
            if (!this[ctrl.name]) {
                try {
                    if (!ctrl.name) throw new Error("Invalid name of controller, name is must be like 'sceneController'");
                    
                    this[ctrl.name] = ctrl;
                    this[ctrl.name].init();

                    ++this.length;
                } catch (error) { throw error; }
            }
        }

        return this.length;
    }

    remove(controllerName) {
        this[controllerName] && delete this[controllerName] && --this.length;
    }
}