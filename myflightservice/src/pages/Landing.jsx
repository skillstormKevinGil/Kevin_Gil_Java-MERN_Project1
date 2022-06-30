import { useState } from "react";

export const Landing = () => {
    const [shouldRender, setShouldRender] = useState(true);

    const toggleComponent = () => {
        setShouldRender(!shouldRender);
    }

    return (
        <>
        <button onClick={toggleComponent}>Toggle Render</button>
        {shouldRender && <p>Hello</p>}
        </>
    );
}