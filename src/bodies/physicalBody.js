export class PhysicalBody {
    constructor(prop) {
        this.setX(prop.x);
        this.setY(prop.y);
        
        this.width  = prop.width;
        this.height = prop.height;
    }

    setX(newX) { newX > 0 && newX < 640 && (this.x = newX) } 
    setY(newY) { newY > 0 && newY < 640 && (this.y = newY) }
    setXY(newX, newY) { this.setX(newX); this.setY(newY); }
}