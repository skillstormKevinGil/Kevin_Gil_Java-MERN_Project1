import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FlightForm.css';

export const FlightForm = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const departureTimeRef = useRef();
    const departureLocationRef = useRef();
    const arrivalDateRef = useRef();
    const arrivalTimeRef = useRef();
    const arrivalLocationRef = useRef();
    const passengerNumberRef = useRef();
    const passengerLimitRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8085/flights', 
                            { flightNumber: flightNumberRef.current.value, 
                                departure: [departureDateRef.current.value, departureTimeRef.current.value, departureLocationRef.current.value], 
                                departure: [arrivalDateRef.current.value, arrivalTimeRef.current.value, arrivalLocationRef.current.value],
                                passengers: [passengerNumberRef.current.value, passengerLimitRef.current.value],
                            });
            navigate('../', {replace: true});
        } catch (error) {
            console.log('Something Went Wrong');
        }
    }

    return (
        <>
            <form className="MyForm" onSubmit={handleSubmit} >
                <label htmlFor="flightNumber">Flight Number:</label>
                <div>
                    <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
                </div>

                <label htmlFor="departure">Departure Information:</label>
                <div>
                    {/*https://www.w3schools.com/howto/howto_js_autocomplete.asp*/}
                    {/*https://www.ccra.com/airport-codes/*/}
                    <input id="departureDate" type="date" placeholder="Departure Date" ref={departureDateRef} />
                    <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                    {/*https://gisgeography.com/world-time-zone-map/*/}
                    {<select name="departureTimezone">
                        <option selected="selected">UTC+00:00</option>
                        <option>UTC+01:00 (European Central Time)</option>
                        <option>UTC+02:00 (Eastern European Time)</option>
                        <option>UTC+03:00 (Eastern African Time)</option>
                        <option>UTC+03:30 (Middle East Time)</option>
                        <option>UTC+04:00 (Near East Time)</option>
                        <option>UTC+05:00 (Pakistan Lahore Time)</option>
                        <option>UTC+05:30 (India Standard Time)</option>
                        <option>UTC+06:00 (Bangladesh Standard Time)</option>
                        <option>UTC+07:00 (Vietnam Standard Time)</option>
                        <option>UTC+08:00 (China Taiwan Time)</option>
                        <option>UTC+09:00 (Japan Standard Time)</option>
                        <option>UTC+09:30 (Australia Central Time)</option>
                        <option>UTC+10:00 (Australia Eastern Time)</option>
                        <option>UTC+11:00 (Solomon Standard Time)</option>
                        <option>UTC+12:00 (New Zealand Time)</option>
                        <option>UTC-11:00 (Midway Time)</option>
                        <option>UTC-10:00 (Hawaii Standard Time)</option>
                        <option>UTC-09:00 (Alaska Standard Time)</option>
                        <option>UTC-08:00 (Pacific Standard Time)</option>
                        <option>UTC-07:00 (Phoenix Standard Time)</option>
                        <option>UTC-07:00 (Mountain Standard Time)</option>
                        <option>UTC-06:00 (Central Standard Time)</option>
                        <option>UTC-05:00 (Eastern Standard Time)</option>
                        <option>UTC-05:00 (Indiana Standard Time)</option>
                        <option>UTC-04:00 (Puerto Rico and US Virgin Islands Time)</option>
                        <option>UTC-03:30 (Canada Newfoundland Time)</option>
                        <option>UTC-03:00 (Argentina Standard Time)</option>
                        <option>UTC-03:00 (Brazil Eastern Time)</option>
                        <option>UTC-01:00 (Central African Time)</option>
                    </select>}
                    <input id="departureLocation" type="text" placeholder="Departure Location" ref={departureLocationRef} />
                </div>

                <label htmlFor="arrival">Arrival Information:</label>
                <div>
                    {/*https://www.w3schools.com/howto/howto_js_autocomplete.asp*/}
                    {/*https://www.ccra.com/airport-codes/*/}
                    <input id="arrivalDate" type="date" placeholder="Arrival Date" ref={arrivalDateRef} />
                    <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
                    {/*https://gisgeography.com/world-time-zone-map/*/}
                    {<select name="arrivalTimezone">
                        <option selected="selected">UTC+00:00</option>
                        <option>UTC+01:00 (European Central Time)</option>
                        <option>UTC+02:00 (Eastern European Time)</option>
                        <option>UTC+03:00 (Eastern African Time)</option>
                        <option>UTC+03:30 (Middle East Time)</option>
                        <option>UTC+04:00 (Near East Time)</option>
                        <option>UTC+05:00 (Pakistan Lahore Time)</option>
                        <option>UTC+05:30 (India Standard Time)</option>
                        <option>UTC+06:00 (Bangladesh Standard Time)</option>
                        <option>UTC+07:00 (Vietnam Standard Time)</option>
                        <option>UTC+08:00 (China Taiwan Time)</option>
                        <option>UTC+09:00 (Japan Standard Time)</option>
                        <option>UTC+09:30 (Australia Central Time)</option>
                        <option>UTC+10:00 (Australia Eastern Time)</option>
                        <option>UTC+11:00 (Solomon Standard Time)</option>
                        <option>UTC+12:00 (New Zealand Time)</option>
                        <option>UTC-11:00 (Midway Time)</option>
                        <option>UTC-10:00 (Hawaii Standard Time)</option>
                        <option>UTC-09:00 (Alaska Standard Time)</option>
                        <option>UTC-08:00 (Pacific Standard Time)</option>
                        <option>UTC-07:00 (Phoenix Standard Time)</option>
                        <option>UTC-07:00 (Mountain Standard Time)</option>
                        <option>UTC-06:00 (Central Standard Time)</option>
                        <option>UTC-05:00 (Eastern Standard Time)</option>
                        <option>UTC-05:00 (Indiana Standard Time)</option>
                        <option>UTC-04:00 (Puerto Rico and US Virgin Islands Time)</option>
                        <option>UTC-03:30 (Canada Newfoundland Time)</option>
                        <option>UTC-03:00 (Argentina Standard Time)</option>
                        <option>UTC-03:00 (Brazil Eastern Time)</option>
                        <option>UTC-01:00 (Central African Time)</option>
                    </select>}
                    <input id="arrivalLocation" type="text" placeholder="Arrival Location" ref={arrivalLocationRef} />
                </div>

                <label htmlFor="passenger">Passenger Information:</label>
                <div>
                    <input id="passengerNumber" type="text" placeholder="Number of Passengers" ref={passengerNumberRef} />
                    <input id="passengerLimit" type="text" placeholder="Passenger Capacity" ref={passengerLimitRef} />
                </div>

                <input type="submit" value="Add Flight" />
            </form>
        </>
    );
}