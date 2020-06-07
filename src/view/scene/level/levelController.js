export class LevelController {
    constructor(prop) {
        this.playerHP = prop.playerHP;
        this.enemiesCount = prop.enemiesCount;

        this.levelTime = prop.levelTime;
        this.level = prop.level;
    }

    update(time, playerHealthPoint, enemiesCount) {
        this.playerHP = playerHealthPoint;
        this.enemiesCount = enemiesCount;

        if (this.levelTime.current <= 0) this.levelTime.current = Math.trunc(time / 1000);
        this.endLevelUpdate();
    }

    endLevelUpdate() {
        if (this.playerHP == 0 || this.levelTime.all == 0) {
            this.level.status = "finish";
            this.level.next = "startMenu";
        } else if (this.enemiesCount == 0) this.level.status = "finish"
    }

    getTimeLabel(time, prevStr) {
        if (this.levelTime.current == Math.trunc(time / 1000)) return prevStr;

        ++this.levelTime.current;

        let min = Math.trunc((this.levelTime.all - 1) / 60);
        let sec = --this.levelTime.all % 60;

        return `Time | ${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
    }
}