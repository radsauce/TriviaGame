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
    question: "Nightcrawler's real name is:",
    answers: ['Azazel', 'Baron Mordo', 'Kurt Wagner', 'Alan Cumming', 'Nightcrawler'],
    correct: 'Kurt Wagner',
  },
  { id: 8,
    question: 'The physically strongest female X-Men member is:',
    answers: ['Phoenix', 'Storm', 'Jubilee', 'Psylocke', 'Rogue'],
    correct: 'Rogue',
  },
  { id: 9,
    question: "Deadpool's first appearance occured in which comic title?",
    answers: ['X-Factor', 'Deadpool', 'Assassins 4 Hire', 'Cable', 'The Astonishing Spider-Man'],
    correct: 'Cable',
  },
]


questions.forEach(question => {
  $('.triviaBox').append(`
    <div class="row col-lg-12">
      <h5 class="question">${question.question}</h5>
      </div>                 
      <div class="data-toggle="buttons">
      <p>
      <label class="btn btn-secondary">
        <input type="radio" name="question-${question.id}" id="${question.id}" class="choice" autocomplete="off" data-choice="${question.answers[0]}"><span>${question.answers[0]}</span>
      </label>
      </p>
      <p>
      <label class="btn btn-secondary">
        <input type="radio" name="question-${question.id}" id="${question.id}" class="choice" autocomplete="off" data-choice="${question.answers[1]}"><span>${question.answers[1]}</span>
      </label>
      </p>
      <p>
      <label class="btn btn-secondary">
        <input type="radio" name="question-${question.id}" id="${question.id}" class="choice" autocomplete="off" data-choice="${question.answers[2]}"><span>${question.answers[2]}</span>
      </label>
      </p>
      <p>
      <label class="btn btn-secondary">
        <input type="radio" name="question-${question.id}" id="${question.id}" class="choice" autocomplete="off" data-choice="${question.answers[3]}"><span>${question.answers[3]}</span>
      </label>
      </p>
      <p>
      <label class="btn btn-secondary">
        <input type="radio" name="question-${question.id}" id="${question.id}" class="choice" autocomplete="off" data-choice="${question.answers[4]}"><span>${question.answers[4]}</span>
      </label>
      </p>
    </div>
    <p class="answer-${question.id}" style="visibility: hidden">${question.correct}</p>
      `)
    })

    var qChoice0
    var qChoice1
    var qChoice2
    var qChoice3
    var qChoice4
    var qChoice5
    var qChoice6
    var qChoice7
    var qChoice8
    var qChoice9

  $(document).on('click', '.choice', function () {
    let temp = $(this).attr('name').split('-')
    let qID = temp[1]
    window[`qChoice${qID}`] = $(this).attr('data-choice')

  })

  $('.submit-answers').on('click', function () {
  finishGame()
  })
  function finishGame () {
    clearInterval(gameTimer)
    count = 0
    for (let i = 0; i < questions.length; i++) {
      $(`.answer-${i}`).css('visibility', 'visible')
      if (window[`qChoice${i}`] === questions[i].correct) {
        count++
      }  
    }
    if (count === 10) {
      alert ('Well done!')
    } else {
      alert ('Try again!')
    }
  }
function timeConversion(t) {
  var minutes = Math.floor(t / 60)
  var seconds = t - (minutes * 60)
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  if (minutes === 0) {
    minutes = '00'
  }
  else if (minutes < 10) {
    minutes = '0' + minutes
  }
  return minutes + ":" + seconds
}

let time = 120
$('.time').text('02:00')
  let gameTimer = setInterval(function () {
    time--
    if (time > 0) {
    $('.time').text(timeConversion(time))
    } else {
      $('.time').text('00:00')
    finishGame()
    }
  }, 1000)