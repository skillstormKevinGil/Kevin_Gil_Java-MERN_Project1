//import { useState } from "react";
import { CustomerFlightList } from "../components/ViewFlights"
//import { ManagementFlightList } from "../components/ManageFlights"

export const ViewFlights = () => {
{/*    
    const [currUser, setCurrUser] = useState(true);

    const toggleUser = () => {
        setCurrUser(!currUser);
    }
*/}
    return (
        <>
            {/*<button onClick={toggleUser}>Manage Flights</button>
            {currUser && <CustomerFlightList/>}
            {!currUser && <ManagementFlightList/>}
            */}
            <CustomerFlightList/>
        </>
    );
}