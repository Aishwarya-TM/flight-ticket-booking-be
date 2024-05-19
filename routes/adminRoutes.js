const express = require('express')
const router = express.Router()
const { adminLogin, addFlight, removeFlight, getAllBookingDetails, getAllFlightDetails ,getAllUserDetails} = require('../controllers/adminController')

router.post('/login', adminLogin)
router.post('/add', addFlight)
router.delete('/remove/:flightNumber', removeFlight)
router.get('/bookings', getAllBookingDetails)
router.get('/get',getAllFlightDetails)
router.get('/users',getAllUserDetails)

module.exports = router
