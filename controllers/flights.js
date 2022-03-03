import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      err: err,
      flights: flights,
      title: 'Flights'
    })
  })
}

function newFlights(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
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
  console.log('in show!'),
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      // seat: {
      // type: String,
      // match: /[A-F][1-9]\d?/
      // },
      // price: price,
      flight: flight,
      title: 'Ticket Detail',
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export {
  newFlights as new,
  create,
  index,
  show,
  createTicket
}