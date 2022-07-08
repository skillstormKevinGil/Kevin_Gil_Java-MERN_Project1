import { createContext } from "react";

// Let's create a theme object to use with our context
export const user = {
    admin: {

    },
    assoc: {

    },
    guest: {

    }
};

const UserContext = createContext(user.guest);

export default UserContext;