import { Screen       } from "./view/screen/screen";
import { LoadingScene } from "./view/scene/loading";
import { StartMenu }    from "./view/scene/menu/start";
import { Level_1 }      from "./view/scene/level/level_1";
import { Level_2 } from "./view/scene/level/level_2";

import { GameController  }  from "./controllers/gameCtrl";
import { SceneController }  from "./controllers/sceneCtrl";
import { FPSController   }  from "./controllers/fpsController";

import { Collision } from "./physic/collision";

import { Player } from "./player/player";

import gameJSON from "./game.json";

export class Game {
    constructor() {
        this.name = gameJSON.name;
        this.isRunning = false;

        this.screen = new Screen(gameJSON.screen);

        this.controller = new GameController();

        this.player = new Player(gameJSON.player);

        this.collision = new Collision(this.player);
    }

    init() {
        this.screen.init();
        this.player.init();
        
        this.controller.add(
            new SceneController({ scenes: {
                loading:   new LoadingScene({ screen: this.screen, prop: gameJSON.scenes.loading }),
                startMenu: new StartMenu({ screen: this.screen, prop: gameJSON.scenes.startMenu }),
                level_1:   new Level_1({ player: this.player, screen: this.screen, collision: this.collision, prop: gameJSON.scenes.level_1 }),
                level_2:   new Level_2({ player: this.player, screen: this.screen, collision: this.collision, prop: gameJSON.scenes.level_2 })
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