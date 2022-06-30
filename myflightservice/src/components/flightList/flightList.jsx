import { useEffect, useState } from 'react';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all flights
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div>
            {/* Transform the flights array into an array of JSX elements */}
            {flights.map((flight, index) => {
                // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
                return (
                    <div key={flight._id}>
                        <div><strong>{flight.flightNumber}</strong></div>
                        <div><strong>{flight.departureDate}</strong> to <strong>flight.arrivalDate</strong></div>
                        <div><strong>{flight.departureTime}</strong> to <strong>flight.arrivalTime</strong></div>
                        <div><strong>{flight.departureLocation}</strong> to <strong>flight.arrivalLocation</strong></div>
                        <div>Seats Available - {flight.passengerLimit - flight.passenger.Current}</div>
                    </div>
                );
            })}
        </div>
    );
}