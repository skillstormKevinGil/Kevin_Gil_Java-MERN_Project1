// Mongoose allows us to provide a schema for our documents
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sample airline Object
const americanAirlines = {
    flightNumber: 651,
    departure:[{
        date: 08/21/2020,
        time: 0705,
        location: 'MIA',
    }],
    arrival:[{
        date: 08/21/2020,
        time: 0800,
        location: 'FLL',
    }],
    passengers:[{
        current: 2,
        limit: 8,
    }],
};

// Create a flight schema
const flightSchema = new Schema({
    flightNumber: { 
        type: Number, 
        required: true
    },
    departure:[{
        date: Date,
        time: Date,
        location: String,
    }],
    arrival:[{
        date: Date,
        time: Date,
        location: String,
    }],
    passengers:[{
        current: Number,
        limit: Number,
    }],
});

//                        Model Name | Schema Object | Collection Name in Atlas
const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight; // require('Flight.model.js') will return this flight class