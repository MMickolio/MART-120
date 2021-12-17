	var squareDis = [];
	var padOneMove = 200;
	var padTwoMove = 200;
	var xPos = 400;
	var yPos = 300;
	var xSpeed = 3;
	var ySpeed = 3;
	var scoreboard = Array(2).fill(0);

	function setup() {
		createCanvas(800,600);
		background(0);
	}
	
	function draw() {
		background(0);
		objCreate();
		paddleCreate();
		paddleMovementOne();
		paddleCollision();
		ballCreate();
		ballMovement();
		paddleTwoAI();
		determinePoint();
		scoreDisplay();
	}
	
	function objCreate() {
		fill("white");
		rect(0,0,800,19);
		rect(0,580,800,20);
		var y = 36;
		while (y < 580) {
			square(395, y, 11);
			y = y + 26;
		}
	}

	function paddleCreate() {
		rect(10, padOneMove, 12, 72);
		rect(778, padTwoMove, 12, 72);
	}
	
	function paddleMovementOne() {
		//paddle one
		if (keyIsDown(83) && keyIsDown(87)) {
		} else if (keyIsDown(87)) {
			padOneMove -= 8;		
		} else if (keyIsDown(83)) {
			padOneMove += 5;
		}
	}
	
	function paddleTwoAI() {
		if (yPos > padTwoMove) {
			padTwoMove += 5;
		} else if (yPos < padTwoMove) {
			padTwoMove -= 10;
		} 
	}
	
	
	function paddleCollision() {
		if (padOneMove >= 508) {
			padOneMove = 507;
		} else if (padOneMove <= 19) {
			padOneMove = 20;
		}
		if (padTwoMove >= 508) {
			padTwoMove = 507;
		} else if (padTwoMove <= 19) {
			padTwoMove = 20;
		}
	}
	
	function ballCreate() {
		square(xPos, yPos, 12);
	}
	
	function ballMovement() {
		//bottom collision
		if (yPos < 560) {
			yPos += ySpeed;
		} else if (yPos >= 561) {
			ySpeed = ySpeed * (-1);
			yPos += ySpeed;
		}
		//top collision
		if (yPos > 19) {
			yPos += ySpeed;
		} else if (yPos <= 19) {
			ySpeed = ySpeed * (-1);
			yPos += ySpeed;
		}
		//general x axis movement
		if (xPos > 0 && xPos < 799) {
			xPos += xSpeed;
		}
		//paddle one collision THIS NEEDS WORK
		if (xPos <= 24 && yPos > padOneMove && yPos < (padOneMove + 72)) {
			xSpeed = xSpeed * (-1);
			xPos += xSpeed;
		}
		//paddle two collision
		if (xPos >= 766 && yPos > padTwoMove && yPos < (padTwoMove + 72)) {
			xSpeed = xSpeed * (-1);
			xPos += xSpeed;
		}
	}
	
	function determinePoint() {
		if (xPos < 5) {
			scoreboard[1] = scoreboard[1] + 1;
			xPos = 400;
			yPos = 300;
			xSpeed = xSpeed * (-1);
		} else if (xPos > 795) {
			scoreboard[0] = scoreboard[0] + 1;
			xPos = 400;
			yPos = 300;
			xSpeed = xSpeed * (-1);
		}
	}
	
	function scoreDisplay() {
		fill("white");
		textSize(40);
		text(nf(scoreboard[0]), 250, 80);
		text(nf(scoreboard[1]), 530, 80);
		
	}
			
