import { Screen } from "./view/screen/screen";
import { LoadingScene } from "./view/scene/loading";
import { GameController } from "./controllers/gameCtrl";
import { SceneController } from "./controllers/sceneCtrl";

import gameJSON from "./game.json";

export class Game {
    constructor() {
        this.name = gameJSON.name;
        this.isRunning = false;

        this.screen = new Screen(gameJSON.screen);
        this.controller = new GameController();

        this.scenes = {
            loading: new LoadingScene({ screen: this.screen, prop: gameJSON.scenes.loading })
        };
    }

    init() {
        this.screen.init();

        this.controller.add(new SceneController({ scenes: this.scenes }));
    }

    frame(time) {
        this.controller.update(time);

        this.controller.sceneController.currentScene.render(time);

        this.isRunning && requestAnimationFrame(time => this.frame(time));
    }
    
    run() {
        this.init();

        (this.isRunning = true) && requestAnimationFrame(time => this.frame(time));

        console.log(this);
    }
}