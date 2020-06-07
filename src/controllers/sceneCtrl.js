import { LoadingScene } from "../view/scene/loading";
import { StartMenu    } from "../view/scene/menu/start";
import { Level        } from "../view/scene/level/level";

export class SceneController {
    constructor({ name = "sceneController", scenes }) {
        this.name = name;

        this.scenes = scenes;
    }

    init() { this.setScene("loading"); }

    setScene(sceneName) {
        if (!this.scenes[sceneName]) return;

        switch(sceneName) {
            case "startMenu": this.currentScene = new StartMenu(this.scenes.startMenu);      break;
            case "level_1":   this.currentScene = new Level(this.scenes.level_1);            break;
            case "level_2":   this.currentScene = new Level(this.scenes.level_2);            break;
            default:          this.currentScene = new LoadingScene(this.scenes.loading);     break;
        }

        this.currentScene.init();
        this.currentScene.start();
        this.currentScene.status = "running";
    }

    update() {
        if (this.currentScene.status == "finish") {
            if (this.currentScene.next == "none")
                this.currentScene.status = "running";
            else {
                this.currentScene.stop();
                this.setScene(this.currentScene.next);
            }
        }
    }
}