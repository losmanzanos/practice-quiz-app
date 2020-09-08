const store = {
    questions: [
      {
        question: 'For every person, there are 1.6 million what?',
        answers: [
          'ants',
          'grains of sand',
          'websites',
          'rodents'
        ],
        correctAnswer: 'ants',
        explanation: 'The correct answer is ants.',
        image: 'ants.gif'
      },

      {
        question: 'Saturn\'s atmosphere annually produces 2.2 million pounds of what?',
        answers: [
          'sulfuric acid',
          'diamonds',
          'plastic',
          'asparagus'
        ],
        correctAnswer: 'diamonds',
        explanation: 'The correct answer is diamonds.',
        image: 'diamonds.gif'
      },

      {
        question: 'The scent of chickens can protect you from what?.',
        answers: [
          'coyotes',
          'snakes',
          'Malaria',
          'AIDS'
        ],
        correctAnswer: 'Malaria',
        explanation: 'The correct answer is Malaria.',
        image: 'mosquito.gif'
      },

      {
        question: 'In 2018, 13 American children were named what?',
        answers: [
          'Danny DeVito',
          'Nevaeh',
          'Thanos',
          'Jesus'
        ],
        correctAnswer: 'Thanos',
        explanation: 'The correct answer is Thanos.',
        image: 'thanos.gif'
      },

      {
        question: 'Hexakosioihexekontahexaphobia refers to the fear of what?',
        answers: [
          'Geometry',
          'the number 666',
          'cell phones',
          'long words'
        ],
        correctAnswer: 'the number 666',
        explanation: 'The correct answer is the number 666.',
        image: '666.gif'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    page: 'start'
  };