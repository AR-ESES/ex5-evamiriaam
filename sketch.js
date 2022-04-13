let pies = [];
let plate;

let digitsDiv;
let digits = '';

function setup() {
  createCanvas(400, 400);
  plate = new Plate(width / 2, 50);
  digitsDiv = createDiv("");
  digitsDiv.style('font-size', '64pt');
}

function draw() {
  background(0);
  if (random(1) < 0.05) {
    pies.push(new Pie(random(width), random(-100, -20)));
  }
  for (let pie of pies) {
  pies.show();
  pies.update();
  if (plate.catches(pies[i])) {
    console.log("🤗");
  }
}

  for (let i = pies.length-1; i >= 0; i--) {
    if (plate.catches(pies[i])) {
    // catch the pie
    // Check what digit was caught and deal with score
    digits += pis[i].digit;
    digitsDiv.html(digits);

    pies.splice(i, 1);
    } else if (pies[i].y > height + pies[i].r) {
      // eat the pie?
      pies.splice(i, 1);
    }
  }
  console.log(pies.length);

  plate.x = mouseX;
  plate.show();
  
  rectMode(CENTER);
  rect(mouseX,height-10,100,10);
}