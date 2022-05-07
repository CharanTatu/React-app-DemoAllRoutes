import React from 'react'
function TableComponant(props) {
    const { name, email, phone } = props.users
    return (

        <div className='col-4'>
            <div className='card '>
                <div className='card-body bg-info'>
                    <h3>{name}</h3>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>

            </div>

        </div>
    )

}

export default TableComponant