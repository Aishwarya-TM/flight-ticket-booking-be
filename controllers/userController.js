const bcrypt = require('bcrypt');
const userModel = require('../models/flightUser');
const flightModel = require('../models/flightModel');
const bookingModel = require('../models/flightBooking');

const userSignup = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = new userModel({
      username: request.body.username,
      email: request.body.email,
      password: hashedPassword
    });
    await user.save();
    response.status(201).send({ message: 'User created' });
  } catch (err) {
    response.status(400).send(err);
  }
};

const userLogin = async (request, response) => {
  try {
    const user = await userModel.findOne({ username: request.body.username });
    if (user && await bcrypt.compare(request.body.password, user.password)) {
      response.status(200).send({ message: 'Login successful' });
    } else {
      response.status(400).send({ message: 'Invalid credentials' });
    }
  } catch (err) {
    response.status(500).send(err);
  }
};

const getAllFlightDetails = async (request, response) => {
  try {
    const flights = await flightModel.find();
    response.status(200).json(flights);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
}

const searchFlight = async (request, response) => {
  try {
    const flights = await flightModel.find({
      departureTime: { $gte: new Date(request.query.startDate), $lte: new Date(request.query.endDate) }
    });
    response.status(200).json(flights);
  } catch (err) {
    response.status(500).send(err);
  }
};

const flightBooking = async (request, response) => {
  try {
    const flight = await flightModel.findById(request.body.flightId);
    if (flight.seatsAvailable > 0) {
      const booking = new bookingModel({
        bookingId: `B${Date.now()}`,
        userId: request.body.userId,
        flightId: request.body.flightId,
        seatNumber: request.body.seatNumber,
        price: request.body.price,
        paymentStatus: 'Paid'
      });
      await booking.save();
      flight.seatsAvailable -= 1;
      await flight.save();
      response.status(201).send({ message: 'Booking successful' });
    } else {
      response.status(400).send('No seats available');
    }
  } catch (err) {
    response.status(500).send(err);
  }
}

const userBookingDetails = async (request, response) => {
  try {
    const bookings = await bookingModel.find({ userId: request.params.userId }).populate('flightId');
    response.status(200).json(bookings);
  } catch (err) {
    response.status(500).send(err);
  }
};

module.exports = { userSignup, userLogin, searchFlight, flightBooking, userBookingDetails, getAllFlightDetails };
