/**
 * Required External Modules
 */
const express = require('express')
const path = require('path')
const call_service = require('./call_service')

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
app.get('*', function(req, res){
  res.redirect('/')
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})