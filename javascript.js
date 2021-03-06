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
  question.textContent = randomQuestion.question;
  optionEl1.textContent = randomQuestion.answers[0].text;
  optionEl2.textContent = randomQuestion.answers[1].text;
  optionEl3.textContent = randomQuestion.answers[2].text;
  optionEl4.textContent = randomQuestion.answers[3].text;
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


// var startButton = document.getElementById('start-btn')
// var nextButton = document.getElementById('next-btn')
// var questionContainerElement = document.getElementById('question-container')
// var questionElement = document.getElementById('question')
// var answerButtonsElement = document.getElementById('answer-buttons')
// var timeEl = document.getElementById('#setTime')
// var highScore = document.getElementById('#highScore')
// let shuffledQuestions, currentQuestionIndex
// let timer = 75;
// let runningTimer;
// let score = 0;
// let finalScore
// secondsLeft = 5;
// let Element1

// //function to start the game clock
// function startClock() {
//   setTime.innerHTML = "Time Left = " + timer;
//   if (timer <= 0) {
//     gameOver();
//   } else {
//     timer--;
//     runningTimer = setTimeout(startClock, 1000);
//   }
// }

// //Event listeners to tell the start and next button what to
// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// // funtion to start the game, hide necessary buttons, start the clock, and set the questions and answers
// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5);
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove('hide');
//   setNextQuestion();
//   startClock();
// }

// //Function to set next question and shuffle questions
// function setNextQuestion() {
//   resetState();
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// //Function to display question
// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button');
//     button.innerText = answer.text
//     button.classList.add('btn');
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer);
//     answerButtonsElement.appendChild(button);
//   })
// }

// // function to reset everything 
// function resetState() {
//   clearStatusClass(document.body);
//   nextButton.classList.add('hide');
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function addScore(params) {
//   document.getElementById('highScore').innerText = score;
// }

// //function to select answers and subtract time if answer is wrong.
// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct);
//   if (!selectedButton.dataset.correct) {
//     timer = timer - 10;
//   }
//   if (selectedButton.dataset.correct) {
//     score += 100
//     console.log(score)
//   }
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct);
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide');
//   } 
//   else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide');
//   }
// }

// //function to 
// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct');
//   } else {
//     element.classList.add('wrong');
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct');
//   element.classList.remove('wrong');
// }

// //function to end the game
// function gameOver() {
//   clearInterval(runningTimer);
//   setTime.innerHTML = "0";
//   startButton.innerText = "Restart";
//   startButton.classList.remove("hide");
//   timer = 90;
// }

// //available questions
// const questions = [
//   {
//     question: 'What is 2 + 2?',
//     answers: [
//       { text: '4', correct: true },
//       { text: '22', correct: false },
//       { text: '53', correct: false},
//       { text: '16', correct:false}
//     ]
//   },
//   {
//     question: 'What is 4 x 4?',
//     answers: [
//       { text: '4', correct: false },
//       { text: '65', correct: false },
//       { text: '16', correct: true },
//       { text: '32', correct: false }
//     ]
//   },
//   {
//     question: 'What is 5 + 3?',
//     answers: [
//       { text: '8', correct: true },
//       { text: '23', correct: false },
//       { text: '16', correct: false },
//       { text: '3', correct: false }
//     ]
//   },
//   {
//     question: 'What is 4 * 2?',
//     answers: [
//       { text: '6', correct: false },
//       { text: '8', correct: true },
//       { text: '12', correct: false},
//       { text: '18', correct: false}
//     ]
//   }
// ]