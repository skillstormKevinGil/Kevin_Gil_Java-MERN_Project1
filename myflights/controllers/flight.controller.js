const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber, departure, arrival, passengers}) => {
    try {
        const flight = new Flight({
            flightNumber, 
            departure, 
            arrival, 
            passengers
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created flight to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const findFlightById = async id => {
    try {
        // If no flight is found, this does NOT return a rejected promise. Instead null is returned
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No flight with the id of ${id} found.`;
        }
        return flight; // Flight was found and we return it
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // GET all flights
    return flights;
}

module.exports = { createFlight, findFlightById, findAllFlights };