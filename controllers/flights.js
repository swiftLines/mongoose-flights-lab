import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      err: err,
      flights: flights,
    })
  })
}

function newFlights(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    //one way to handle errors
    if (err) return res.redirect('/flights/new')
    // for now, redirect right back to new.ejs
    res.redirect('/flights')
  })
}

export {
  newFlights as new,
  create,
  index
}