	var playerX = 0;
	var playerY = 0;
	var randSpeedX = 0;
	var randSpeedY = 0;
	var randObjOneX = 0;
	var randObjOneY = 0;
	var randObjTwoX = 0;
	var randObjTwoY = 0;
	var randObjSizeOne = 0;
	var randObjSizeTwo = 0;
	var randColor = 0;
	var mouseXOrg = 0;
	var mouseYOrg = 0;
	var winCon = false;

    function setup() 
    {
      createCanvas(800, 600);
	  background(0);
	  randSpeedX = Math.floor(Math.random() * 10) + 1;
	  randSpeedY = Math.floor(Math.random() * 10) + 1;
	  //object location randomizer
	  randObjOneX = Math.floor(Math.random() * 750) + 50;
	  randObjOneY = Math.floor(Math.random() * 550) + 50;
	  randObjTwoX = Math.floor(Math.random() * 750) + 50;
	  randObjTwoY = Math.floor(Math.random() * 550) + 50;
	  randObjSizeOne = Math.floor(Math.random() * 50) + 20;
	  randObjSizeTwo = Math.floor(Math.random() * 50) + 20;
	  randColor = Math.floor(Math.random() * 120) + 50;
    }

    function draw() 
    {
		background(0);
		fill("yellow");
		square(playerX, playerY, 20);		//playerX
		fill("lime");
		square(770, 570, 30);
		
		fill((randColor * 2), randColor, randColor);
		square(randObjOneX, randObjOneY, randObjSizeOne);
		square(randObjTwoX, randObjTwoY, randObjSizeTwo);
		fill("blue");
		rect(mouseXOrg, mouseYOrg, 30, 60);
		
		//exit logic
		if (playerX >= 750 && playerY >= 550)
		{
			winCon = true;
		}
		if (winCon == true)
		{
			fill("white");
			textSize(40);
			text("you win!", 300, 200);
		}
		
		//Movement for object one
		if (randObjOneX >= (800 - randObjSizeOne))
		{
			randObjOneX = 1;
		}
		else if (randObjOneX < 0)
		{
			randObjOneX = 799;
		}
		else if (randObjOneX > 0 && randObjOneX < 800)
		{
			randObjOneX += randSpeedX;
		}
		
		if (randObjOneY >= 600 - randObjSizeOne)
		{
			randObjOneY = 1;
		}
		else if (randObjOneY <= 0)
		{
			randObjOneY = 599;
		}
		else if (randObjOneY > 0 && randObjOneY < 600)
		{
			randObjOneY += randSpeedY;
		}
		
		//movement for object two
		if (randObjTwoX <= 0)
		{
			randObjTwoX = (800 - randObjSizeTwo);
		}
		else if (randObjTwoX > 0 && randObjTwoX < 800)
		{
			randObjTwoX -= randSpeedX;
		}
		
		if (randObjTwoY <= 0)
		{
			randObjTwoY = 599;
		}
		else if (randObjTwoY > 0 && randObjTwoY < 600)
		{
			randObjTwoY -= randSpeedY;
		}
		
		
		
		//diagonals
		if (keyIsDown(87) && keyIsDown(65))
		{
			playerY -= 2;
			playerX -= 2;
		}
		else if (keyIsDown(87) && keyIsDown(68))
		{
			playerY -= 2;
			playerX += 2;
		}
		else if (keyIsDown(83) && keyIsDown(65))
		{
			playerY += 2;
			playerX -=2;
		}
		else if (keyIsDown(83) && keyIsDown(68))
		{
			playerY += 2;
			playerX += 2;
		}
		else if (keyIsDown(83) && keyIsDown(87))
		{
		}
		else if (keyIsDown(65) && keyIsDown(68))
		{
		}
		else if (keyIsDown(87))			//w
		{
			playerY -= 2;
		}
		else if (keyIsDown(83))		//s
		{
			playerY += 2;
		}
		else if (keyIsDown(65))		//a
		{
			playerX -= 2;
		}
		else if (keyIsDown(68))		//d
		{
			playerX += 2;
		}
		
		
		
	}
	
	function mousePressed()
	{
		mouseXOrg = mouseX;
		mouseYOrg = mouseY;
		return false;
	}
	
	