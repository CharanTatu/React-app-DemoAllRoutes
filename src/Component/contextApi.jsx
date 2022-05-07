import React, { createContext } from 'react'
import Contextapi1 from './Contextapi1';
const UserContext = createContext();
function contextApi() {

    return (
        <div>
            <UserContext.Provider value={"Suma"}>
                <Contextapi1 />
            </UserContext.Provider>
        </div>
    )
}

export default contextApi
export { UserContext };