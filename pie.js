class Pie {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 16;
    this.digit = floor(random(10));
  }
  
  show() {

    fill(255);
    circle(this.x, this.y, this.r * 2);
    fill(0);
    textSize(32);
    textAlign(CENTER,CENTER);
    text(this.digit, this.x, this.y);
  }
  
  update() {
    this.y = this.y + 5;
  }
}