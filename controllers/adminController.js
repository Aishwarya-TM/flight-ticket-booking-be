const bcrypt = require('bcrypt')
const userModel = require('../models/flightUser')
const flightModel = require('../models/flightModel')
const bookingModel = require('../models/flightBooking')
const flightData = require('../data/flightData')
const userData = require('../data/userData')
const bookingData = require('../data/bookingData')


const adminLogin = async (request, response) => {
    try {
        const user = await userModel.findOne({ username: request.body.username, role: 'Admin' })
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
const getAllFlightDetails = async (request, response) => {
    try {
      const flights = await flightModel.find()
      if (flights.length === 0) {
        await flightModel.insertMany(flightData)
        console.log('Initial flight data inserted')
      }
      response.status(200).json(flights)
    } catch (error) {
      response.status(500).send({ message: error.message })
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
        const { flightNumber } = request.params;
        await flightModel.findOneAndDelete({ flightNumber });
        response.status(200).send({ message: 'Flight removed' });
    } catch (err) {
        response.status(500).send(err);
    }
}


const getAllBookingDetails = async (request, response) => {
    try {
        const bookings = await bookingModel.find()
        if(bookings.length===0)
            {
            await bookingModel.insertMany(bookingData)
            console.log('Initial booking data inserted')

            }
        response.status(200).json(bookings)
    }
    catch (err) {
        response.status(500).send(err)
    }
}

const getAllUserDetails = async(request, response) =>
    {
        try {
            const users = await userModel.find()
            if (users.length === 0) {
              await userModel.insertMany(userData)
              console.log('Initial user data inserted')
            }
            response.status(200).json(users)
          } catch (error) {
            response.status(500).send({ message: error.message })
          }
    }

module.exports = { adminLogin, addFlight, removeFlight, getAllBookingDetails , getAllFlightDetails, getAllUserDetails}
