var currentQuestionIndex = 0;
var time = questions.length * 15;
var score = 0;
var highScore = [];

// Start button
var startBtn = document.querySelector("#start");
// start screen element
var startScreen = document.querySelector("#start-screen");
// Questions area of html
var questionElement = document.querySelector("#questions");
// timer section of html
var timerElement = document.querySelector("#time");
// Multiple choice section of html
var questionChoices = document.querySelector("#choices");
// Submit Score screen
var endScreenElement = document.querySelector('#end-screen');
// Score submit button on end screen
var scoreSubmit = document.querySelector('#submit');
//Highscore Screen
var highScoreElement = document.querySelector('#high-score');


var choiceBtn1El = document.querySelector("#choice1");
var choiceBtn2El = document.querySelector("#choice2");
var choiceBtn3El = document.querySelector("#choice3");
var choiceBtn4El = document.querySelector("#choice4");

console.log(choiceBtn1El, choiceBtn2El, choiceBtn3El, choiceBtn4El);

var choiceBtnArray = [choiceBtn1El, choiceBtn2El, choiceBtn3El, choiceBtn4El] 

// Takes you straight to the highscores page.
var highScoresBtn = document.querySelector('#view-highscore');
highScoresBtn.onclick = highScoreLog;

// This function begins the quiz, hiding the start screen & displaying the first question. It also resets all of the relevant variables to their starting values for replayability. 
function startQuiz() {
    
    score = 0;
    currentQuestionIndex = 0;
    time = questions.length * 15;
    console.log(score);
    console.log(currentQuestionIndex);
    document.querySelector('nav').removeAttribute('class');
    startScreen.setAttribute('class', 'hide');
    endScreenElement.setAttribute('class', 'hide');
    highScoreElement.setAttribute('class', 'hide');
    questionElement.removeAttribute('class');
    getQuestion();
    countdown();
    
}

// Calling the above function on start btn click
startBtn.onclick = startQuiz;

// This function starts the timer
function countdown() {
  
    var timeInterval = setInterval(function () {
      time--;
      timerElement.textContent = time + " Seconds Remaining.";
  
      if(time <= 0) {
        clearInterval(timeInterval);
        questionElement.setAttribute('class', 'hide');
        highScoreElement.removeAttribute('class');
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

function timerSubtract() {
  time -= 10;
  console.log(time);
}

function scoreIncrease(){
  score++;
  console.log(score);
  
}

// Function needed to check the user's choice to the answer value to determine whether or not its correct. 
function getAnswer(userChoice) {
    console.log(userChoice);
    // This throws an undefined error when moving past the final question, but it doesnt break the application at all so *shrug*
    if (userChoice === questions[currentQuestionIndex].answer) {

      currentQuestionIndex++;
      checkStatus();
      scoreIncrease();
      getQuestion();

    } else {
      currentQuestionIndex++;
      checkStatus();
      timerSubtract();
      getQuestion();
    }

}


// Function to check whether or not the game needs to end.
function checkStatus() {
  
  if (currentQuestionIndex >= questions.length) {
    endGame();
  }
  
}
// Function to end the game. hides the necessary html elements and logs the final score.
function endGame() {
  document.querySelector('nav').setAttribute('class', 'hide');
  questionElement.setAttribute('class', 'hide');
  endScreenElement.removeAttribute('class');
  document.querySelector('#final-score').textContent = score
    
}

scoreSubmit.onclick = highScoreLog;

// Function to hide all elements on the page except high score log. Need to make it create ul for highscores info pulled from the local storage.
function highScoreLog() {
  localStorage.setItem("score", score + document.querySelector('#initials').value);
  // localStorage.setItem('initials', document.querySelector('#initials').value)
  endScreenElement.setAttribute('class', 'hide');
  startScreen.setAttribute('class', 'hide');
  highScoreElement.removeAttribute('class');
  // createHighscore();
}

// function createHighscore(){
//   // var scoreLog = JSON.parse(localStorage.getItem('score'));
//   console.log(scoreLog);
// In this function I need to find a way to parse the local storage into an array so i can use .sort on it and get the values stored from high to low. Then I need to run a for loop on the array to create a <ul> with the <li>s being the stored values in the array. Unfortunately Im not exactly sure where to start on this & will have to come back to it when I have a bit more time. But here's the pseudocode.
// }

// restart the quiz.
var playAgainBtn = document.querySelector('#play-again');
playAgainBtn.onclick = startQuiz;

// Clear local storage.
function clearStorage() {
  localStorage.clear();
  highScore = [];
}
var clearStorageBtn = document.querySelector('#clear-score');
clearStorageBtn.onclick = clearStorage;
