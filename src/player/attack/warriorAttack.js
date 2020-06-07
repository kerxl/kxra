export class WarriorAttack {
    constructor(player, prop) {
        this.player = player;

        this.damage = prop.damage;
        this.cooldown = prop.cooldown;
        this.canAttack = true;
        this.isAttacked = false;
        this.direction = "down";
    }

    startCooldown() { setTimeout(() => { this.canAttack = true; }, this.cooldown * 1000); }

    setEnemies(enemies)     { this.enemies = enemies;     }
    setCollision(collision) { this.collision = collision; }

    hit(direction) {
        if (!this.canAttack) return;

        this.direction = direction;

        this.player.attackCollider = {
            x1: this.direction == "left"  ? this.player.body.x - 50                           : this.player.body.x,
            x2: this.direction == "right" ? this.player.body.x + this.player.body.width + 50  : this.player.body.x + this.player.body.width,
            y1: this.direction == "up"    ? this.player.body.y - 50                           : this.player.body.y,
            y2: this.direction == "down"  ? this.player.body.y + this.player.body.height + 50 : this.player.body.y + this.player.body.height
        };

        this.enemies.forEach(enemy => {
            if (this.collision.intersect(this.player.attackCollider, {
                x1: enemy.body.x, x2: enemy.body.x + enemy.body.width,
                y1: enemy.body.y, y2: enemy.body.y + enemy.body.height
            })) {
                enemy.healthPoint -= this.damage;

                switch(direction) {
                    case "up":    enemy.body.y -= 20; break;
                    case "right": enemy.body.x += 20; break;
                    case "down":  enemy.body.y += 20; break;
                    case "left":  enemy.body.x -= 20; break;
                }

                enemy.controller.moveController.strictStop(1000);
            }
        });

        this.canAttack = false;
        this.isAttacked = true;
        this.player.attackCollider = null;
        this.startCooldown();
    }
}