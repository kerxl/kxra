import { Scene } from "../scene";
import { Tile } from "../../../ielements/tile";
import { Button } from "../../../ielements/button";

export class StartMenu extends Scene {
    constructor({ name = "startMenu", screen, prop, parent = "none", next = "none" }) {
        super({ name: name, screen: screen, parent: parent, next: next });

        this.ielements = {
            background: new Tile(prop.background),
            playButton: new Button(prop.playButton)
        };
    }

    mouseClickHandler(event) {
        event = event || window.event;
        
        if (this.ielements.playButton.__in__(event)) {
            this.status = "finish";
            this.next = "level_1";

            document.body.style.cursor = "default";
        }
    }

    mouseDownHandler(event) {
        event = event || window.event;

        if (this.ielements.playButton.__in__(event)) {
            this.ielements.playButton.bgcolor = this.ielements.playButton.colors.click;
            this.ielements.playButton.isMouseDown = true;
        }
    }

    mouseUpHandler(event) {
        !event && (event = window.event);

        if (this.ielements.playButton.isMouseDown) {
            this.ielements.playButton.bgcolor = this.ielements.playButton.colors.default;
            this.ielements.playButton.isMouseDown = false;
        }
    }

    mouseMoveHandler(event) {
        event = event || window.event;

        if (this.ielements.playButton.__in__(event)) {
            !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors.hover);

            document.body.style.cursor = "pointer";
        } else {
            !this.ielements.playButton.isMouseDown && (this.ielements.playButton.bgcolor = this.ielements.playButton.colors.default);

            document.body.style.cursor = "default";
        }
    }

    startEventListen() {
        this.ielements.playButton.addListeners(this.screen.canvas.DOM, {
            mouseMoveHandler:   this.mouseMoveHandler.bind(this),
            mouseDownHandler:   this.mouseDownHandler.bind(this),
            mouseUpHandler:     this.mouseUpHandler.bind(this),
            mouseClickHandler:  this.mouseClickHandler.bind(this)
        });
    }

    stopEventListen() {
        this.ielements.playButton.removeListeners(this.screen.canvas.DOM);
    }
}