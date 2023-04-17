function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
  // for debugging:
  drawGrid(canvasWidth, canvasHeight)


makeCreature(200, 400, 'pink', 'purple')
makeCreature(500, 600, 'crimson',)
makeCreature(800, 500, 'orange', 'yellow')
}

function makeCreature(x, y, fillColor, eyeColor='black'){

 // your creature:
 fill(fillColor)
 circle(x, y, 300);

 fill(eyeColor);
 ellipse(x - 50, y - 50, 30, 40);
 ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'crimson')
}