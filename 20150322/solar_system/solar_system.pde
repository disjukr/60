void setup() {
  size(640, 480, P3D);
  noStroke();
}

void draw() {
  PImage earth_map = loadImage("earthmap1k.jpg");
  background(0);
  translate(width / 2, height / 2);
  texture(earth_map);
  sphere(100); // oh shit
}
