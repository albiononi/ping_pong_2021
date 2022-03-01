//random sted ballen plaseres på (xball, yball posisjon)
//_________________________________________________________________
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 25;

var xBallspeed = 9;
var yBallspeed = 9;

//posisjonen på paddelen(rect.)
//_________________________________________________________________
var paddleWidth = 25;
var paddleHeight = 120;

var xPaddle = 0;
var yPaddle = 0;
var xPaddle2 = 0;
var yPaddle2 = 0;

//score
//_________________________________________________________________
var Score=1
var Score2=1


var started = false;

//canvasen, (skjerm størrelse om hvordan skjermen skal se ut.)
//_________________________________________________________________
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//draw funksjonen, (alle tegne funksjonene blir tegnet gjennom draw.)
//_________________________________________________________________
function draw() {
  
  background(50, 130, 0);

  //fill (fyller inn farger)
  //_________________________________________________________________
  fill(200, 200, 200);

  //ball funksjon
  //_________________________________________________________________
  ellipse(xBall, yBall, diameter, diameter);

  xBall += xBallspeed;
  yBall += yBallspeed;

  if (xBall < diameter / 2) {
    xBallspeed *= -1;
    Score2=Score2+1
  }
  
    if ( xBall > windowWidth - 0.5 * diameter) {
    xBallspeed *= -1;
    Score=Score+1
  }
  
  if (yBall < diameter / 2 ||
    yBall > windowHeight - diameter) {
    yBallspeed *= -1;
  }
  
  //collisjon (ball treffer paddle)
  //_________________________________________________________________
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter / 2) >= yPaddle)) {
    xBallspeed *= -1
    yBallspeed *= -1;
  }
    if ((xBall > xPaddle2 &&
      xBall < xPaddle2 + paddleWidth) &&
    (yBall + (diameter / 2) >= yPaddle2)) {
    xBallspeed *= -1
    yBallspeed *= -1;
    
  }
  
  
  //posisjon på paddle
  //_________________________________________________________________
  if (!started) {
    xPaddle = 0;
    yPaddle = windowHeight/2-paddleWidth/2;
    
    xPaddle2 = width-paddleWidth;
    yPaddle2 = windowHeight/2-paddleWidth/2;
    
    started = true;
  }
  
  //up_arrow, down_arrow, (87 = W, 83 = S)
  //_________________________________________________________________
  if (keyIsDown (UP_ARROW)) {
      yPaddle2 -= 10;
    } else if (keyIsDown (DOWN_ARROW)) {
      yPaddle2 += 10;
    }
  
  if (keyIsDown (87)) {
      yPaddle -= 10;
    } else if (keyIsDown (83)) {
      yPaddle += 10;
    }
  
  //paddle går ikke av sjermen
  //_________________________________________________________________
  if(yPaddle < 0){
    yPaddle = 0
  }
  if (yPaddle > height - paddleHeight){
    yPaddle = height - paddleHeight
  }
  if(yPaddle2 < 0){
    yPaddle2 = 0
  }
  if (yPaddle2 > height - paddleHeight){
    yPaddle2 = height - paddleHeight
  }
  
  //paddle farge og størrelse
  //_________________________________________________________________
  fill(255, 0, 0);
  rect(xPaddle, yPaddle, paddleWidth , paddleHeight);
  fill(0,0,255)
  rect(xPaddle2, yPaddle2, paddleWidth , paddleHeight);
  
  //line posisjon
  //_________________________________________________________________
  stroke(255)
  strokeWeight(2)
  line(width/2, 0, width/2, height);
  
  //circle posisjon
  //_________________________________________________________________
  fill(0,0,0,0)
  circle(width/2, height/2, width/2);
  //score
  //_________________________________________________________________
  push()
    textAlign(CENTER)
    fill(0)
    stroke(0)
    strokeWeight(1)
    textSize(36)
    text(Score + ' : ' + Score2, width/2, 25)
  pop()
  
  //score reset
  
  if (Score == 10 || Score2 == 10 ){
    Score = 0 
    Score2 = 0
  }
}