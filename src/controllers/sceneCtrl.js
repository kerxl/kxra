export class SceneController {
    constructor({ name = "sceneController", scenes }) {
        this.name = name;

        this.scenes = scenes;
    }

    init() {
        try {
            if (!this.scenes.loading) throw new Error("Scenes must have loading scene");

            this.currentScene = this.scenes.loading;
        } catch(error) { throw error; }
    }

    setScene(sceneName) {
        this.scenes.sceneName.init();
        this.currentScene = this.scenes.sceneName
    }

    update() {
        for (scene in this.scenes) {
            console.log(scene);
        }
    }
}