var Cat, CatImg;
var Mouse, MouseImg;
var Garden, GardenImg;


function preload() {
    //load the images here
    GardenImg = loadImage("garden.png");

    CatImg = loadAnimation("cat1.png");

    MouseImg = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    Garden = createSprite(500, 400, 1000, 800);
    Garden.addImage("garden", GardenImg)
    //create tom and jerry sprites here

    Cat = createSprite("800, 400");
    Cat.addImage("cat", CatImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(Cat.isTouching(Mouse))
    {
       keyPressed();
    }
    {
       
    }
    drawSprites();
}


function keyPressed()
{
  Cat.changeAnimation("cat2.png", "cat3.png", "cat4.png");
  Mouse.changeAnimation( "mouse2.png", "mouse3.png", "mouse4.png");

}
