export class PlayerMoveController {
    constructor(player, keyController, prop) {
        this.player = player;
        this.keyController = keyController;

        this.keys = prop.keys;

        this.isMove = false;
        this.direction = "down";
    }

    update() {
        if (this.keyController.keys[this.keys.up].isDown)    this.moveUp();   
        if (this.keyController.keys[this.keys.right].isDown) this.moveRight();
        if (this.keyController.keys[this.keys.down].isDown)  this.moveDown(); 
        if (this.keyController.keys[this.keys.left].isDown)  this.moveLeft();
        
        if (!this.keyController.isKeyDown) this.isMove = false;
    }

    moveUp()    {
        this.player.body.y -= this.player.body.moveSpeed;
        this.isMove = true;
        this.direction = "up";
    }

    moveRight() {
        this.player.body.x += this.player.body.moveSpeed;
        this.isMove = true;
        this.direction = "right";
    }

    moveDown()  {
        this.player.body.y += this.player.body.moveSpeed;
        this.isMove = true;
        this.direction = "down";
    }

    moveLeft()  {
        this.player.body.x -= this.player.body.moveSpeed;
        this.isMove = true;
        this.direction = "left";
    }
}