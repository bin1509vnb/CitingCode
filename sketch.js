// I attempted to created the looping line drawing from this link
//https://p5js.org/reference/#/p5/loop 
// But I wanted make the line goes up from the bottom of the screen, so I followed the other tutorial to figure it out. 
//https://p5js.org/examples/structure-redraw.html

var y; //I changed the all of the var x to var y 
function setup(){
    createCanvas(500,500);
    noLoop;
    y = height * 1; // THis is to control the started point for the line
}

function draw(){
background(150, 75, 0);
    y = y - 0.5; //I adjusted this for the movement speed of the line
    if(y > height) {
    }
    line (0 , y, width,y); //I know this is to control the direction of the line but I am still cannot understand its logic.
}

function mousePressed() {
    loop();
}
function mouseReleased(){
    noLoop();
}
// For some reason, I am unable to loop the line 
// It was fun and challenging combining/adjusting the orginally code to something that I desired.
