const display = document.querySelector(".cardbtm");
let hitNum = '';
let score = 0;
let time = 60;

// Create a separate function to handle the button
function createRestartButton() {
  const button = document.createElement("button");
  button.id = "button";
  button.textContent = "Restart";
  display.appendChild(button);
  button.addEventListener("click", restartGame);
}

// Function to generate the bubble buttons
function makeBabul() {
  let babulStore = "";
  for (let i = 1; i <= 70; i++) {
    const num = Math.floor(Math.random() * 10);
    babulStore += `<div class="btn">${num}</div>`;
  }
  display.innerHTML = babulStore;
}

// Function to show the timer
function showTimer() {
  const timer = document.querySelector("#timer");
  const storInt = setInterval(function() {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(storInt);
      document.querySelector("#shoot").textContent = "0";
      display.innerHTML = "";
      display.innerHTML = "<h1>GAME OVER!</h1>";
      createRestartButton(); 
    }
  }, 1000);
}

// Function to generate a random number for the "Shoot" section
function shootNum() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#shoot").textContent = hitNum;
}

// Function to update the score
function totalScore() {
  score += 10;
  document.querySelector("#scoreNum").textContent = score;
}

// Event listener for clicking on the bubble buttons
display.addEventListener("click", function(e) {
  const clickedNum = Number(e.target.textContent);
  if (clickedNum === hitNum) {
    makeBabul();
    totalScore();
    shootNum();
  }
});

// Function to restart the game
function restartGame() {
  time = 60;
  score = 0;
  display.innerHTML = ""; 
  makeBabul();
  showTimer();
  shootNum();
  document.querySelector("#scoreNum").textContent = score;
}

//call the  function 
createRestartButton();
makeBabul();
showTimer();
shootNum();