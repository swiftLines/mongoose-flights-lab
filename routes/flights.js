import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET flights listing. */
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
// GET - localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

export {
  router
}
