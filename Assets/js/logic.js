var currentQuestionIndex = 0;
var time = questions.length * 15;
var score = 0;


// Start button
var startBtn = document.querySelector("#start");
// Questions area of html
var questionElement = document.querySelector("#questions");
// timer section of html
var timerElement = document.querySelector("#time");
// Multiple choice section of html
var questionChoices = document.querySelector("#choices");
// High score screen
var highScore = document.querySelector('#end-screen');

var choiceBtn1El = document.querySelector("#choice1");
var choiceBtn2El = document.querySelector("#choice2");
var choiceBtn3El = document.querySelector("#choice3");
var choiceBtn4El = document.querySelector("#choice4");

console.log(choiceBtn1El, choiceBtn2El, choiceBtn3El, choiceBtn4El);

var choiceBtnArray = [choiceBtn1El, choiceBtn2El, choiceBtn3El, choiceBtn4El] 


// This function begins the quiz, hiding the start screen & displaying the first question.
function startQuiz() {
    var startScreen = document.querySelector("#start-screen")
    // The "hide" class below needs to have a CSS class that has display: none to hide the start screen.
    startScreen.setAttribute('class', 'hide');
    questionElement.removeAttribute('class');
    getQuestion();
    countdown();
}

// Calling the above function on start btn click
startBtn.onclick = startQuiz

// This function starts the timer
function countdown() {
  
    var timeInterval = setInterval(function () {
      time--;
      timerElement.textContent = time + " Seconds Remaining.";
  
      if(time <= 0) {
        clearInterval(timeInterval);
        questionElement.setAttribute('class', 'hide');
        highScore.removeAttribute('class');
      }
      
    }, 1000);
  }

// This function gets the current question that we are on and appends it to the page by pulling the values from the array of questions we defined in our questions.js doc.
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    
    // log is just to check that it's pulling the correct info from the array
    console.log(currentQuestion);

    titleElement.textContent = currentQuestion.title;

    for (var i = 0; i < choiceBtnArray.length; i++) {
      choiceBtnArray[i].textContent = currentQuestion.choice[i];

    }
       
    
}

// Function for checking whether the user selected to correct answer. Adds a point to local storage if right, subtracts time if wrong, displays correct / incorrect.
choiceBtn1El.addEventListener('click', function() {
  getAnswer(0);
  var userChoice = 0
});
choiceBtn2El.addEventListener('click', function() {
  getAnswer(1);
});
choiceBtn3El.addEventListener('click', function() {
  getAnswer(2);
});
choiceBtn4El.addEventListener('click', function() {
  getAnswer(3);
});

// throw in a score tracker function that incriments score when run. 
// throw in a timer function that subtracets timer by 10 seconds 


function getAnswer(userChoice) {
    console.log(userChoice);
    if (userChoice === questions[currentQuestionIndex].answer) {

      currentQuestionIndex++;
      getQuestion();
      scoreIncrease();
    } else {
      currentQuestionIndex++;
      getQuestion();
      timerSubtract();
    }
}

function timerSubtract() {

  console.log(time);
}

function scoreIncrease(){
  score++;
  console.log(score);
  localStorage.setItem("score", score);
}