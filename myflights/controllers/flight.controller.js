const Flight = require('../models/Flight.model');

const createFlight = async ({
    flightNumber, 
    departureDatetime, departureTimezone, departureLocation, 
    arrivalDatetime, arrivalTimezone, arrivalLocation, 
    passengerCurrent, passengerLimit
}) => {
    try {
        departureDatetime = new Date(departureDatetime);
        arrivalDatetime = new Date(arrivalDatetime);

        departureDatetime.setMinutes(departureDatetime.getMinutes() +  (Number(departureTimezone) * 60))
        arrivalDatetime.setMinutes(arrivalDatetime.getMinutes() +  (Number(arrivalTimezone) * 60))

        let departureTime =departureDatetime.toString().split(' ')[4] + ' UTC';
        let arrivalTime = arrivalDatetime.toString().split(' ')[4] + ' UTC';

        departureDate = departureDatetime.toDateString().slice(4);
        arrivalDate = arrivalDatetime.toDateString().slice(4);

        const flight = new Flight({
            flightNumber, 
            departureDate, 
            departureTime,
            departureLocation,
            arrivalDate,
            arrivalTime, 
            arrivalLocation,
            passengerCurrent,
            passengerLimit
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created flight to the database
        console.log(flight)
        return flight;
        //return flight._id; // Return the id of the newly created. Could also return the entire object
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