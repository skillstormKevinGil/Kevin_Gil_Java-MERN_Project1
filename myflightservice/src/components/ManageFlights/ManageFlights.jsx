import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ManageFlights.css'
import '../../App.css';

export const ManagementFlightList = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all flights
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    const handleDelete = async (event) => {
        try {
            if(window.confirm('Would you like to delete this flight?')){
                await axios.delete(`http://localhost:8085/flights/${event}`);
                navigate('../flights/view', {replace: true});
        }
        } catch (error) {
            console.log('Something Went Wrong - handleSubmit');
        }
    }

    return (
        <div id='center' >
        <table className='manageFlightComponent' >
{/*
            <tr style ={{position: 'sticky', top:'0.5em', }}>
                <th>
                    <input style ={{padding:'0', margin:'0'}} type="submit" value="Add Flight"  />
                </th>
            </tr>
*/}
            <tr style ={{position: 'sticky', top:'0em'}}>
                <th>Flight</th>
                <th>Departure Date</th>
                <th>Departure Location</th>
                <th>Departure Time</th>
                <th>Arrival Date</th>
                <th>Arrival Location</th>
                <th>Arrival Time</th>
                <th>Number of Passengers</th>
                <th>Airline Capacity</th>
                <th>Modify Flight</th>
            </tr>
            
            {flights.map((flight, index) => {
                return (
                <tr>
                    <td key={index}>{flight.flightNumber}</td>
                    <td key={index}>{flight.departureDate}</td>
                    <td key={index}>{flight.departureLocation}</td>
                    <td key={index}>{flight.departureTime}</td>
                    <td key={index}>{flight.arrivalDate}</td>
                    <td key={index}>{flight.arrivalLocation}</td>
                    <td key={index}>{flight.arrivalTime}</td>
                    <td key={index}>{flight.passengerCurrent}</td>
                    <td key={index}>{flight.passengerLimit}</td>
                    <td key={index}>
                        <button onClick={() => handleDelete(flight._id)}>Delete</button>
                    </td>
                </tr>
                );
            
            })}
        </table>
        </div> 
    );
}