export class Scene {
    constructor({ name, screen, next }) {
        this.name = name;
        this.screen = screen;
        this.status = "loading";
        this.next = next;
    }

    init() {
        !this.ielements && (this.ielements = {});

        for (let ie in this.ielements)
            this.ielements[ie].init();

        this.status = "loaded";
    }

    startEventListen() {}
    stopEventListen()  {}

    start() { this.startEventListen(); }
    stop()  { this.stopEventListen();  }

    update() {}

    render(time) {
        this.update(time);

        for (let ie in this.ielements)
            this.ielements[ie].render(time, this.screen);
    }
}