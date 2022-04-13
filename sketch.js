let pies = [];
let plate;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 314; i++) {
   pies.push(new Pie(random(width), random(-100, -20)));
  }
  plate = new Plate(width / 2, 100);
}

function draw() {
  background(0);
  

  for (let pie of pies) {
  pies.show();
  pies.update();
  if (plate.catches(pies[i])) {
    console.log("🤗");
  }
}

  plate.x = mouseX;
  plate.show();
  
  rectMode(CENTER);
  rect(mouseX,height-10,100,10);
}