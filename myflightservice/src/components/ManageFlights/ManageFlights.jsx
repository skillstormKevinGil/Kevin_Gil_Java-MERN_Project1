import { useEffect, useState } from 'react';
import { useRef } from "react";
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ManageFlights.css'
import '../../App.css';

export const ManagementFlightList = () => {
    const [flights, setFlights] = useState([]);
    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const departureTimeRef = useRef();
    const departureLocationRef = useRef();
    const arrivalDateRef = useRef();
    const arrivalTimeRef = useRef();
    const arrivalLocationRef = useRef();
    const passengerCurrentRef = useRef();
    const passengerLimitRef = useRef();
    
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    const handleDelete = async (event) => {
        try {
            if(window.confirm('Would you like to delete this flight?')){
                await axios.delete(`http://localhost:8085/flights/${event}`);
                //navigate('../flights/view', {replace: true});
                axios.get('http://localhost:8085/flights')
                    .then(res => setFlights(res.data));
        }
        } catch (error) {
            console.log('Something Went Wrong - handleDelete');
        }
    }

    const handleEdit = async (event) => {
        try {
            if(window.confirm('Would you like to edit this flight?')){
                await axios.put(`http://localhost:8085/flights/${event}`, {
                departureDate: departureDateRef.current.value, 
                departureTime: departureTimeRef.current.value, 
                departureLocation: departureLocationRef.current.value, 
                arrivalDate: arrivalDateRef.current.value, 
                arrivalTime: arrivalTimeRef.current.value, 
                arrivalLocation: arrivalLocationRef.current.value,
                passengerCurrent: passengerCurrentRef.current.value, 
                passengerLimit: passengerLimitRef.current.value
            });
                //navigate('../flights/view', {replace: true});
                axios.get('http://localhost:8085/flights')
                    .then(res => setFlights(res.data));
        }
        } catch (error) {
            console.log('Something Went Wrong - handleEdit');
        }
    }

    return (
        <div id='center' >
        <table className='manageFlightComponent' >

            <tr>
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
                    <td key={index}>
                        <input type={'text'} value={flight.flightNumber} ref={flightNumberRef}/>
                    </td>
                    <td key={index} >
                        <input type={'text'} placeholder={flight.departureDate} ref={departureDateRef}/>
                    </td>
                    <td key={index}>
                        <input type={'text'} placeholder={flight.departureLocation} ref={departureLocationRef}/>
                    </td>
                    <td key={index}>
                        <input type={'text'} placeholder={flight.departureTime} ref={departureTimeRef}/>
                    </td>
                    <td key={index}>
                        <input type={'text'} placeholder={flight.arrivalDate} ref={arrivalDateRef}/>
                    </td>
                    <td key={index}>
                        <input type={'text'} placeholder={flight.arrivalLocation} ref={arrivalLocationRef}/>
                    </td>
                    <td key={index}>
                        <input type={'text'} placeholder={flight.arrivalTime} ref={arrivalTimeRef}/>
                    </td>
                    <td key={index}>
                        <input type={'number'} placeholder={flight.passengerCurrent} ref={passengerCurrentRef}/>
                    </td>
                    <td key={index}>
                        <input type={'number'} placeholder={flight.passengerLimit} ref={passengerLimitRef}/>
                    </td>
                    
                    <td key={index}>
                        <button onClick={() => handleEdit(flight._id)}>Edit</button>
                        <button onClick={() => handleDelete(flight._id)}>Delete</button>
                    </td>
                </tr>
                );
            
            })}
        </table>
        </div> 
    );
}