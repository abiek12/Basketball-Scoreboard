/**
 * Increases the home team's score by 1
 */
function homePlusOne() {
  document.getElementById("home-score").textContent++;
}

/**
 * Increases the home team's score by 2
 */
function homePlusTwo() {
  document.getElementById("home-score").textContent =
    Number(document.getElementById("home-score").textContent) + 2;
}

/**
 * Increases the home team's score by 3
 */
function homePlusThree() {
  document.getElementById("home-score").textContent =
    Number(document.getElementById("home-score").textContent) + 3;
}

/**
 * Resets the home team's score to 0
 */
function homeReset() {
  document.getElementById("home-score").textContent = 0;
}

/**
 * Increases the away team's score by 1
 */
function awayPlusOne() {
  document.getElementById("away-score").textContent++;
}

/**
 * Increases the away team's score by 2
 */
function awayPlusTwo() {
  document.getElementById("away-score").textContent =
    Number(document.getElementById("away-score").textContent) + 2;
}

/**
 * Increases the away team's score by 3
 */
function awayPlusThree() {
  document.getElementById("away-score").textContent =
    Number(document.getElementById("away-score").textContent) + 3;
}

/**
 * Resets the away team's score to 0
 */
function awayReset() {
  document.getElementById("away-score").textContent = 0;
}
