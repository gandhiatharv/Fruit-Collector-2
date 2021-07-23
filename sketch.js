var database;
var back_img;
var gameState =0;
var playerCount = 0;
var carsAtEnd = 0;
var a = 0;
var tries = 2;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits, bomb;
var fruitGroup, bombGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img, bombimg;
var player_img;
var bombhit, endsound, gainpoint, losepoint, playsound;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  bombimg = loadImage("images/bomb.png");
  gainpoint = loadSound("gainpoint.wav");
  losepoint = loadSound("losepoint.wav");
  bombhit = loadSound("bombhit.mp3");
  endsound = loadSound("endsound.mp3");
  playsound = loadSound("playsound.mp3");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  fruitGroup = new Group();
  bombGroup = new Group();
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
  
  if(tries === 2 && gameState === 1){
    endsound.stop();
  playsound.play();
    tries = tries - 1;
  }
   if (gameState === 2) {
    
     game.end();
   }
}
