import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableComponant from './TableComponant';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/reducer/CounterReducer'

function TableData() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteruser, setFilteruser] = useState([])
    //redux
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)
    const incre = () => {
        dispatch(incrementCounter(count + 1));
    }
    const dicre = () => {
        dispatch(decrementCounter(count - 1));
    }

    useEffect(() => {
        const searchdev = users.filter((user) => {
            return (user.username.toLowerCase().match(search.toLowerCase()) ||
                user.name.toLowerCase().match(search.toLowerCase()))
        })
        setFilteruser(searchdev)
        console.log(searchdev)
    }, [search])



    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(result.data);
            setUsers(result.data);
            setFilteruser(result.data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div >
            <h1>{count}</h1>
            <button onClick={incre}>+</button>
            <button onClick={dicre}>-</button>
            <input className='w-25 mb-4 form-control' type="text" placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            ></input>

            <table className="className = table table-bordered sm-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteruser.map(({ id, name, username, email, phone }) => {
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

            {filteruser.map((users) => {
                return (
                    <div>
                        <TableComponant users={users} />
                    </div>
                )
            })}

        </div>
    )
}

export default TableData