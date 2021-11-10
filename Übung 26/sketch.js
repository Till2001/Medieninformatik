let dead_men = 118 + 154 + 387 + 670
let survived_men = 57 + 14 + 75 + 192
let dead_boys = 0 + 0 + 35 + 0
let survived_boys = 5 + 11 + 13 + 0

let dead_women = 4 + 13 + 89 + 3
let survived_women = 140 + 80 + 76 + 20
let dead_girls = 0 + 0 + 17 + 0
let survived_girls = 1 + 13 + 14 + 0
let scale = 0.4

function setup() {
    createCanvas(800, 800);

}

function draw() {

    background(220)
    fill(0)
    text("Blau: Insgesammt|Rot: Gestorben|Grün: Überlebt", 10, 10, 800, 15)
    drawBars('Männer', 10, 40, dead_men, survived_men)
    drawBars('Jungs', 10, 80, dead_boys, survived_boys)
    drawBars('Frauen', 10, 120, dead_women, survived_women)
    drawBars('Mädchen', 10, 160, dead_girls, survived_girls)
    drawBars2('Gestorbenen:', 'Blau: Insgesammt|Rot: Männer|Grün: Frauen|Gelb: Jungs|Pink: Mädchen', 10, 220, dead_men, dead_women, dead_boys, dead_girls)
    drawBars2('Überlebenden', 'Blau: Insgesammt|Rot: Männer|Grün: Frauen|Gelb: Jungs|Pink: Mädchen', 10, 280, survived_men, survived_women, survived_boys, survived_girls)
}

function drawBars(title, x, y, n1, n2) {
    fill(0)
    text(title, x, y + 8, 200, 20)
    fill(0, 0, 255)
    rect(x, y + 20, (n1 + n2) * scale, 10)
    fill(255, 0, 0)
    rect(x, y + 30, n1 * scale, 10)
    fill(0, 255, 0)
    rect(x + (n1 * scale), y + 30, n2 * scale, 10)
}

function drawBars2(title, desc, x, y, n1, n2, n3, n4) {
    fill(0)
    text(title, x, y, 800, 15)
    text(desc, x, y + 15, 800, 15)
    fill(0, 0, 255)
    rect(x, y + 30, (n1 + n2 + n3 + n4) * scale, 10)

    fill(255, 0, 0)
    rect(x, y + 40, n1 * scale, 10)
    fill(0, 255, 0)
    rect(x + (n1 * scale), y + 40, n2 * scale, 10)
    fill(255, 255, 0)
    rect(x + ((n1 + n2) * scale), y + 40, n3 * scale, 10)
    fill(255, 192, 203)
    rect(x + ((n1 + n2 + n3) * scale), y + 40, n4 * scale, 10)
}