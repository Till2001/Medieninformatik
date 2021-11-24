function setup() {
    createCanvas(800, 800);
    noFill();
}

function draw() {
    beginShape(); // definiere Polygon
    vertex(100, 200);
    vertex(400, 200);
    vertex(400, 400);
    vertex(100, 400);
    vertex(100, 200);
    endShape(); // Ende Definition des Polygons 

    //Rotation des nachfolgenden Vierecks
    translate(400, 400);
    rotate(radians(30));
    translate(-400, -400);

    //das nächste Viereck soll Rot umrandet sein
    stroke(255, 0, 0);

    beginShape(); // definiere Polygon
    vertex(100, 200);
    vertex(400, 200);
    vertex(400, 400);
    vertex(100, 400);
    vertex(100, 200);
    endShape(); // Ende Definition des Polygons
}