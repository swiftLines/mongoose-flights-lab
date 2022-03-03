import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET flights listing. */
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
// GET - localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)
// POST /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)
// POST - localhost:3000/movies/:id/meals
router.post("/:id/meals", flightsCtrl.addToMeals)

export {
  router
}
