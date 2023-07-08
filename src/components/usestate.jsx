import React, { useState } from 'react'

const Usestate = () => {
    const [count, setcount] = useState(0)

    function increment() {
        setcount(count + 1)
    }

    function decrement() {
        setcount(count - 1)
    }

    return (
        <div className='justify-content-center text-center'>
            <h3>UseState Demo</h3>
            <div className='m-1'>{count}</div>
            <button className='btn btn-danger' onClick={() => { decrement() }}>Subtract</button>
            <button className='btn btn-primary' onClick={() => { increment() }}>Add</button>
        </div>
    )
}

export default Usestate