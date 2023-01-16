let clearScoreButton = document.querySelector("#clear");
let scoreTable = document.querySelector("#highscores");


function showHighscores() {
    let savedScores = JSON.parse(localStorage.getItem("scoresData") || '[]');

    if (savedScores.length >= 1) {
        for (let i = 0; i < savedScores.length; i++) {
            let initials = savedScores[i].initials.toUpperCase();
            let score = savedScores[i].score;
            let userRow = document.createElement("tr");

            userRow.innerHTML = `<td>${initials}</td><td>${score}</td>`

            scoreTable.appendChild(userRow);
        }
    }
};

if (document.getElementById('score-page')) {
    clearScoreButton.addEventListener("click", function (event) {
        clearScores();
    });
};


function clearScores () {
    highscores = [];
    scoreTable.innerHTML = "";
    localStorage.removeItem("scoresData");
};

document.addEventListener("DOMContentLoaded", function (event) {
    showHighscores();
});