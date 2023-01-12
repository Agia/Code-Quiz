let startButton = document.querySelector('#start');

let timerCount = document.querySelector('#time');

let questionsSection = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');

let resultsSection = document.querySelector('#end-screen');
let initials = document.querySelector('#initials');
let finalScore = document.querySelector('#final-score');
let submitScore = document.querySelector('#submit');



// Timer function for countdown
function startTimer() {
    timeRemaining = 60;

    timerInterval = setInterval(function () {
        timerCount.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining === 0) {
            // TODO: Call function to show results section
        }
    }, 1000)
}

startButton.addEventListener("click", function (event) {
    event.preventDefault();

    startTimer();

    // TODO: Call function to render question section

})