import React from 'react'

function PostIDCard(props) {
    const { title, body } = props.post
    return (
        <div className='col-4'>
            <div className='card '>
                <div className='card-body bg-info'>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>

            </div>

        </div>
    )
}

export default PostIDCard