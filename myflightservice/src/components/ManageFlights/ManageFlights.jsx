import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from "react";
import './ManageFlights.css'
import '../../App.css';

export const ManagementFlightList = () => {
    const flightIdRef = useRef();
    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all flights
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(flightIdRef.current.value)
            if(window.confirm('Would you like to delete this flight?')){
            await axios.delete('http://localhost:8085/flights/'+ flights.id);
        }
        } catch (error) {
            console.log('Something Went Wrong - handleSubmit');
        }
    }

    const deleteFlight = async (id) => {
        try {
            await axios.delete(`${id}`);
            setFlights(
                flights.filter((flight) => {
                    return flight.id !== id;
                })
            );
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
                        <form onSubmit={handleSubmit} ref={flightIdRef}>
                             <input type="submit" value="Delete" />
                        </form>
                    </td>
                </tr>
                );
            
            })}
        </table>
        </div> 
    );
}