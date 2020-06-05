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
        if (!this.scenes.loading) throw new Error("Game must have loading scene");

        this.setScene("level_1");
    }

    setScene(sceneName) {
        if (!this.scenes[sceneName]) return;

        !this.scenes[sceneName].isInitialized && (this.scenes[sceneName].isInitialized = true) && this.scenes[sceneName].init();

        this.currentScene = this.scenes[sceneName];
        this.currentScene.start();
        this.currentScene.status = "running";
    }

    add(...scenes) {
        for (let scene of scenes) {
            if (!this.scenes[scene.name]) {
                if (!scene.name) throw new Error("Scene must have name, like 'startMenu'");
                
                this.scenes[scene.name] = scene;
                this.scenes[scene.name].init();
                this.scenes[scene.name].isInitialized = true;
            }
        }

        return this.scenes.length;
    }

    remove(sceneName) { this.scenes[sceneName] && this.scenes.splice(this.scenes.findIndex(el => el.name == sceneName)); }

    update() {
        for (let scene in this.scenes) {
            if (this.scenes[scene].status == "finish") {
                if (scene.next == "none") this.scenes[scene].status = "running";
                else {
                    this.currentScene.stop();
                    this.setScene(this.scenes[scene].next);
                    this.currentScene.parent = this.scenes[scene].name;

                    this.scenes[scene].status = "ready";
                    this.scenes[scene].next = "none";
                }
            }
        }
    }
}