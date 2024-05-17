const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema(
    {
        flightNumber: { 
            type: String, 
            required: true, 
            unique: true
         },
        airline: {
             type: String,
             required: true 
        },
        departureCity: { 
             type: String, 
             required: true 
        },
        arrivalCity: { 
            type: String, 
            required: true 
        },
        departureTime: { 
            type: Date, 
            required: true 
        },
        arrivalTime: { 
            type: Date, 
            required: true
         },
        seatsAvailable: { 
            type: Number, 
            default: 60 
        }
},
{ 
    collection : "flight"
}

)

module.exports = mongoose.model("flight", flightSchema)