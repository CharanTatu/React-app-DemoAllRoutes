import React from 'react'

function TodosCard(props) {
    const { title, completed } = props.todos
    console.log("DATA", completed)
    return (
        <div className='col-4'>
            <div className='card '>
                <div className='card-body bg-info'>
                    <h3>{title}</h3>
                    <p>{completed.toString()}</p>
                </div>

            </div>

        </div>
    )
}

export default TodosCard