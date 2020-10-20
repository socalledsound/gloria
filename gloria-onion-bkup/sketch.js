// let onion_sprite_sheet;
// let oniondata;
// let onionAnimation;
// let onion;
let ghost;
let ghost_animation;
let bg;
let bgY = 300;

const onion_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

function preload(){
  // loadJSON('onion/onion.json', function(oniondata){
  //   console.log(oniondata);
  //   onion_sprite_sheet = loadSpriteSheet('onion/onion.png', oniondata);
// });
  ghostAnimation = loadAnimation('ghost/ghost_standing0001.png', 'ghost/ghost_standing0007.png');
  
  
  onion_sprite_sheet = loadSpriteSheet('onion/onion.png', 32, 32, 6);
  // onion_sprite_sheet = loadSpriteSheet('player_spritesheet.png', 32, 32, 6);

  onionAnimation = loadAnimation(onion_sprite_sheet);
  onion = createSprite(200, 200, 32, 32);

  bg = loadImage('ball-game.jpeg');

  
}

function setup(){
  createCanvas(1000, 1000);
  onion.addAnimation('onion', onionAnimation);

  onion.scale = 4.0;

}

function draw(){
  background(220, 20, 190);
  //  animation(onionAnimation, width/2, height/2);
 drawSprites();


   image(bg, 300, bgY, 100, 100);
  bgY--

}


function keyPressed(){
  if(key === 'a'){
    onion.setSpeed(-1, 0)
  }
}