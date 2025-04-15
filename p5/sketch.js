let canvas;

function setup() {
  const parentElement = document.getElementById('hero'); // 👈 ID of the section
  canvas = createCanvas(parentElement.offsetWidth, parentElement.offsetHeight);
  canvas.parent('hero');
  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '-1');
  background(20); // or anything you want
  noStroke(); // disable stroke entirely
}

function windowResized() {
  const parentElement = document.getElementById('hero');
  resizeCanvas(parentElement.offsetWidth, parentElement.offsetHeight);
}
function draw() {
  background(255,200,0);

  let gridSize = 20;
  let t = millis() * 0.0005;

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let nx = x * 0.01;
      let ny = y * 0.01;
      let n = noise(nx + t, ny + t);

      // Color según posición del mouse
      let r = map(mouseX, 0, width, 100, 255);
      let g = map(mouseY, 0, height, 100, 255);
      let b = map(n, 0, 1, 100, 255);

      fill(r, g, b, 200);
      let ellipseSize = map(n, 0, 1, 10, 35,0);
      ellipse(x, y, ellipseSize, ellipseSize);
    }
  }
}
