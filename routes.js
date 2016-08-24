var db = require('./db')
var test = require('./views/test')
// var test = require('./linkTrack')
///////////////////////////////
var express = require('express')

//////////////////////////////

module.exports = {
  index: index,
  linkTrack: linkTrack,
  tracks: tracks,
  test: test
}

function index (req, res) {
  res.send('music squirell')
}

function linkTrack (req, res) {
  db.linkTrack()
    .then(function (data) {
      data = {
        linkTrack: data
      }
    res.render('linkTrack', data)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
}

function tracks (req, res) {
  db.tracks()
    .then(function (data) {
      data = {
        tracks: data
      }
    res.render('tracks', data)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
}


function test (req, res) {
  res.render('tracks')
}

// function get (req, res) {
//   knex('test')
//     .select()
//     .then(function (test) {
//       res.json({id:  name: 'Better Users'})
//     })
//     .catch(function (err) {
//       res.status(200).send('DATABASE ERROR: ' + err.message)
//     })
// }
