
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");

    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,700);
    cat.addAnimation("catsleep",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(190,690);
    mouse.addAnimation("mousesleep",mouseImg1);
    mouse.scale = 0.17;

}

function draw() {
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catagsleep",catImg3);
        cat.changeAnimation("catagsleep",catImg3);

        mouse.addAnimation("mouseagsleep",mouseImg3);
        mouse.changeAnimation("mouseagsleep",mouseImg3);

        cat.x = 300;
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX = -7;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning",catImg2);

    mouse.addAnimation("mousechanging",mouseImg2);
    mouse.changeAnimation("mousechanging",mouseImg2);
    mouse.frameDelay = 25;
    

  }


}
