// Stores the Clear button element for highscores
let clearScoreButton = document.querySelector("#clear");
// Stores the parent table element on highscores.html
let scoreTable = document.querySelector("#highscores");

// Retrieves stored scoresData and renders it to the page using a table for layout
function showHighscores() {
    let savedScores = JSON.parse(localStorage.getItem("scoresData") || '[]');

    if (savedScores.length >= 1) {
        // Sorts the score from highest to lowest
        savedScores.sort(function (i,j) {
            return j.score - i.score;
        })
        // Prints a table row, with  a td element for each property (initial and score).
        for (let i = 0; i < savedScores.length; i++) {
            let initials = savedScores[i].initials.toUpperCase();
            let score = savedScores[i].score;
            let userRow = document.createElement("tr");

            userRow.innerHTML = `<td>${initials}</td><td>${score}</td>`

            scoreTable.appendChild(userRow);
        }
    }
};

// If on highscores page, starts listening for a click on clear button, and on click, run clearScores() function
if (document.getElementById('score-page')) {
    clearScoreButton.addEventListener("click", function (event) {
        clearScores();
    });
};

// Clears all current content in the HTML listed, and removes relevant data from localStorage
function clearScores () {
    highscores = [];
    scoreTable.innerHTML = "";
    localStorage.removeItem("scoresData");
};

// If Highscores.html is loaded, call showHighscores() function
document.addEventListener("DOMContentLoaded", function (event) {
    showHighscores();
});