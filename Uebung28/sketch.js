let w = 127;
let img;

function preload() {
    img = loadImage("boat.jpg");
}

function setup() {
    createCanvas(480, 853);
}

function draw() {
    img.loadPixels();
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            let r = red(img.get(x, y));
            let g = green(img.get(x, y));
            let b = blue(img.get(x, y));
            if ((r + g + b) / 3 < w) {
                img.set(x, y, color(0, 0, 0, 255));
            } else {
                img.set(x, y, color(255, 255, 255, 255));
            }
        }
    }

    img.updatePixels();
    image(img, 0, 0, img.width, img.height);
    noLoop();
}