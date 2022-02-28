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

function show(req, res) {
  res.render('flights/show', {
    seat: seat,
    price: price,
    title: 'Ticket Detail',
  })
}

export {
  newFlights as new,
  create,
  index,
  show
}