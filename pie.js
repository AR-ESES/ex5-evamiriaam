class Pie {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 16;
  }
  
  show() {
    circle(this.x, this.y, this.r * 2);
  }
  
  update() {
    this.y = this.y + 5;
  }
}