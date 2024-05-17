const bcrypt = require('bcrypt')
const userModel = require('../models/flightUser')
const flightModel = require('../models/flightModel')
const bookingModel = require('../models/flightBooking')

const adminLogin = async (request, response) => {
    try {
        const user = await userModel.findOne({ username: request.body.username, role: 'Admin' });
        if (user && await bcrypt.compare(request.body.password, user.password)) {
            response.status(200).send({ message: 'Admin login successful' })
        }
        else {
            response.status(400).send({ message: 'Invalid credentials' })
        }
    }
    catch (err) {
        response.status(500).send(err)
    }
}

const addFlight = async (request, response) => {
    try {
        const flight = new flightModel(request.body)
        await flight.save();
        response.status(201).send({ message: 'Flight added' })
    }
    catch (err) {
        response.status(400).send(err);
    }
}

const removeFlight = async (request, response) => {
    try {
        await flightModel.findByIdAndDelete(request.params.flightId)
        response.status(200).send({ message: 'Flight removed' })
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getAllBookingDetails = async (request, response) => {
    try {
        const bookings = await bookingModel.find().populate('flightId userId')
        response.status(200).json(bookings)
    }
    catch (err) {
        response.status(500).send(err)
    }
}

module.exports = { adminLogin, addFlight, removeFlight, getAllBookingDetails }