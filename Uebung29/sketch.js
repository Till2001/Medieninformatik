let img, w = 127;

function preload() {
    img = loadImage("boat.jpg");
}

function setup() {
    createCanvas(480, 853);
}

function draw() {
    img.loadPixels();
    const d = pixelDensity();

    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            const index = 4 * d * (y * d * img.width + x);
            const [r, g, b] = [img.pixels[index], img.pixels[index + 1], img.pixels[index + 2]];
            if ((r + g + b) / 3.0 < w) {
                setzePixel(x, y, d, 0);
            } else {
                setzePixel(x, y, d, 255);
            }
        }
    }

    img.updatePixels();
    image(img, 0, 0, img.width, img.height);
    noLoop();
}

function setzePixel(x, y, d, val) {
    for (let i = 0; i < d; i++) {
        for (let j = 0; j < d; j++) {
            let index = 4 * ((y * d + j) * img.width * d + (x * d + i));
            img.pixels[index] = val;
            img.pixels[index + 1] = val;
            img.pixels[index + 2] = val;
            img.pixels[index + 3] = 255;
        }
    }
}