var db = require('./db')
var test = require('./views/test')
var express = require('express')

//////////////////////////////

module.exports = {
  index: index,
  test: test,
  things: things,
  elementshow: elementshow,
  formatElements: formatElements
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
      console.log(data)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
  }

  function formatElements (data) {
  var formatted = []
  var addedNames = {}

  for(var i = 0; i < data.length; i++) {
    var crt = data[i]
    var index = addedNames[crt.name]

    if(index !== undefined) {
        formatted[index].element.push(crt.element)
    } else {
        addedNames[crt.name] = formatted.length
        formatted.push({
            name: crt.name,
            element: [crt.element]
        })
    }
  }
  return formatted
}


// function formatElements (data) {
//   var formatted = []
//   for(let i = 0; i < data.length; i++) {
//     if (!formatted.find(function (song) {
//       // ... song name IS data[i].name
//     })) {
//       // create song in formatted
//
//     } else {
//       // find the song in formatted
//       // push data[i].element into song.elements
//     }
//   }
//   return formatted
// }

// function formatElements (data) {
// var formatted = [];
// var addedNames = {};
//
// for(var i = 0; i < data.length; i++) {
//   var crt = data[i];
//   var index = addedNames[crt.name];
//
//   if(index !== undefined) {
//       formatted[index].element.push(crt.element);
//   } else {
//       addedNames[crt.name] = formatted.length;
//       formatted.push({
//           name: crt.name,
//           element: [crt.element]
//       });
//   }
// }
// return formatted;
// }
