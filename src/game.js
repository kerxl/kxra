import { Screen       } from "./view/screen/screen";

import { GameController  }  from "./controllers/gameCtrl";
import { SceneController }  from "./controllers/sceneCtrl";
import { FPSController   }  from "./controllers/fpsController";

import { Collision } from "./physic/collision";

import gameJSON from "./game.json";

export class Game {
    constructor() {
        this.name = gameJSON.name;
        this.isRunning = false;

        this.screen = new Screen(gameJSON.screen);

        this.controller = new GameController();

        this.collision = new Collision();
    }

    init() {
        this.screen.init();
        
        this.controller.add(
            new SceneController({ scenes: {
                loading:   { screen: this.screen, prop: gameJSON.scenes.loading },
                startMenu: { screen: this.screen, prop: gameJSON.scenes.startMenu },
                level_1:   { screen: this.screen, collision: this.collision, prop: gameJSON.scenes.level_1 },
                level_2:   { screen: this.screen, collision: this.collision, prop: gameJSON.scenes.level_2 }
            } }),
            new FPSController(gameJSON.fpsController)
        );
    }

    frame(time) {
        this.controller.render(time, this.screen);

        this.isRunning && requestAnimationFrame(time => this.frame(time));
    }
    
    run() {
        this.init();

        (this.isRunning = true) && requestAnimationFrame(time => this.frame(time));
    }
}