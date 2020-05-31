export class Animation {
    constructor({ name, frameDelay= 50, repeat = false, autorun = false }) {
        this.name = name;

        this.repeat = repeat;
        this.autorun = autorun;

        this.frameDelay = frameDelay;
        this.lastFrameTime = 0;

        this.isRunning = false;
    }

    init() { this.autorun && this.run(); }

    run()  { this.isRunning = true;  }
    stop() { this.isRunning = false; }

    update(time) {
        if (!this.isRunning) return;

        if (this.lastFrameTime == 0) {
            this.lastFrameTime = time;
            return;
        }

        if ((time - this.lastFrameTime) > this.frameDelay) {
            this.nextFrame();
            this.lastFrameTime = time;
        }
    }
}