var bullet,bg;
var jedi,jedin,jedis,jedie,jediw,jedine,jedinw,jedise,jedisw;
var lowstd1,lowstd2,lowstd3;
var lowstdd1,lowstdd2,lowstdd3;
var lowstd,lowstdn,lowstds,lowstde,lowstdw,lowstdne,lowstdnw,lowstdse,lowstdsw;
function preload(){
  jedin = loadImage("jedi ship n.png");
  jedis = loadImage("jedi ship s.png");
  jedie = loadImage("jedi ship e.png");
  jediw = loadImage("jedi ship w.png");
  jedine = loadImage("jedi ship ne.png");
  jedinw = loadImage("jedi ship nw.png");
  jedise = loadImage("jedi ship se.png");
  jedisw = loadImage("jedi ship sw.png");
  lowstdn = loadImage("lowstdship n.png");
  lowstds = loadImage("lowstdship s.png");
  lowstde = loadImage("lowstdship e.png");
  lowstdw = loadImage("lowstdship w.png");
  lowstdne = loadImage("lowstdship ne.png");
  lowstdnw = loadImage("lowstdship nw.png");
  lowstdse = loadImage("lowstdship se.png");
  lowstdsw = loadImage("lowstdship sw.png");
  bg = loadImage("space bg.jpg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-105);
  jedi = createSprite(displayWidth/2,displayHeight/2,30,30)
  jedi.debug = true
  jedi.addImage(jedie);
  jedi.scale = 0.05
  jedi.setCollider("circle",0,0,1000)
  var lowstdd1 = createGroup();
  var lowstdd2 = createGroup();
  var lowstdd3 = createGroup();
}

function draw() {
  background(bg);  
 jedi.velocityX = 0
 jedi.velocityY = 0
  if(keyDown("w")){
    jedi.velocityY = -3
    jedi.addImage(jedin);
  }
    if(keyDown("s")){
    jedi.velocityY = 3
    jedi.addImage(jedis);
  }
    if(keyDown("a")){
    jedi.velocityX = -3
    jedi.addImage(jediw);
  }
    if(keyDown("d")){
    jedi.velocityX = 3
    jedi.addImage(jedie);
  }
   if(keyDown("w")&&(keyDown("a"))){
    jedi.addImage(jedinw);
  }
    if(keyDown("w")&&(keyDown("d"))){
    jedi.addImage(jedine);
  }
    if(keyDown("s")&&(keyDown("a"))){
    jedi.addImage(jedisw);
  }
    if(keyDown("s")&&(keyDown("d"))){
    jedi.addImage(jedise);
  }
    if(keyDown("s")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("s")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("d"))&&(keyDown("space"))){
    jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("w")&&(keyDown("a"))&&(keyDown("space"))){
    jedi.velocityX = -5
    jedi.velocityY = -5
  }
    if(keyDown("s")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = 5
  }
    if(keyDown("w")&&(keyDown("space"))){
    //jedi.velocityX = 5
    jedi.velocityY = -5
  }
    if(keyDown("d")&&(keyDown("space"))){
    jedi.velocityX = 5
    //jedi.velocityY = 5
  }
    if(keyDown("a")&&(keyDown("space"))){
    jedi.velocityX = -5
    //jedi.velocityY = 5
  }
 
  lowstd();
 
  drawSprites();
   
  
}

  function lowstd(){
    if(frameCount %150===0){
      lowstd1 = createSprite(Math.round(random(1,1000)),Math.round(random(1,800)),30,30)
      lowstd1.addImage(lowstdn)
      lowstd1.scale = 0.1
     // lowstdd1.add(lowstd1);
      lowstd2 = createSprite(Math.round(random(1,1000)),Math.round(random(1,800)),30,30)
      lowstd2.addImage(lowstdn)
      lowstd2.scale = 0.1
    //  lowstdd2.add(lowstd2);
      lowstd3 = createSprite(Math.round(random(1,1000)),Math.round(random(1,800)),30,30)
      lowstd3.addImage(lowstdn)
      lowstd3.scale = 0.1
     // lowstdd3.add(lowstd3);
      lowstd1.debug = true
      lowstd2.debug = true
      lowstd3.debug = true
  /* if(jedi.y>lowstd.y){
      lowstd.velocityY = 3
    }*/
    }
   
  }