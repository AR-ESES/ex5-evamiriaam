let pies = [];
let plate;

let pi;

let digitsDiv;
let digits = "3.";
let piCounter = 0;

function preload(){
  pi = loadStrings('one-million.txt');
}

function setup() {
  pi = pi.join('');
  createCanvas(400, 400);
  plate = new Plate(width / 2, 50);
  digitsDiv = createDiv(digits);
  digitsDiv.style('font-size', '64pt');
}

function draw() {
  background(0);
  if (random(1) < 0.1) {
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
    let digit = pies[i].digit;
    digits += digit;

    let correctDigit = pi.charAt(piCounter)
    if (correctDigit == digit) {
      console.log("✨");
      digits += digit;
      piCounter++;
    } else {
      console.log("❤️");
    }
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