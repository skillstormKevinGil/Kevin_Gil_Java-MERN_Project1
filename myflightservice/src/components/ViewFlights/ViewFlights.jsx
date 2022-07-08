import { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewFlights.css'
import '../../App.css';

export const CustomerFlightList = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all flights
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div className = 'viewFlightComponent'>
            {/* Transform the flights array into an array of JSX elements */}
            {flights.map((flight, index) => {
                // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
                return (
                    <ul>
                    <li key={index}>Flight: <strong>{flight.flightNumber}</strong></li>
                    <li key={index}>Date: <strong>{flight.departureDate}</strong> to <strong>{flight.arrivalDate}</strong></li>
                    <li key={index}>Location: <strong>{flight.departureLocation}</strong> to <strong>{flight.arrivalLocation}</strong></li>
                    <li key={index}>Time: <strong>{flight.departureTime}</strong> to <strong>{flight.arrivalTime}</strong></li>
                    <li key={index}>Seats Available: <strong>{flight.passengerLimit - flight.passengerCurrent}</strong></li>
                    </ul>
                );
            })}
        </div>
    );
}