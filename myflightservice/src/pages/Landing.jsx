import { useState } from "react";
import { FlightForm } from "../components/FlightForm"

export const Landing = () => {
    const [shouldRender, setShouldRender] = useState(true);

    const toggleComponent = () => {
        setShouldRender(!shouldRender);
    }

    return (
        <>
            <FlightForm/>
        </>
    );
}