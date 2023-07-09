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
            <p>Here in the use state hook which utilises two instances a value and a function initialised with a certain value which can be anything from an intege to an array of objects</p>
            <p>syntax is: const [count, setCount] = useState(0)</p>
            <p>Here count is the variable and the setCount is the function initialised with the value of 0</p>
            <div className='m-1'>{count}</div>
            <button className='btn btn-danger m-2' onClick={() => { decrement() }}>Subtract</button>
            <button className='btn btn-primary m-2' onClick={() => { increment() }}>Add</button>
        </div>
    )
}

export default Usestate