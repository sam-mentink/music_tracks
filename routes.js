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
      console.log (data)
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
    vm = {
      elements: data
    }
    console.log (data)
      res.render('elementshow', vm)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
  }
