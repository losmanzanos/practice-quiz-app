/* 
=========
Constants 
=========
*/

const store = {
  questions: [
    {
      question: 'What color is the sky?',
      answers: [
        'blue',
        'pink and purple spotted',
        'pizza',
        '22'
      ],
      correctAnswer: 'blue',
      explanation: 'This sky is blue. Duh.'
    },
    {
      question: 'My name is Chad. What\'s my name?',
      answers: [
        'Susan',
        'pizza',
        'Chad',
        '22'
      ],
      correctAnswer: 'Chad',
      explanation: 'Really...?'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  page: 'start',

  currentQuestionState: {
    answerArray: []
  }
};

/* 
================
HTML Templates 
================
*/

function startRender() {
  return `
    <p>Hello.</p>
    <button type="button" class="startButton">Start!</button>
  `
}

function questionRender() {
  const question = store.questions[store.questionNumber]
  return `
    <li>Question: <span class="questionNumber">${store.questionNumber + 1}</span>/${store.questions.length}</li>
    <li>Score: <span class="score">0</span></li>

    <form>
      ${question.question}
      <br>
      ${question.answers.map(answers=>`<input type="radio"> ${answers}`).join('<br>')}
      <br>
      <br>
      <button>Submit</button>
    </form>
  `
}

function generateAnswers(answers) {
  let answerArray = [];
  let indexArray = [];
  answers.forEach(answer => {
    answerArray.push(answer);
    indexArray.push(answers.indexOf(answer));
  });
  return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
}

function stringifyAnswerArray(answer){
  let questionNumber = store.questionNumber;
  let name = store.questions[questionNumber].answers.indexOf(answer);

  return `
    <li>
      <div class="answer-container">
      <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}">
      <label for="answer-${name}"> ${answer}</label>
     
      </div>
    </li>
  `;
}

function feedbackRender() {
  return `
    <div>You got the answer correct!</div>
    <div>Sorry, you got the answer wrong.</div>
    <br>
    <button class="next startButton">Next</button>
  `
}

function scoreRender() {
  return `
    <p>
      The quiz is over.
    </p>
    <p>You scored ${store.score} out of ${store.questions.length}</p>
    <button class="restart startButton">Restart</button>
  `
}

/* 
================
Render Functions 
================
*/

function render() {
  let html;
  if (store.page == 'start'){
    html = startRender();
  } else if (store.page == 'question') {
    html = questionRender();
  } else if (store.page == 'feedback') {
    html = feedbackRender();
  } else if (store.page == 'score') {
    html = scoreRender();
  }
  $('main').html(html);
}

/* 
===============
Event Listeners
=============== 
*/

function eventListeneers () {
  $('main').on('click', '.startButton', startEvent);
  $('main').on('submit', 'form', answerEvent);
  $('main').on('click', '.next', nextEvent);
  $('main').on('click', '.restart', restartEvent);
}

function startEvent() {
  store.page = 'question';
  render();
}

function answerEvent(e) {
  e.preventDefault();
  const response = e.target.answer.value;
  if (response === question.correctAnswer) {
  store.score++;
  store.answer = true;
  } else {
  store.answer = false;
  }
}

function nextEvent() {
  store.page = 'score';
  render();
}

function restartEvent() {
  store.page = 'start';
  render();
}

/* 
=================
Run on page ready 
=================
*/

function runQuiz() {
  render();
  eventListeneers();
}
$(runQuiz)