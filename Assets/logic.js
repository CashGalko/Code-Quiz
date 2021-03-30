var currentQuestion = 0;
var time = questions.length * 15;


// Start button
var startBtn = document.querySelector("#start");
// Questions area of html
var questionElement = document.querySelector("#questions");
// timer section of html
var timerElement = document.querySelector("#time");
// Multiple choice section of html
var questionChoices = document.querySelector("#choices");


// This function begins the quiz, hiding the start screen & displaying the first question.
function startQuiz() {
    var startScreen = document.querySelector("#start-screen")
    // The "hide" class below needs to have a CSS class that has display: none to hide the start screen.
    startScreen.setAttribute('class', 'hide');
    questionElement.removeAttribute('class');
}

// Calling the above function on start btn click
startBtn.onclick = startQuiz

