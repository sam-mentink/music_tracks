var db = require('./db')
var test = require('./views/test')
var express = require('express')

//////////////////////////////

module.exports = {
  index: index,
  test: test,
  things: things,
  elementshow: elementshow
}

function index (req, res) {
  res.send('music squirell')
}

function things (req, res) {
  db.things()
    .then(function (data) {
      vm = {
        things: data
      }
      // console.log (data)
      res.render('things', vm)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
}

function elementshow (req, res) {
  db.things()
    .then(function(data) {
      var formatted = formatElements(data)
      vm = {
        formatted: data
      }
      res.render('elementshow', vm)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
  }

function formatElements (data) {
  var formatted = []
  for(let i = 0; i < data.length; i++) {
    if (!formatted.find(function (song) {
      // ... song name IS data[i].name
    })) {
      // create song in formatted

    } else {
      // find the song in formatted
      // push data[i].element into song.elements
    }
  }
  return formatted
}





// }
// for (x in formatted) {
//   out.push(x);
// }
// return fomatted
