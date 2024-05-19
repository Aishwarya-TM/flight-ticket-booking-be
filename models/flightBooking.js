const mongoose = require('mongoose');

const flightBookingSchema = new mongoose.Schema(
    {
        bookingId: { 
            type: String, 
            required: true, 
            unique: true 
        },
        userId: { 
            type: String, 
            required: true 
        },
        flightId: { 
            type: String, 
            required: true 
        },
        seatNumber: { 
            type: String, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        },
        paymentStatus: { 
            type: String, 
            required: true 
        },
        bookingDate: { 
            type: Date, 
            default: Date.now 
        }
    },
    {
        collection: "flightBookings"
    }
);

module.exports = mongoose.model("flightBookings", flightBookingSchema);
