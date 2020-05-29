export class Game {
    constructor() {

    }

    init() {

    }

    frame(time) {
        requestAnimationFrame(time => this.frame(time));
    }
    
    run() {
        this.init();

        requestAnimationFrame(time => this.frame(time));
    }
}