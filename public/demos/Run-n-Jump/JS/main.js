/*
//**----- TO DO LIST -----**\\
1. Fix cacti glitching
2. 
*/

//Base game const setting up canvas and the death screen video
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let video = document.getElementById('myVideo');
ctx.imageSmoothingEnabled = false;

//Resizing canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Make the window size readjust to the browser
window.onresize = function () {
  //Canvas is stretched to the browser
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  GROUND = canvas.height / 1.5;
  if (player && player.onGround) {
    player.y = GROUND - player.h;
  }
};

//MAIN GAME VARS
let score = 0;
let speedHelper = 0;
let gravity = 1.5;
let groundColor = '#c3b949';
let gameSong = new Audio('audio/game.mp3');
let gameMaxVolume = 0.5;
let songPlaying = false;
let then = performance.now();
let dt = 0;

//Set the modes
var easy = false;
var medium = true;
var hard = false;

//In hard mode the scroll speed starts at 20
var scrollSpeed = 16;
//In hard mode the max speed is 35
var maxSpeed = 27;

//Set the volume of the game song
gameSong.volume = 0;
gameSong.loop = true;

//Set the ground height
let GROUND = canvas.height / 1.5;

//Add a player to teh game
let player = new Player(125, 425, 40, 50);

//Make the lists of birds and cacti
let birds = [];
let cacti = [];
let deadList = [];

//DRAW GROUND
function drawGround() {

  //Fill in the ground with its set color
  ctx.fillStyle = groundColor;
  //Setting the ground width and height
  ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);
};

//Check for the space bar being pressed
document.addEventListener('keydown', event => {
  //If space bar pressed
  if (event.key == ' ') {
    //run the jump function in the player class
    player.jump();
    //console.log(player.jumping);
  }
});

//RANDOM INTEGER
function randomInt(min, max) {

  //Return a number between the set min and max
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//SPAWN CACTUS
function Spawnbird() {

  //If random number is greater than 5 spawn tiny bird
  if (randomInt(1, 10) > 5) {
    let bird = new Bird();
    let cactiRange = 160;
    //Add a new bird to the list of all of them
    birds.push(bird);

    let overLappingCacti = cacti.some(cactus => {
      return bird.x > cactus.x - cactiRange && bird.x < cactus.x + cactus.w + cactiRange && bird.y > cactus.y - cactiRange && bird.y < cactus.y + cactus.h + cactiRange;
    });
    if (overLappingCacti) {
      birds.pop();
    };
    //Delete birds that are off map
    if (bird.y < 0) {
      birds.pop();
    };
  };
};

//SPAWN CACTUS
function SpawnCactus() {

  //If the random number is greater then 3 spawn the big fat cactus
  if (randomInt(1, 10) > 3) {
    let cactus = new Cactus();
    //Add a new cactus to the list of them all
    cacti.push(cactus);

    //Delete cacti that are off map
    if (cactus.x < 0) {
      cacti.pop();
    };
  };
};

//Self Explanatory ah function
function showDeathScreen() {
  //Shows death screen
  document.getElementById('deathScreen').style.display = 'inline';
};

//RESPAWN
function respawn() {

  //Make the player.dead var false
  player.dead = false;
  //Get rid of the death screen
  document.getElementById('deathScreen').style.display = 'none';
  //Update the score
  score = 0;
  //Reset birds and cacti lists
  birds = [];
  cacti = [];
  player.y = GROUND - player.h;
  player.yv = 0;
  player.jumping = false;
  then = performance.now();
  //Run update function to start up the game
  update();
};

//SCORE
function scoreAdd() {

  //If player is not dead
  if (player.dead != true) {
    //Add to the score then up the second score var to later update the speed
    score++;
    speedHelper++;
    //Display the score
    document.getElementById('scoreWhen').innerText = `Your score: ${score}`;
  }
};

//FADE IN AUDIO
function fadeIn() {
  let volume = 0;
  let interval = setInterval(() => {
    volume += 0.01;
    gameSong.volume = volume;
    if (volume >= gameMaxVolume) {
      clearInterval(interval);
    }
  }, 100);
};

//When you jump start the audio
addEventListener('keydown', () => {
  if (songPlaying) return;
  fadeIn();
  gameSong.play();
  songPlaying = true;
});

//DELTA TIME
function getDeltaTime() {
  const now = performance.now();
  const dt = Math.min((now - then) / (1000 / 60), 2);
  then = now;

  return dt;
};

function setDifficulty(mode, speed, cap) {
  easy = mode === 'easy';
  medium = mode === 'medium';
  hard = mode === 'hard';
  scrollSpeed = speed;
  maxSpeed = cap;
  localStorage.setItem('runNJumpDifficulty', mode);
  updateDifficultyDisplay(mode);
}

function updateDifficultyDisplay(mode) {
  const status = document.getElementById('difficultyStatus');
  if (!status) return;
  status.textContent = `Difficulty: ${mode.charAt(0).toUpperCase()}${mode.slice(1)}`;
}

//SET EASY MODE
function easyMode() {
  setDifficulty('easy', 12, 25);
};

//SET MEDIUM MODE
function mediumMode() {
  setDifficulty('medium', 16, 27);
};

//SET HARD MODE
function hardMode() {
  setDifficulty('hard', 20, 33);
};

const savedDifficulty = localStorage.getItem('runNJumpDifficulty') || 'medium';
if (savedDifficulty === 'easy') easyMode();
else if (savedDifficulty === 'hard') hardMode();
else mediumMode();
document.addEventListener('DOMContentLoaded', () => updateDifficultyDisplay(savedDifficulty));

//UPDATE GAME
function update() {
  //Reset canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Set the delta time
  dt = getDeltaTime();
  //console.log(dt);

  //If player has died then stop the game
  if (player.dead) {
    return;
  }
  //console.log(birds.xv);s

  //Load in the player and draw the ground
  player.draw();
  player.update();
  drawGround();

  //Console log the list of birds and cacti
  //console.log(cacti);
  //console.log(birds);

  //****ADD SPRITE FOR CACTI HERE****

  //Spawn and update birds on the map
  for (let b = birds.length - 1; b >= 0; b--) {
    const bird = birds[b];
    if (bird.dead) {
      birds.splice(b, 1);
      continue;
    }
    bird.draw();
    bird.update();
    if (collision(player, bird)) {
      player.dead = true;
    }

    //Delete birds that are off map
    if (bird.x < 0) {
      bird.dead = true;
    }
  }

  //Spawn and update cati on the map
  for (let c = cacti.length - 1; c >= 0; c--) {
    const cactus = cacti[c];
    if (cactus.dead) {
      cacti.splice(c, 1);
      continue;
    }
    cactus.draw();
    cactus.update();
    if (collision(player, cactus)) {
      player.dead = true;
    }

    //Delete cacti that are off map
    if (cactus.x < 0) {
      cactus.dead = true;
    }
  }

  //If the player dies then show the death screen
  if (player.dead) {
    showDeathScreen();
  }

  deadList.splice(0, deadList.length);

  requestAnimationFrame(update);
};

//Run the update function and set the spawns and score to activate at said times
update();
setInterval(SpawnCactus, randomInt(500, 1300));
setInterval(Spawnbird, randomInt(500, 1300));
setInterval(scoreAdd, 100);