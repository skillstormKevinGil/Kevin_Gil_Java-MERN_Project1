const Flight = require('../models/Flight.model');

const findFlightById = async (flightId) => {
    try {
        // If no flight is found, this does NOT return a rejected promise. Instead null is returned
        const flight = await Flight.findById(flightId);
        if (flight == null) {
            throw `No flight with the id of ${flightId} found.`;
        }
        return flight; // Flight was found and we return it
    } catch (err) {
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // GET all flights
    return flights;
}

const createFlight = async({
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
        }); 
        await flight.save();
        return flight._id; 
    } 
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const updateFlightById = async (flightId) => {
    try {
        const flight = await Flight.findById(flightId);
        if (flight == null) {
            throw `No flight with the id of ${flightId} found.`;
        }
        return flight; // Flight was found and we return it
    } catch (err) {
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const deleteFlightById = async (flightId) => {
    try {
        console.log(`${flightId}`)
        const flight = await Flight.deleteOne({_id: flightId});
        if (!flight.deletedCount) {
            throw `No flight with the id of ${flightId} found.`;
        }
        console.log(`${flightId} successfully removed`);
        return `${flightId} successfully removed`;
    } catch (err) {
        throw { status: 404, message: err };
    }
}

const deleteAllFlights = async(limit = 0) => {
    const flights = await Flight.deleteMany();

    return { status: 200, message: `All Flights Removed` };
}
module.exports = { findFlightById, findAllFlights, createFlight, updateFlightById, deleteFlightById, deleteAllFlights, };