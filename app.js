/* 
==============
HTML Templates 
==============
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
    <li>Score: <span class="score">${store.score}</span></li>

    <form>
      ${question.question}
      <br>
      <br>
      ${question.answers.map(answers => `<div class="hover"><input type="radio" name="answer" value="${answers}" required> ${answers}</div>`).join('\n')}
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

function stringifyAnswerArray(answer) {
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
  const question = store.questions[store.questionNumber]
  if (store.answer == true) {
    return `
    <div>You got the answer correct!</div>
    <br>
    <p>🙏</p>
    <br>
    <button class="next startButton">Next</button>
    `
  } else {
    return `
    <div>Sorry, you got the answer wrong.</div>
    <br>
    ${question.explanation}
    <button class="next startButton">Next</button>
    `
  }
}

function scoreRender() {
  return `
    <p>
      The quiz is over.
    </p>
    <p>You scored ${store.score} out of ${store.questions.length}</p>
    <button class="restart">Restart</button>
  `
}

/* 
==================
Render Function(s) 
==================
*/

function render() {
  let html;
  if (store.page == 'start') {
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

function eventListeneers() {
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
  const question = store.questions[store.questionNumber]
  if (response === question.correctAnswer) {
    store.score++;
    store.answer = true;
  } else {
    store.answer = false;
  }
  store.page= 'feedback';
  render();
}

function nextEvent() {
  store.questionNumber++;
  if (store.questionNumber < store.questions.length) {
    store.page = 'question';
  } else {
    store.page = 'score';
  }
  render();
}

function restartEvent() {
  store.questionNumber = 0;
  store.score = 0;
  store.page = 'question';
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