// import React, { useState, createContext, useContext } from 'react'

// const UserContext = createContext();
// function Context() {

//     const [user, setUser] = useState("charan Rajput");
//     return (
//         <UserContext.Provider value={user}>
//             <div>{`hello User ${user}`}</div>
//             <Component2 user="user" />
//         </UserContext.Provider>
//     )
// }

// function Component2() {

//     return (

//         <div>
//             Hello Com2 User Vishal Here!
//             <LastContext />
//         </div>

//     )
// }

// function LastContext() {
//     const user1 = useContext(UserContext);
//     return (
//         <div>
//             Last Context: vishal
//             <div>{`Hello ${user1} get`}</div>
//         </div>
//     )
// }

// export default Context