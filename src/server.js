/**
 * Required External Modules
 */
const express = require('express')
const path = require('path')
const call_service = require('./call_service')
const exam = require('./questions')

/**
 * App Variables
 */
const app = express()
const port = require('../../IHNA_Utils/ihna_port').portWebsite

/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Routes Definitions
 */
app.get('/', async (req, res) => {
  var info = await call_service.callEtaService()
  res.render('index', { title: 'Home', info})
})
app.get('/confidentialite', (req, res) => {
  res.render('confidentialite', { title: 'Confidentialité' })
})
app.get('/exam', (req, res) => {
  res.redirect('/pratique/p3/rai')
})
app.get('/pratique', (req, res) => {
  res.render('pratique', { title: 'Pratique' })
})
app.get('/pratique/:promo/:id', (req, res) => {
  var zone = req.params.id
  var promo = req.params.promo

  if(promo !== 'p3' && promo !== 'd1') { res.redirect('/pratique') }
  if(exam.regionIsUndefined(promo, zone)) { res.redirect('/pratique') }  

  var questions = exam.getQuestions(promo, zone)  

  var link = `/pratique/${promo}/${zone}`
  res.render('question', { title: `${promo.toUpperCase()} | Pratique ${zone.toUpperCase()}`, questions, link})
})
app.get('*', function(req, res){
  res.redirect('/pratique')
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})