const questions = require('./public/questions.json')

exports.getQuestions = () => {
  var hvbaQuestions = getAleatoryQuestions(questions.hvba)
  var omgQuestions = getAleatoryQuestions(questions.omg)
  var testQuestions = getAleatoryQuestions(questions.tests)
 
  return {test: testQuestions, hvba: hvbaQuestions, omg: omgQuestions}
}

function getAleatoryQuestions(questions) {
  var random = Math.floor(Math.random() * (questions.length))
  return questions[random]
}