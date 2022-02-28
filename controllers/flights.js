// import { Flight } from "../models/flight.js"

function newFlights(req, res) {
  res.render('flights/new')
}

export {
  newFlights as new
}