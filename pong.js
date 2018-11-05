let b;
let p1;
let p2;
let numbers = [-5,5];

function setup() {
  createCanvas(windowWidth, windowHeight);

  b = new Ball(windowWidth/2, windowHeight/2,255,0,0,numbers[int(random(0,numbers.length))],numbers[int(random(0,numbers.length))],20);
  p1 = new Paddle(20,windowHeight/2,5)
  p2 = new Paddle(windowWidth-20,windowHeight/2,5)
}

function draw(){
	background(220);

  b.drawBall();
  b.moveBall();
  b.bounceBall();
  b.bounceBall2();

  p1.drawPaddle();
  p1.moveMe1();

  p2.drawPaddle();
  p2.moveMe2();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,r,g,b,speedx,speedy,w){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.speedx = speedx;
        this.speedy = speedy;
        this.w = w
	}

	drawBall(){  // draw a ball on the screen at x,y
    		strokeWeight(1);
    		fill(this.r,this.g,this.b);
		    ellipse(this.x ,this.y,this.w,this.w);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen

		this.x = this.x+this.speedx;
		this.y = this.y+this.speedy;
	}

  bounceBall(){
    		if (this.x >= width-5){
      			this.speedx = -this.speedx;
    		} else if (this.x <= 5) {
          this.speedx = -this.speedx;
        } else if (this.y >= height-10) {
          this.speedy = -this.speedy;
        } else if (this.y <= 5) {
          this.speedy = -this.speedy;
        }


      }

  bounceBall2(){
    // if (this.y >= this.py+40 && this.y <= this.py-40 && this.x = this.px){
    //     this.speedx = -this.speedx;
    // }
  }
}




class Paddle {

  constructor(px,py,pspeedy) {
    this.px = px;
    this.py = py;
    this.pspeedy = pspeedy;
  }

  drawPaddle() {
    stroke("black");
    strokeWeight(10);
    line(this.px,this.py-40,this.px,this.py+40);
  }


  moveMe1(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.py -= this.pspeedy;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.py += this.pspeedy;
    }
}

moveMe2(){
  if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
     this.py -= this.pspeedy;
  }

  if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
      this.py += this.pspeedy;
  }
}

}
