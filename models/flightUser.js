const mongoose = require('mongoose');

const flightUserSchema = new mongoose.Schema(
    {
        userId :
        {
            type : Number,
            required : true,
            unique : true

        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ['User', 'Admin'],
            default: 'User'
        }
    },
    {
        collection: "flightUsers"
    }
);

module.exports = mongoose.model("flightUsers", flightUserSchema);
