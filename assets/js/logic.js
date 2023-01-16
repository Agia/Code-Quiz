// ********* VARIABLES ********** //

// Start quiz button
let startButton = document.querySelector('#start');
// <div> containing start screen content
let startSection = document.querySelector('#start-screen');
let scoresLink = document.querySelector("#scores-link")

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

let feedback = document.querySelector('#feedback');

// <div> containing end screen / results
let resultsSection = document.querySelector('#end-screen');
// <span> containing users final score
let finalScore = document.querySelector('#final-score');
// Input for user initials
let initials = document.querySelector('#initials');
// Button to submit score to highscores
let submitScore = document.querySelector('#submit');
// <p> to provide user feedback if submission is out of certain parameters
let submissionFeedback = document.querySelector('#submission-feedback');

// Current score counter
let score = 0;
// Index count for use questions array related tasks
let questionIndex = 0;
// Will store the textContent of possible answers
let userChoice = "";
// Set the array to be the content of named localStorage, if it doesn't exist create an empty array
let highscores = JSON.parse(localStorage.getItem("scoresData") || '[]');


// ********* FUNCTIONS ********** //

// Timer function for countdown
function startTimer() {
    timeRemaining = 60;

    timerInterval = setInterval(function () {
        timerCount.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining <= 0) {
            showResults();
        }
    }, 1000)
}

function endTimer() {
    clearInterval(timerInterval);
    timerCount.textContent = 0;
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
}

// Checks if answer is correct, shows feedback, adds to score / deduces from time, then increasing question to next index, and calls renderQuestion()
function checkAnswer() {
    feedback.removeAttribute("class");
    if (userChoice === questions[questionIndex].answer) {
        feedback.innerHTML = "Correct! Go you 🥳";
        score++;
    } else {
        feedback.innerHTML = "Incorrect! Oops 🙊";
        timeRemaining -= 10;
    }
    questionIndex++;
    renderQuestion();
}

// Function to show results page
function showResults() {
    hideSection(questionsSection);
    hideSection(feedback);
    resultsSection.removeAttribute("class")

    endTimer();
    finalScore.textContent = score;
    
}

// Hides the passed element via CSS, using .hide
function hideSection(element) {
    element.setAttribute("class", "hide");
}


// ********* EVENT LISTENERS ********** //

// Event listener for 'Start Quiz' button
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    score = 0;
    // Starts the timer function
    startTimer();
    // Calls function to render question section
    renderQuestion();
});

// Event listener for answers / choices buttons
choices.addEventListener("click", function (event) {
    event.preventDefault();

    // if click matches on button, assign the textcontent of its target to variable, then call checkAnswer()
    if (event.target.matches("button")) {
        userChoice = event.target.textContent;
        checkAnswer();
    }
});

// Event listener for user input on result page
submitScore.addEventListener("click", function (event) {
    event.preventDefault();

    // Set user inputted name to variable
    let endScore = finalScore.textContent;
    let userInitials = initials.value;
    // Empty feedback of any previous content
    submissionFeedback.textContent = "";

    // Checks for an empty value
    if (userInitials === "") {
        submissionFeedback.textContent = "You must enter at least 1 character to submit your score."
        return;
    }
    // Checks to make sure the input is within the required length range
    if (userInitials.length > 3) {
        submissionFeedback.textContent = "Your username must be no longer than 3 characters."
        initials.value = "";
        return;
    }

    // Creates a object to score the current users initials and score
    userSaveData = {"initials": userInitials, "score": endScore};
    // Push new saved data to highScores array
    highscores.push(userSaveData);

    // Save to local storage
    localStorage.setItem("scoresData", JSON.stringify(highscores));
    
    // Reset initials input value to empty string
    initials.value = "";
    // Hide results section and show start section
    resultsSection.setAttribute("class", "hide");
    startSection.setAttribute("class", "start");
});
