export class PlayerMoveController {
    constructor(player, keyController, prop) {
        this.player = player;
        this.keyController = keyController;

        this.keys = prop.keys;
    }

    update() {
        if (this.keyController.keys[this.keys.up].isDown)    this.moveUp();
        if (this.keyController.keys[this.keys.right].isDown) this.moveRight();
        if (this.keyController.keys[this.keys.down].isDown)  this.moveDown();
        if (this.keyController.keys[this.keys.left].isDown)  this.moveLeft();
    }

    moveUp()    { this.player.body.y -= this.player.moveSpeed; }

    moveRight() { this.player.body.x += this.player.moveSpeed; }

    moveDown()  { this.player.body.y += this.player.moveSpeed; }

    moveLeft()  { this.player.body.x -= this.player.moveSpeed; }
}