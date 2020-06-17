var blood,maze,ball,maze1
function preload(){
  bloodImg=loadImage ("blood.png")
  //mazeImg=loadImage ("maze.png")
 // maze1Img=loadImage("maze1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-180);
  blood = createSprite(520, 290, 50, 50);
  blood.addImage(bloodImg);
  blood.scale=0.07;
  
 // maze.addImage(mazeImg);
  maze  = createSprite(788.6,60,570,10)
  maze1 = createSprite(500,160,10,210);
  maze2 = createSprite(500,450,10,250);
  maze3 = createSprite(785,570,580,10);
  maze4 = createSprite(1070,345,10,460);
  maze5 = createSprite(605,210,10,100);
  maze6 = createSprite(550,210,100,10);
  maze7 = createSprite(582,120,155,10);
  maze8 = createSprite(655,170,10,90);
  maze9 = createSprite(704,210,90,10);
  maze10 = createSprite(580,156,60,10);
  maze11 = createSprite(750,115,10,100);
  maze12 = createSprite(845,90,10,50);
  maze13 = createSprite(980,80,10,49);
  maze14 = createSprite(930,100,90,10);
  maze15 = createSprite(824,232,10,150);
  maze16 = createSprite(792,312,74,10);
  maze17 = createSprite(754,342,10,70);
  maze18 = createSprite(659.5,372,200,10);
  maze19 = createSprite(610,520,10,110);
  maze20 = createSprite(556,425,10,200);
  maze21 = createSprite(581,421,60,10);
  maze22 = createSprite(700,390,10,210);
  maze23 = createSprite(640,500,50,10);
  maze24 = createSprite(750,490,100,10);
  maze25 = createSprite(800,510,10,50);
  maze26 = createSprite(760,450,10,70);
  maze27 = createSprite(860,510,10,117);
  maze28 = createSprite(890,450,180,10);
  maze29 = createSprite(1000,490,150,10);
  maze30 = createSprite(925,517,10,65);
  maze31 = createSprite(950,545,60,10);
  maze32 = createSprite(1035,430,10,120);
  maze33 = createSprite(982,370,115,10);
  maze34 = createSprite(925,331.5,10,85);
  maze35 = createSprite(940,290,120,10);
  maze36 = createSprite(880,315,10,60);
  maze37 = createSprite(852,350,65,10);
  maze38 = createSprite(900,190,160,10);
  maze39 = createSprite(975,157,10,77);
  maze40 = createSprite(1022,120,105,10);
  maze41 = createSprite(1010,240,120,10)
  maze41.shapeColor="black"
 // maze1.addImage(maze1Img);

  
  
 // maze1.addImage(maze1Img);
 // maze1.scale= 0.5;
 // maze1 = createSprite(25,100)
}

function draw() {
  background(231,76,100);
  if(keyDown (UP_ARROW) ){
    blood.y = blood.y-4;
  }
  if(keyDown (DOWN_ARROW)){
blood.y=blood.y+4;
  }
  if (keyDown(LEFT_ARROW)){
    blood.x=blood.x-4;
  }
if (keyDown(RIGHT_ARROW)){
  blood.x=blood.x+4;
}

  
  drawSprites();
}
