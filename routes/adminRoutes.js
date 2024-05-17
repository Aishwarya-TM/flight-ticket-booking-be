const express = require('express')
const router = express.Router()
const { adminLogin, addFlight, removeFlight, getAllBookingDetails } = require('../controllers/adminController')

router.post('/admin/login', adminLogin)
router.post('/admin/add-flight', addFlight)
router.delete('/admin/remove-flight/:flightId', removeFlight)
router.get('/admin/bookings', getAllBookingDetails)

module.exports = router