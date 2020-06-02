export class PlayerMoveController {
    constructor(player, keyController, prop) {
        this.player = player;
        this.keyController = keyController;

        this.keys = prop.keys;
        this.moveDirection = "idle-down";
    }

    update() {
        if (this.keyController.keys[this.keys.up].isDown)    this.moveUp();
        if (this.keyController.keys[this.keys.right].isDown) this.moveRight();
        if (this.keyController.keys[this.keys.down].isDown)  this.moveDown();
        if (this.keyController.keys[this.keys.left].isDown)  this.moveLeft();

        if (!(Object.values(this.keyController.keys).reduce( (a, b) => a && b.isDown )))
            this.moveDirection = "idle-" + this.moveDirection;
    }

    moveUp()    {
        this.player.body.y -= this.player.moveSpeed;
        this.moveDirection = "walk-up";
    }

    moveRight() {
        this.player.body.x += this.player.moveSpeed;
        this.moveDirection = "walk-right";
    }

    moveDown()  {
        this.player.body.y += this.player.moveSpeed;
        this.moveDirection = "walk-down";
    }

    moveLeft()  {
        this.player.body.x -= this.player.moveSpeed;
        this.moveDirection = "walk-left";
    }
}