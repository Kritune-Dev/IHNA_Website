const d1 = require('./public/d1.json')
const p3 = require('./public/p3.json')

exports.getQuestions = (promo, region) => {
  var questions
  switch (promo) {
  case 'p3':
    questions = getQuestionsByRegion(p3, region)
    break
  case 'd1':
    questions = getQuestionsByRegion(d1, region)
    break
  }

  var hvbaQuestions, omgQuestions, testQuestions, omcQuestions, omtapQuestions= null
  if(questions.hvba !== undefined){
    hvbaQuestions = getAleatoryQuestions(questions.hvba)
  }
  if(questions.omg !== undefined){
    omgQuestions = getAleatoryQuestions(questions.omg)
  }
  if(questions.omc !== undefined){
    omcQuestions = getAleatoryQuestions(questions.omc)
  }
  if(questions.tests !== undefined){
    testQuestions = getAleatoryQuestions(questions.tests)
  }
  if(questions.omtap !== undefined){
    omtapQuestions = getAleatoryQuestions(questions.omtap)
  }
 
  return {description: questions.info.description, test: testQuestions, hvba: hvbaQuestions, omg: omgQuestions, omc: omcQuestions, omtap: omtapQuestions}
}

function getAleatoryQuestions(questions) {
  var random = Math.floor(Math.random() * (questions.length))
  return questions[random]
}

function getQuestionsByRegion (questions, region){
  switch (region) {
  case 'rcc':
    return questions.rcc
  case 'rpla':
    return questions.rpla
  case 'rai':
    return questions.rai
  case 'rts':
    return questions.rts
  case 'ras':
    return questions.ras
  default:
    return questions.rai
  }
}