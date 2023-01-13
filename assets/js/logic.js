// ********* VARIABLES ********** //

// Start quiz button
let startButton = document.querySelector('#start');
// <div> containing start screen content
let startSection = document.querySelector('#start-screen');

// Display text showing timer
let timerCount = document.querySelector('#time');
// Timer countdown
let timeRemaining = 0;

// <div> containing question and answers content
let questionsSection = document.querySelector('#questions');
// <h2> for questions
let questionTitle = document.querySelector('#question-title');
// <div> containing choices content
let choices = document.querySelector('#choices');

// <div> containing end screen / results
let resultsSection = document.querySelector('#end-screen');
// <span> containing users final score
let finalScore = document.querySelector('#final-score');
// Input for user initials
let initials = document.querySelector('#initials');
// Button to submit score to highscores
let submitScore = document.querySelector('#submit');
// Current score counter
let score = 0;

// Index count for use questions array related tasks
let questionIndex = 0;

let userChoice = "";


// ********* FUNCTIONS ********** //

// Timer function for countdown
function startTimer() {
    timeRemaining = 60;

    timerInterval = setInterval(function () {
        timerCount.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            // TODO: Call function to show results section
        }
    }, 1000)
}

// Function to render questions and choices to screen
function renderQuestion () {
    // Removes any text content from choices buttons and question header
    choices.innerHTML = "";
    questionTitle.innerHTML = "";

    if (questionIndex === questions.length) {
        // Resets questionIndex to 0 on complete cycle through array
        questionIndex = 0;
        // Calls function to show results section
        showResults();
        // Exits from renderQuestion function
        return;
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
        answerButton.setAttribute("class", "answer-button")
        // Appends the button to the parent choices div
        choices.appendChild(answerButton);
    }

    // questionIndex++;
}

function checkAnswer() {
    if (userChoice === questions[questionIndex].answer) {
        // TODO: Display message to screen "Correct"
        score++;
    } else {
        // TODO: Display message to screen "Incorrect"
        timeRemaining -= 10;
    }
    questionIndex++;
    renderQuestion();
}

// Function to show results page
function showResults() {
    questionsSection.setAttribute("class", "hide");
    resultsSection.removeAttribute("class")
}


// ********* EVENT LISTENERS ********** //

// Event listener for 'Start Quiz' button
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    // TODO: If timer already running check
    // Starts the timer function
    startTimer();
    // Calls function to render question section
    renderQuestion();
})

// Event listener for answers / choices buttons
choices.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.matches("button")) {
        userChoice = event.target.textContent;
        checkAnswer();
    }
})