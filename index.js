var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./routes')
var db = require('./db')
var test = require('./views/test')
var tracks = require('./views/tracks')

app.use(bodyParser.urlencoded())
app.use(express.static('public'))

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

///////////////////////////
app.get('/', routes.index)
// app.get('/linktrack', routes.linkTrack)
app.get('/tracks', routes.tracks)
app.get('/test', routes.test)
///////////////////////////

var PORT = 3000

app.listen(PORT, function () {
  console.log('music to my ears', PORT)
})
