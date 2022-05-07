import React from 'react'
import { UserContext } from './contextApi'
function Contextapi1() {
    return (
        <div>
            <UserContext.Consumer>
                {(user) => {
                    return (<div>{user}:Soft</div>)
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Contextapi1