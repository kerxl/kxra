export class PlayerKeyController {
    constructor() {
        this.keys = {
            KeyW: { code: 87, isDown: false },
            KeyD: { code: 68, isDown: false },
            KeyS: { code: 83, isDown: false },
            KeyA: { code: 65, isDown: false },

            ArrowUp:    { code: 38, isDown: false },
            ArrowRight: { code: 39, isDown: false },
            ArrowDown:  { code: 40, isDown: false },
            ArrowLeft:  { code: 37, isDown: false },

            Space: { code: 32, isDown: false },
        }

        this.isKeyDown = false;
    }

    start() { this.startEventListen(); }
    stop()  { this.stopEventListen();  }

    startEventListen() {
        this._listenerKeyDown = this.keyDownHandler.bind(this);
        this._listenerKeyUp   = this.keyUpHandler.bind(this);
        
        window.addEventListener("keydown", this._listenerKeyDown);
        window.addEventListener("keyup",   this._listenerKeyUp);
    }

    stopEventListen() {
        this._listenerKeyDown && window.removeEventListener("keydown", this._listenerKeyDown) && delete this._listenerKeyDown;
        this._listenerKeyUp   && window.removeEventListener("keyup",   this._listenerKeyUp)   && delete this._listenerKeyUp;
    }

    update() { this.isKeyDown = this.keys.KeyW.isDown || this.keys.KeyD.isDown || this.keys.KeyS.isDown || this.keys.KeyA.isDown; }

    keyDownHandler(event) {
        if (this.keys[event.code]) {
            event.preventDefault();
            this.keys[event.code].isDown = true;
        }
    }

    keyUpHandler(event) {
        if (this.keys[event.code]) {
            event.preventDefault();
            this.keys[event.code].isDown = false;
        }
    }
}