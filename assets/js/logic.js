let startButton = document.querySelector('#start');
let timerCount = document.querySelector('#time');
let question = document.querySelector('#questions')


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