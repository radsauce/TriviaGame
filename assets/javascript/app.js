var questions = [
  { id: 0, 
    question: 'What comic title is the first appearance of Wolverine?',
    answers: ['Punisher', 'Spider-Man', 'Weapon X', 'X-Men Gold', 'Hulk'],
    correct: 'Hulk',
  },
  { id: 1,
    question: 'In the comic, who is the founder of the "X-Men?"',
    answers: ['Professor Charles Xavier', 'Magneto', 'Cyclops', 'Mr. Sinister', 'Stan Lee'],
    correct: 'Professor Charles Xavier',
  },
  { id: 2,
    question: 'A Subaru WRX/WRX STi looks best in:',
    answers: ['Gold wheels on WR Blue paint', 'Black wheels on WR Blue paint', 'White wheels on WR Blue paint', 'Black wheels on Black paint', 'Gold wheels on Black paint'],
    correct: 'Gold wheels on WR Blue paint',
  },
  { id: 3,
    question: 'Subaru WRC driver Petter Solberg once lost his brakes in a race, and finished the course how many seconds faster than the rest of the field?',
    answers: ['3 seconds', '7 seconds', '10 seconds', '15 seconds', 'Did Not Finish (DNF)'],
    correct: '15 seconds',
  },
  { id: 4,
    question: 'The best color beanie is:',
    answers: ['Yellow', 'Black', 'Camouflage', 'Green', 'Grey'],
    correct: 'Yellow',
  },
  { id: 5,
    question: 'The best franchise pizza from the following choices is:',
    answers: ['Pizza Hut', 'Dominos', 'Little Caesars', 'Round Table', 'Papa Johns'],
    correct: 'Round Table',
  },
  { id: 6,
    question: 'From the following choices, the best Spider-Man movie is:',
    answers: ['Spider-Man', 'Spider-Man 2', 'Spider-Man 3', 'The Amazing Spider-Man', 'None of the above, theyre all trash'],
    correct: 'None of the above, theyre all trash',
  },
  { id: 7,
    question: 'Nightcrawlers real name is:',
    answers: ['Azazel', 'Baron Mordo', 'Kurt Wagner', 'Alan Cumming', 'Nightcrawler'],
    correct: 'Kurt Wagner',
  },
  { id: 8,
    question: 'The physically strongest female X-Men member is:',
    answers: ['Phoenix', 'Storm', 'Jubilee', 'Psylocke', 'Rogue'],
    correct: 'Rogue',
  },
  { id: 9,
    question: 'Deadpools first appearance occured in which comic title?',
    answers: ['X-Factor', 'Deadpool', 'Assassins 4 Hire', 'Cable', 'The Astonishing Spider-Man'],
    correct: 'Cable',
  },
]


questions.forEach(question => {
  $('.triviaBox').append(`
    <div class="row col-lg-12">
      <h5 class="question">${question.question}</h5>
      </div>           
      <button type="button" class="btn btn-outline-info" id="${question.id}"><span>${question.answers[0]}</span></button>
      <button type="button" class="btn btn-outline-info" id="${question.id}"><span>${question.answers[1]}</span></button>
      <button type="button" class="btn btn-outline-info" id="${question.id}"><span>${question.answers[2]}</span></button>
      <button type="button" class="btn btn-outline-info" id="${question.id}"><span>${question.answers[3]}</span></button>
      <button type="button" class="btn btn-outline-info" id="${question.id}"><span>${question.answers[4]}</span></button>
      <p class="answer-${question.id}" style=""display: none">${question.correct}</p>
      `)
    })

$(document).on('click', '.btn', function () {
  var choice = ($(this).attr('id'));
  console.log($(this).attr('id'));
  count = 0
  for (let i = 0; i < questions.length; i++) {
    $(`.answer-${i}`).css('display', 'visible')
    if (choice === questions[i].correct) {
      count++
    }
  }
  if (count === 10) {
    alert('Great Job!')
  } else {
    alert('Keep trying!')
  }
})