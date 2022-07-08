import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditFlightForm.css';

export const EditFlightForm = () => {
    const flightNumberRef = useRef();
    const departureDatetimeRef = useRef();
    const departureTimezoneRef = useRef();
    const departureLocationRef = useRef();
    const arrivalDatetimeRef = useRef();
    const arrivalTimezoneRef = useRef();
    const arrivalLocationRef = useRef();
    const passengerCurrentRef = useRef();
    const passengerLimitRef = useRef();
    const navigate = useNavigate();

    // eslint-disable-next-line
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, [flightNumberRef]);

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8085/flights/${event}`, {
                flightNumber: flightNumberRef.current.value, 
                departureDatetime: departureDatetimeRef.current.value, 
                departureTimezone: Number(departureTimezoneRef.current.value), 
                departureLocation: departureLocationRef.current.value, 
                arrivalDatetime: arrivalDatetimeRef.current.value, 
                arrivalTimezone: Number(arrivalTimezoneRef.current.value), 
                arrivalLocation: arrivalLocationRef.current.value,
                passengerCurrent: Number(passengerCurrentRef.current.value), 
                passengerLimit: Number(passengerLimitRef.current.value)
            });
            navigate('../flights/view', {replace: true});
        } catch (error) {
            console.log('Error - editFlightForm.jsx/axios/post - ' + error);
        }
    }

    return (
        <>
            <form className="MyForm" onSubmit={handleEdit} >
                <label htmlFor="flightNumber">Flight Number:</label>
                <div>
                    <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
                </div>

                <label htmlFor="departure">Departure Information:</label>
                <div>
                    {/*https://www.w3schools.com/howto/howto_js_autocomplete.asp*/}
                    {/*https://www.ccra.com/airport-codes/*/}
                    <input id="departureDate" type="datetime-local" placeholder="Departure Date" ref={departureDatetimeRef} />
                    {/*https://gisgeography.com/world-time-zone-map/*/}
                    {<select name="departureTimezone" ref={departureTimezoneRef}>
                        <option value= "0" selected="selected">UTC +00:00 (Universal Coordinated Time)</option>
                        <option value= "-1">UTC +01:00 (European Central Time)</option>
                        <option value= "-2">UTC +02:00 (Eastern European Time)</option>
                        <option value= "-3">UTC +03:00 (Eastern African Time)</option>
                        <option value= "-3.5">UTC +03:30 (Middle East Time)</option>
                        <option value= "-4">UTC +04:00 (Near East Time)</option>
                        <option value= "-5">UTC +05:00 (Pakistan Lahore Time)</option>
                        <option value= "-5.5">UTC +05:30 (India Standard Time)</option>
                        <option value= "-6">UTC +06:00 (Bangladesh Standard Time)</option>
                        <option value= "-7">UTC +07:00 (Vietnam Standard Time)</option>
                        <option value= "-8">UTC +08:00 (China Taiwan Time)</option>
                        <option value= "-9">UTC +09:00 (Japan Standard Time)</option>
                        <option value= "-9.5">UTC +09:30 (Australia Central Time)</option>
                        <option value= "-10">UTC +10:00 (Australia Eastern Time)</option>
                        <option value= "-11">UTC +11:00 (Solomon Standard Time)</option>
                        <option value= "-12">UTC +12:00 (New Zealand Time)</option>
                        <option value= "11">UTC -11:00 (Midway Time)</option>
                        <option value= "10">UTC -10:00 (Hawaii Standard Time)</option>
                        <option value= "9">UTC -09:00 (Alaska Standard Time)</option>
                        <option value= "8">UTC -08:00 (Pacific Standard Time)</option>
                        <option value= "7">UTC -07:00 (Phoenix Standard Time)</option>
                        <option value= "7">UTC -07:00 (Mountain Standard Time)</option>
                        <option value= "6">UTC -06:00 (Central Standard Time)</option>
                        <option value= "5">UTC -05:00 (Eastern Standard Time)</option>
                        <option value= "5">UTC -05:00 (Indiana Standard Time)</option>
                        <option value= "4">UTC -04:00 (Puerto Rico and US Virgin Islands Time)</option>
                        <option value= "3.5">UTC -03:30 (Canada Newfoundland Time)</option>
                        <option value= "3">UTC -03:00 (Argentina Standard Time)</option>
                        <option value= "3">UTC -03:00 (Brazil Eastern Time)</option>
                        <option value= "1">UTC -01:00 (Central African Time)</option>
                    </select>}
                    <div>
                    <input id="departureLocation" type="text" placeholder="Departure Location" ref={departureLocationRef} />
                    </div>
                </div>

                <label htmlFor="arrival">Arrival Information:</label>
                <div>
                    {/*https://www.w3schools.com/howto/howto_js_autocomplete.asp*/}
                    {/*https://www.ccra.com/airport-codes/*/}
                    <input id="arrivalDate" type="datetime-local" placeholder="Arrival Date" ref={arrivalDatetimeRef} />
                    {/*https://gisgeography.com/world-time-zone-map/*/}
                    {<select name="arrivalTimezone" ref={arrivalTimezoneRef}>
                        <option value= "0" selected="selected">UTC +00:00 (Universal Coordinated Time)</option>
                        <option value= "-1">UTC +01:00 (European Central Time)</option>
                        <option value= "-2">UTC +02:00 (Eastern European Time)</option>
                        <option value= "-3">UTC +03:00 (Eastern African Time)</option>
                        <option value= "-3.5">UTC +03:30 (Middle East Time)</option>
                        <option value= "-4">UTC +04:00 (Near East Time)</option>
                        <option value= "-5">UTC +05:00 (Pakistan Lahore Time)</option>
                        <option value= "-5.5">UTC +05:30 (India Standard Time)</option>
                        <option value= "-6">UTC +06:00 (Bangladesh Standard Time)</option>
                        <option value= "-7">UTC +07:00 (Vietnam Standard Time)</option>
                        <option value= "-8">UTC +08:00 (China Taiwan Time)</option>
                        <option value= "-9">UTC +09:00 (Japan Standard Time)</option>
                        <option value= "-9.5">UTC +09:30 (Australia Central Time)</option>
                        <option value= "-10">UTC +10:00 (Australia Eastern Time)</option>
                        <option value= "-11">UTC +11:00 (Solomon Standard Time)</option>
                        <option value= "-12">UTC +12:00 (New Zealand Time)</option>
                        <option value= "11">UTC -11:00 (Midway Time)</option>
                        <option value= "10">UTC -10:00 (Hawaii Standard Time)</option>
                        <option value= "9">UTC -09:00 (Alaska Standard Time)</option>
                        <option value= "8">UTC -08:00 (Pacific Standard Time)</option>
                        <option value= "7">UTC -07:00 (Phoenix Standard Time)</option>
                        <option value= "7">UTC -07:00 (Mountain Standard Time)</option>
                        <option value= "6">UTC -06:00 (Central Standard Time)</option>
                        <option value= "5">UTC -05:00 (Eastern Standard Time)</option>
                        <option value= "5">UTC -05:00 (Indiana Standard Time)</option>
                        <option value= "4">UTC -04:00 (Puerto Rico and US Virgin Islands Time)</option>
                        <option value= "3.5">UTC -03:30 (Canada Newfoundland Time)</option>
                        <option value= "3">UTC -03:00 (Argentina Standard Time)</option>
                        <option value= "3">UTC -03:00 (Brazil Eastern Time)</option>
                        <option value= "1">UTC -01:00 (Central African Time)</option>
                    </select>}
                    <div>
                    <input id="arrivalLocation" type="text" placeholder="Arrival Location" ref={arrivalLocationRef} />
                    </div>
                </div>

                <label htmlFor="passenger">Passenger Information:</label>
                <div>
                    <input id="passengerCurrent" type="number" placeholder="Number of Passengers" ref={passengerCurrentRef} />
                    <input id="passengerLimit" type="number" placeholder="Passenger Capacity" ref={passengerLimitRef} />
                </div>

                <input type="submit" value="Edit Flight" />
            </form>
        </>
    );
}