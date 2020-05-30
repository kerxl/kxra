export class Scene {
    constructor({ name, screen, parent, next }) {
        this.name = name;
        this.screen = screen;
        this.status = "loading";
        this.parent = parent;
        this.next = next;
    }

    init() { this.status = "loaded"; }
}