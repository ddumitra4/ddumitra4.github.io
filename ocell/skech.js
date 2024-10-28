let mic;
function setup() {
  createCanvas(1000, 1000);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,3000);
 beginShape();
  vertex(300,600);
  vertex(200,300);
  vertex(300,200);
  vertex(400,200);
  vertex(600+h,300);
  vertex(400,350);
  vertex(600-h,400);
  vertex(500,500);
  vertex(400,700);
  vertex(200,700);
 endShape(CLOSE);
  fill(170,197,240)
  ellipse(460,280,30,35)
}
