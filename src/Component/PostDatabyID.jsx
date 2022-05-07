import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostIDCard from './PostIDCard';
import { useParams } from 'react-router';
function PostDatabyID() {

    const [data, setData] = useState([]);
    const { userId } = useParams()
    useEffect(() => {
        getdata();
    }, [])
    const getdata = async () => {
        const result = await axios.get(userId ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}` :
            `https://jsonplaceholder.typicode.com/posts`
        )
        setData(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                {data.map((post) => {
                    return <PostIDCard post={post} />
                })}
            </div>
        </div>

    )
}

export default PostDatabyID