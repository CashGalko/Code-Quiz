var currentQuestionIndex = 0;
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
    getQuestion();
}

// Calling the above function on start btn click
startBtn.onclick = startQuiz

// This function starts the timer


// This function gets the current question that we are on and appends it to the page by pulling the values from the array of questions we defined in our questions.js doc.
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    // log is just to check that it's pulling the correct info from the array
    console.log(currentQuestion);

    titleElement.textContent = currentQuestion.title;

    // for loop to create each of the buttons needed for the multiple choice.
    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var userChoice = document.createElement("button");
        // the class "choice" will need to have CSS styling.
        userChoice.setAttribute('class', 'choice');
        userChoice.setAttribute('value', currentQuestion.choice[i]);
        userChoice.textContent = i + 1 + "." + currentQuestion.choice[i];

        questionChoices.appendChild(userChoice);
    }
    // Function for checking whether the user selected to correct answer. Adds a point to local storage if right, subtracts time if wrong, displays correct / incorrect.
    function getAnswer (event) {
        var userAnswer = userChoice.addEventListener('click', getAnswer)
        
        // if/else needs to be fixed.
        if (userAnswer === userChoice){
            console.log(userAnswer);
        }
    }
}