var yArm = 200;
var xLeftLeg = 150;
var xRightLeg = 350;
var xCircle = 250;
var yCircle = 120;

var randMovement1;
var randMovement2;
var randMovement3;
var randMovement4;

var size = 10;
var sizeInc = 2;

function setup()
{
	createCanvas(500,600);
	randMovement1 = Math.floor(Math.random() * 10) + 1;
	randMovement2 = Math.floor(Math.random() * 20) + 1;
	randMovement3 = Math.floor(Math.random() * 15) + 1;
	randMovement4 = Math.floor(Math.random() * 25) + 1;
}

function draw()
{
	
	let c = color(241, 224, 187);
	strokeWeight(2);
	background(120);
	fill("green");
	rect(190, 200, 120, 200);
	fill(c);
	circle(xCircle, yCircle, 200);
	fill("pink");
	arc(250, 190, 30, 15, TWO_PI, -PI);
	fill("white");
	triangle(190, 120, 220, 120, 205, 100);
	triangle(310, 120, 280, 120, 295, 100);
	triangle(240, 150, 260, 150, 250, 140);
	strokeWeight(5);
	point(205, 113);
	point(295, 113);
	line(189, 250, 80, yArm); 	//left arm
	line(311, 250, 420, yArm);	//right arm
	line(200, 401, xLeftLeg, 500);	//left leg
	line(300, 401, xRightLeg, 500);	//right leg
	strokeWeight(2);
	noStroke();
	c = color(141, 87, 33);
	fill(c);
	quad(140, 120, 160, 50, 200, 50, 150, 100);
	quad(150, 50, 180, 30, 280, 30, 300, 50);
	quad(190, 30, 220, 15, 280, 15, 300, 30);
	quad(260, 15, 320, 35, 350, 40, 350, 120);
	color("black");
	stroke("black");
	//movement functions
	if (yArm >= 300 || yArm <= 150)
	{
		randMovement1 *= -1;
	}
	yArm += randMovement1;
	if (xLeftLeg >= 150 || xLeftLeg <= 80)
	{
		randMovement2 *= -1;
	}
	xLeftLeg += randMovement2;
	xRightLeg += randMovement2 * -1;

	if (xCircle >= 450 || xCircle <= 50)
	{
		randMovement3 *= -1;
	}
	xCircle += randMovement3;
	if (yCircle >= 550 || yCircle <= 50)
	{
		randMovement4 *= -1;
	}
	yCircle += randMovement4; 
	//text stuff
	textSize(size);
	size = size + sizeInc;
	if (size == 18 || size == 2)
	{
		sizeInc *= -1;
	}
	text("Matthew Mickolio", 50, 550);
	
}