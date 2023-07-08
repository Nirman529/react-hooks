import React, { useState, useEffect } from 'react'
import axios from "axios"

const Useeffect = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const next = () => {
        if (count < 49) {
            setCount(count + 1)
        }
    }

    const prev = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <div className='justify-content-center text-center'>
            <h3>UseEffect Demo to fetch data from api</h3>

            <button className='btn btn-secondary' onClick={() => prev()}>prev 10</button>
            <button className='btn btn-primary' onClick={() => next()}>next 10</button>
            <div key={count}>{count === 49 ? (<p>End reached</p>) : (<></>)}</div>
            <div key={count + 1}>{count === 0 ? (<p>At the start</p>) : (<></>)}</div>
            <h4>Following are title from {count * 10} to {count * 10 + 10}</h4>

            {data?.slice(count * 10, count * 10 + 10).map((item, key) => {
                return <div key={key}>{item.name}</div>
            })}
        </div>
    )
}

export default Useeffect