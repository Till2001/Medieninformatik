let img;
let hist = [];
let min = 255
let max = 0

function preload() {
    img = loadImage("car.jpg");
}

function setup() {
    createCanvas(1366, 768);
    for (let i = 0; i < 256; i++) {
        hist[i] = 0;
    }
}

function draw() {
    img.loadPixels();
    const d = pixelDensity();
    //min und max bestimmen
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            const index = 4 * d * (y * d * img.width + x);
            const v = img.pixels[index]
            if (v < min) {
                min = v
            }
            if (v > max) {
                max = v
            }
        }
    }
    
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            const index = 4 * d * (y * d * img.width + x);
            var v = img.pixels[index]
            v = ((v - min) / (max - min)) * 255
            img.pixels[index] = v
            img.pixels[index + 1] = v
            img.pixels[index + 2] = v
        }
    }

    updatePixels()
    image(img, 0, 0, img.width, img.height);
    noLoop();
}