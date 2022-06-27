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
        type: String
    },
    departureDate: { 
        type: String
    },
    departureTime: { 
        type: String
    },
    departureLocation: { 
        type: String
    },
    arrivalDate: { 
        type: String
    },
    arrivalTime: { 
        type: String
    },
    arrivallLocation: { 
        type: String
    },
    passengerCurrent: {
        type: Number
    },
    passengerLimit: {
        type: Number
    },
});

//                        Model Name | Schema Object | Collection Name in Atlas
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight; // require('Flight.model.js') will return this flight class