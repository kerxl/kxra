export class Canvas {
    constructor({ width = 640, height = 640 } = {}) {
        this.width  = width;
        this.height = height;
    }

    init() {
        let div = document.getElementById("game") || document.body.appendChild( document.createElement("div") );
        div.id = "game";

        this.DOM = div.getElementsByTagName("canvas")[0] || div.appendChild(document.createElement("canvas"));
        this.DOM.width  = this.width;
        this.DOM.height = this.height;
        this.context = this.DOM.getContext("2d");
    }
}