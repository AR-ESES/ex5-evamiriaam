class Pie {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  show() {
    circle(this.x, this.y, 32);
  }
  
  update() {
    this.y = this.y + 5;
  }
}