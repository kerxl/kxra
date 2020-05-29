export class Canvas {
    constructor({ width = 640, height = 640 } = {}) {
        this.width  = width;
        this.height = height;
    }

    init() {
        let div = document.getElementById("game") || document.body.appendChild( document.createElement("div") );
        div.id = "game";

        let canv = div.getElementsByTagName("canvas")[0] || div.appendChild(document.createElement("canvas"));
        canv.width  = this.width;
        canv.height = this.height;
        this.context = canv.getContext("2d");

        return canv;
    }
}