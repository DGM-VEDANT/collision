var fixedRect,movingRect;

function setup() {
  createCanvas(1800,800);

 fixedRect = createSprite(400, 200, 100, 50);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;

 movingRect = createSprite(600,200,50,100);
 movingRect.shapeColor = "blue";
movingRect.debug = true;

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}