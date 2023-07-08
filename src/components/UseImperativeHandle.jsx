import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseImperativeHandle = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

    return (
        <>
            <h3>useImperativeHandle Demo</h3>

            <p>The button above is from the parent component and the button below is the child component button</p>
            <p>However, we are able to change the state of the child component through the parent component button</p>
            <button className='btn btn-primary m-3' onClick={() => {setToggle(!toggle)}}>Child button</button><br />
            {toggle && <span>Toggled</span>}
        </>
    )
})

export default UseImperativeHandle