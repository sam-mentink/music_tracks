var db = require('./db')

module.exports = {
  index: index,
  linkTrack: linkTrack,
  tracks: tracks
}

function index (req, res) {
  res.send('music to my ears')
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
