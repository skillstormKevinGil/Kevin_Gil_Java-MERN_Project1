// Mongoose allows us to provide a schema for our documents
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sample airline Object
const americanAirlines = {
    flightNumber: "AM1",
    departureDate: "08/21/2020",
    departureTime: "07:05",
    departureLocation: "MIA",
    arrivalDate: "08/21/2020",
    arrivalTime: "08:00",
    arrivallLcation: "FLL",
    passengerCurrent: 2,
    passengerLimit: 8,
};

// Create a flight schema
const flightSchema = new Schema({
    flightNumber: { 
        type: String,
        required: true
    },
    departureDate: { 
        type: String,
        required: true
    },
    departureTime: { 
        type: String,
        required: true
    },
    departureLocation: { 
        type: String,
        required: true
    },
    arrivalDate: { 
        type: String,
        required: true
    },
    arrivalTime: { 
        type: String,
        required: true
    },
    arrivalLocation: { 
        type: String,
        required: true
    },
    passengerCurrent: {
        type: Number,
        default: 0
    },
    passengerLimit: {
        type: Number,
        required: true
    },
});

//                        Model Name | Schema Object | Collection Name in Atlas
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight; // require('Flight.model.js') will return this flight class