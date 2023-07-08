import React, { useRef } from 'react'

const Useref = () => {
    const inputRef = useRef(null);

    const action = () => {
        inputRef.current.focus() 
    }
    const clearAction= () => {
        inputRef.current.value = ''
    }

    return (
        <>
            <h3>useRef Demo</h3>
            <input type="text" placeholder='Enter text here' ref={inputRef} /> <br />
            <button className='btn btn-primary m-1' onClick={action}>Enter text</button>
            <button className='btn btn-danger m-1' onClick={clearAction}>Clear text box</button>
        </>
    )
}

export default Useref