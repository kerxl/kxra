export class LevelUI {
    constructor(prop) {
        this.healthPoints = prop.healthPoints;
        this.timeLabel = prop.timeLabel;
        console.log(this);
    }

    init() {
        this.healthPoints.sprite.init();
        this.timeLabel.init();
    }

    update(hp, txt) {
        this.healthPoints.count = hp;
        this.timeLabel.text = txt;
    }

    render(time, screen) {
        for (let i = 0; i < this.healthPoints.count; ++i)
            screen.drawImage(
                this.healthPoints.sprite.image,
                this.healthPoints.x + i * this.healthPoints.sprite.width,
                this.healthPoints.y
            );

        this.timeLabel.render(time, screen);
    }
}