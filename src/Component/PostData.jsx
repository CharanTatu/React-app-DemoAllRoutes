import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PostData() {
    const [data, setData] = useState([]);


    const deleteUSer = (id) => {
        const devtool = data.findIndex((user) => user.id === id)
        if (devtool > -1) {
            let copy = [...data];
            copy.splice(devtool, 1)
            setData(copy);
        }
    }

    useEffect(() => {
        getdata();
    }, [])
    const getdata = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(result.data);
    }

    return (
        <div>
            <table className=' className="table table-bordered '>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                        <th>IDRec</th>
                        <th>Todo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, title, body }) => {
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteUSer(id)}>Delete</button>
                                </td>
                                <td>
                                    <Link className='btn btn-primary' to={`/posts/${id}`}>Post</Link>
                                </td>
                                <td>
                                    <Link className='btn btn-warning' to={`/todos/${id}`}>Todos</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PostData