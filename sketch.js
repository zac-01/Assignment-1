class Button {
  constructor() {
    this.shape = 1;
    this.x = 100;
    this.y = 100;
    this.colour = color(255, 0, 255);
    this.hovercolour = color(0, 255, 0);
    this.size = 50;
    this.hover = 0;
    this.triggered = 0;
  }

  display() {
    noStroke();
    if (this.hover) {
      fill(this.hovercolour);
    } else {
      fill(this.colour);
    }
    if (this.shape == 1) {
      rect(this.x, this.y, this.size, this.size);
    } else {
      circle(this.x, this.y, this.size);
    }
  }

  checkTrigger() {
    this.hover = 0;
    this.triggered = 0;

    if (this.shape == 1) {
      // rectangle

      if (mouseX > this.x && mouseX < this.x + this.size) {
        if (mouseY > this.y && mouseY < this.y + this.size) {
          this.hover = 1;
          if (mouseIsPressed) {
            this.triggered = 1;
            return this.triggered;
          }
        }
      }
    } else if (this.shape == 2) {
      // circle

      if (dist(this.x, this.y, mouseX, mouseY) < this.size / 2)
         {
          this.hover = 1;
          if (mouseIsPressed) {
            this.triggered = 1;
          }
        }
      }
    }
}

var button;
var col;

function setup() {
  createCanvas(400, 400);

  button = new Button();
  col = color(220)
}

function draw() {
  background(col);

  var triggered = button.checkTrigger();
  button.display();
  
  if(triggered) {
    col = color(100,0,255);
    //else {
    // col = color(220);
    }
  }
