function setup()
{
	createCanvas(500,600);
}

function draw()
{
	let c = color(241, 224, 187);
	strokeWeight(2);
	background(120);
	fill("green");
	rect(190, 200, 120, 200);
	fill(c);
	circle(250,120,200);
	fill("pink");
	arc(250, 190, 30, 15, TWO_PI, -PI);
	fill("white");
	triangle(190, 120, 220, 120, 205, 100);
	triangle(310, 120, 280, 120, 295, 100);
	triangle(240, 150, 260, 150, 250, 140);
	strokeWeight(5);
	point(205, 113);
	point(295, 113);
	line(189, 250, 80, 200);
	line(311, 250, 420, 200);
	line(200, 401, 150, 500);
	line(300, 401, 350, 500);
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
	text("Matthew Mickolio", 380, 550, 100, 25);
	
}