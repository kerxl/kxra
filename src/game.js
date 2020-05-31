import { Screen       } from "./view/screen/screen";
import { LoadingScene } from "./view/scene/loading";
import { StartMenu } from "./view/scene/menu/start";

import { GameController  }  from "./controllers/gameCtrl";
import { SceneController }  from "./controllers/sceneCtrl";
import { FPSController   }  from "./controllers/fpsController";

import gameJSON from "./game.json";

export class Game {
    constructor() {
        this.name = gameJSON.name;
        this.isRunning = false;

        this.screen = new Screen(gameJSON.screen);
        this.controller = new GameController();
    }

    init() {
        this.screen.init();

        this.controller.add(
            new SceneController({ scenes: {
                loading: new LoadingScene({ screen: this.screen, prop: gameJSON.scenes.loading })
            } }),
            new FPSController(gameJSON.fpsController)
        );

        this.controller.sceneController.add(
            new StartMenu({ screen: this.screen, prop: gameJSON.scenes.startMenu })
        );
    }

    frame(time) {
        this.controller.render(time, this.screen);

        this.isRunning && requestAnimationFrame(time => this.frame(time));
    }
    
    run() {
        this.init();

        (this.isRunning = true) && requestAnimationFrame(time => this.frame(time));

        console.log(this);
    }
}