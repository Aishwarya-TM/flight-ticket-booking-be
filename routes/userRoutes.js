const express = require('express')
const router = express.Router()
const { userSignup, userLogin, searchFlight, flightBooking, userBookingDetails } = require('../controllers/userController')

router.post('/signup', userSignup)
router.post('/login', userLogin)
router.get('/search', searchFlight)
router.post('/book', flightBooking)
router.get('/my-bookings/:userId', userBookingDetails)

module.exports = router