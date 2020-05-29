import { Screen } from "./view/screen/screen";
import { LoadingScene } from "./view/scene/loading";
import { GameController } from "./controllers/gameCtrl";
import { SceneController } from "./controllers/sceneCtrl";

export class Game {
    constructor() {
        this.name = "Kxra";
        this.isRunning = false;

        this.screen = new Screen({ width: 640, height: 640 });
        this.controller = new GameController();

        this.scenes = {
            loading: new LoadingScene({ screen: this.screen })
        }
    }

    init() {
        this.screen.init();

        this.controller.add(new SceneController({ scenes: this.scenes }));
    }

    frame(time) {
        this.controller.sceneController.currentScene.update(time);

        this.isRunning && requestAnimationFrame(time => this.frame(time));
    }
    
    run() {
        this.init();

        (this.isRunning = true) && requestAnimationFrame(time => this.frame(time));

        console.log(this);
    }
}