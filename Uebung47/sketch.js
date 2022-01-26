let polySynth;

let melody = ['', '3', 'G4', '2', 'A5', '2', 'A4', '1', 'A3', '2', 'G1',
    '2', 'G4', '2', 'G4', '1', 'G4', '1', 'F4', '2', 'A4', '3', 'C4', '1', 'D4',
    '3', 'E3', '2', 'E2', '1', 'A2', '4', 'D4', '1', 'C4', '1', 'C4', '1', 'C4',
    '3', 'G4', '2', 'A4', '1', 'A3', '2', 'G1'
];

function setup() {
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(playSynth);
    background(220);
    text('click to play', 20, 20);

    polySynth = new p5.PolySynth();
}

function playSynth() {
    userStartAudio();

    // note duration (in seconds)
    let dur = 0.1;

    // time from now (in seconds)
    let time = 0;

    // velocity (volume, from 0 to 1)
    let vel = 0.5;

    for (let i = 2; i < melody.length; i = i + 2) {
        let note = melody[i];
        let on = 0.2 * parseFloat(melody[i - 1]);
        polySynth.play(note, vel, time += on, dur);
    }
}