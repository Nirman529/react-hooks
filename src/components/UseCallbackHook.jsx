import React, { useState, useCallback } from 'react'
import CallbackChild from './CallbackChild';

const UseCallbackHook = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Implementing the usecallback hook')
    const returnComment = useCallback(
        (name) => {
            return data + name;
        }, [data]
    );

    return (
        <>
            <h3>UseCallbackHook Demo</h3>
            <CallbackChild returnComment={returnComment} />

            <button className='btn btn-primary m-3' onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <div >Toggle</div>}
        </>
    )
}

export default UseCallbackHook