var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./routes')
// var db = require('./db')

app.use(bodyParser.urlencoded())

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

///////////////////////////
app.get('/', routes.index)
app.get('/linkTrack', routes.linkTrack)
app.get('/tracks', routes.tracks)
///////////////////////////

var PORT = 3000

app.listen(PORT, function () {
  console.log('music to my ears', PORT)
})
