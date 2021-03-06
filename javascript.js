//Declaring my variables
var startEl = document.querySelector('#start')
var smallTextEl = document.querySelector('#smallText')
var question = document.querySelector('#question')
var timeEl = document.querySelector('#setTime')
var highScoreEl = document.querySelector('#highScore')

var optionEl1 = document.querySelector('#option1')
var optionEl2 = document.querySelector('#option2')
var optionEl3 = document.querySelector('#option3')
var optionEl4 = document.querySelector('#option4')

let currentQuestion = {};
let availableQuestions = [];
let questionCount = 0;
let score = 0;

var secondsLeft = 75;
var questions = [
  {
    question: "what is 2+2?",
    answers: [
      {text: '4', correct:true},
      {text: '6', correct:false},
      {text: '8', correct:false},
      {text: '10', correct:false},
    ]
  },
  {
    question: "what is 2+4?",
    answers: [
      {text: '4', correct:true},
      {text: '6', correct:false},
      {text: '8', correct:false},
      {text: '10', correct:false},
    ]
  },
  {
    question: "what is 2+6?",
    answers: [
      {text: '4', correct:true},
      {text: '6', correct:false},
      {text: '8', correct:false},
      {text: '10', correct:false},
    ]
  },
  {
    question: "what is 2+8?",
    answers: [
      {text: '4', correct:true},
      {text: '6', correct:false},
      {text: '8', correct:false},
      {text: '10', correct:false},
    ]
  },
];

var randomQuestion = questions[Math.floor(Math.random() * questions.length)]

// Timer for the game
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' Seconds left';

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}
// function to hide the paragraph text below the h1
function hideSmall() {
    smallTextEl.textContent = ' ';
}

function hideStart() {
    if (startEl.style.display === "none") {
      startEl.style.display = "block";
    } else {
      startEl.style.display = "none";
    }
}

function revealChoice1() {
    if (optionEl1.style.display === "block") {
      optionEl1.style.display = "none";
    } else {
      optionEl1.style.display = "block";
    }
}

function revealChoice2() {
    if (optionEl2.style.display === "block") {
      optionEl2.style.display = "none";
    } else {
      optionEl2.style.display = "block";
    }
}

function revealChoice3() {
    if (optionEl3.style.display === "block") {
      optionEl3.style.display = "none";
    } else {
      optionEl3.style.display = "block";
    }
}

function revealChoice4() {
    if (optionEl4.style.display === "block") {
      optionEl4.style.display = "none";
    } else {
      optionEl4.style.display = "block";
    }
}

function questionAsk() {
    question.textContent = randomQuestion;
}

function startGame(params) {
   console.log('you clicked the button!')
    questionCount = 0;
    score = 0;
    setTime();
    hideSmall();
    questionAsk();
    revealChoice1();
    revealChoice2();
    revealChoice3();
    revealChoice4();
    availableQuestions = [...questions];
    newQuestion
}

function newQuestion() {
  questionCount++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
}

function selectAnswer(params) {
  
}


startEl.addEventListener("click", startGame)
optionEl1.addEventListener('click', newQuestion)
optionEl2.addEventListener('click', newQuestion)
optionEl3.addEventListener('click', newQuestion)
optionEl4.addEventListener('click', newQuestion)