import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodosCard from './TodosCard';
import { useParams } from 'react-router';
function TodosAPI() {

    const [data, setData] = useState([]);
    const { userId } = useParams()
    useEffect(() => {
        getdata();
    }, [])
    const getdata = async () => {
        const result = await axios.get(userId ? `https://jsonplaceholder.typicode.com/todos?userId=${userId}` :
            `https://jsonplaceholder.typicode.com/todos`
        )
        setData(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                {data.map((post) => {
                    return <TodosCard post={todos} />
                })}
            </div>
        </div>

    )
}

export default TodosAPI