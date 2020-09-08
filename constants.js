const store = {
    questions: [
      {
        question: 'Five years ago I was &frac13; as old as my oldest sister, but now I\'m half her age. How old am I?',
        answers: [
          '8',
          '10',
          '16',
          '20'
        ],
        correctAnswer: '10',
        explanation: 'If my sister\'s current age is S and my age is X, then knowing that she\'s twice as old as me, we can say that:<br><br>2X = S<br><br>5 years ago, my sister was S-5 years old, and I was X-5 years old. Since she was three times as old as me then, we can say that<br><br>3(X-5) = S-5.<br><br>Substituting the first equation into the second to eliminate the S varialbe yields:<br><br>3(X−5)=2X−5<br><br>We can now solve for X:<br><br>3X−15=2X−5<br>X−15=−5<br>X=10<br><br>Therefore, I am currently 10 years old.'
      },

      {
        question: 'Is 0 even or odd?',
        answers: [
          'Odd',
          'Even',
          'Both',
          'Neither'
        ],
        correctAnswer: 'Even',
        explanation: 'An even number is a number which has a remainder of 0 upon division by 2, while an odd number is a number which has a remainder of 1 upon division by 2. For example, 0,2,4,10,-6 are all even numbers because they leave a remainder of 0 upon division by 2. The integers 1,3,5,11,-7 are all odd numbers because they leave a remainder of 1 upon division by 2.'
      },

      {
        question: 'John, Aries, and Joseph are brothers with different ages. Who is the youngest if the following statements are true?<br><br>I. Aries is the oldest.<br>II. Joseph is not the oldest.<br>III. John is not the youngest.',
        answers: [
          'Aries',
          'John',
          'Neither of them are youngest',
          'Joseph'
        ],
        correctAnswer: 'Joseph',
        explanation: 'As Aries is the oldest he is out of question. Now we are left with two options. According to statement 3 we conclude that John is not youngest. Thus, we are left with one option: Joseph.'
      },

      {
        question: 'Storing food in the refrigerator keeps the food edible for a longer period of time. Which of the following explains why?',
        answers: [
          'Lowering the temperature slows down the rates of chemical reactions.',
          'Ice is larger in volume than liquid water.',
          'Most liquids and solids have smaller volumes at lower temperatures.',
          'Water molecules form more hydrogen bonds at lower temperatures.'
        ],
        correctAnswer: 'Lowering the temperature slows down the rates of chemical reactions.',
        explanation: 'A lower temperature means slower chemical reactions. Thus, keeping food in the fridge decelerates rottening.'
      },

      {
        question: 'What characteristic of detergents gives them their powerful ability to remove contaminants?',
        answers: [
          'They are extremely sticky.',
          'They mix with both water and oil.',
          'They are powerful reductants.',
          'They are powerful oxidants.'
        ],
        correctAnswer: 'They mix with both water and oil.',
        explanation: 'A detergent molecule consists of a hydrophilic (meaning it mixes with water) head and a hydrophobic (meaning it mixes with oil) tail. Compounds having both hydrophilic and hydrophobic groups are referred to as surfactants. As contaminants are mostly hydrophobic, they do not wash out well with water alone, but the detergents bind well to the contaminants using their hydrophobic tail. After binding with the contaminant, they bond with water molecules with their hydrophilic head, so that the contaminant-detergent complex can be washed away.'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    page: 'start'
  };