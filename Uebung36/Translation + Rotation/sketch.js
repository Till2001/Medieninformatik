function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES)
    noFill();
}

function draw() {
    beginShape();

    //grünes Vierecks
    stroke(0, 255, 0);
    vertex(100, 200);
    vertex(400, 200);
    vertex(400, 400);
    vertex(100, 400);
    vertex(100, 200);
    endShape();


    //translate(50, 100);
    rotate(-30)
    translate(50, 100)

    beginShape(); // definiere Polygon

    //rotes Vierecks
    stroke(255, 0, 0);
    vertex(100, 200);
    vertex(400, 200);
    vertex(400, 400);
    vertex(100, 400);
    vertex(100, 200);
    endShape(); // Ende Definition des Polygons
}