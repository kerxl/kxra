export class SceneController {
    constructor({ name = "sceneController", scenes }) {
        this.name = name;

        this.scenes = {};
        for (let scene in scenes) {
            this.scenes[scene] = scenes[scene];
            this.scenes[scene].isInitialized = false;
        }
    }

    init() {
        if (!this.scenes.loading) throw new Error("Scenes must have loading scene");

        (this.scenes.loading.isInitialized = true) && (this.currentScene = this.scenes.loading) && (this.currentScene.init());
    }

    setScene(sceneName) {
        !this.scenes[sceneName].isInitialized && (this.scenes[sceneName].isInitialized = true) && this.scenes[sceneName].init();
        this.currentScene = this.scenes[sceneName];
    }

    update() {
        for (let scene in this.scenes) {
            if (this.scenes[scene].status == "finish") {
                if (scene.next == "none") this.scenes[scene].status = "running";
                else {
                    this.setScene(this.scenes[scene].next);
                    this.currentScene.parent = this.scenes[scene].name;
                    this.currentScene.status = "running";

                    this.scenes[scene].status = "ready";
                    this.scenes[scene].next = "none";
                }
            }
        }
    }
}