// ********* VARIABLES ********** //

let startButton = document.querySelector('#start');
let startSection = document.querySelector('#start-screen');

let timerCount = document.querySelector('#time');

let questionsSection = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');

let resultsSection = document.querySelector('#end-screen');
let initials = document.querySelector('#initials');
let finalScore = document.querySelector('#final-score');
let submitScore = document.querySelector('#submit');

let questionIndex = 0;



// ********* FUNCTIONS ********** //

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

function renderQuestion () {
    choices.innerHTML = "";

    if (questionIndex === questions.length) {
        return;
        // TODO: Call function to show results section
    }

    // Checks if the start section has a class of hide, and if not appends it to it's current class
    if (startSection.getAttribute !== "class", "hide") {
        startSection.setAttribute("class", "hide start");
    }

    // Checks if the question section has a class of hide, and if not, adds it
    if (questionsSection.getAttribute !== "class", "hide") {
        questionsSection.removeAttribute("class");
    }

    // Stores the 'question' value at relevant index of of the 'questions' array
    let currentQuestionTitle = questions[questionIndex].question;
    // Populates the question title header with question text from the questions array
    questionTitle.textContent = currentQuestionTitle;

    // Loops through the current question's choices array
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        // Assign the current loop of choices to the choice variable
        let choice = questions[questionIndex].choices[i];
        // Creates a button and assigns it to a variable
        let answerButton = document.createElement("button");
        // Adds the current choice as text to the button
        answerButton.textContent = choice;
        // Appends the button to the parent choices div
        choices.appendChild(answerButton);
    }

    questionIndex++;
}



// ********* EVENT LISTENERS ********** //

// Event listener for 'Start Quiz' button
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    // TODO: If timer already running check
    
    startTimer();

    // TODO: Call function to render question section

})