console.log('log1')

function setup() {
    let h = document.body.clientHeight;
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0, 0);
    c.style('pointer-events', 'none')
    clear();
}

function draw() {
    stroke(0);
    strokeWeight(4);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}