import React, { useRef } from 'react'
import UseImperativeHandle from './UseImperativeHandle';

const ParentComponent = () => {
    const buttonRef = useRef(null);

    return (
        <div>
            <button className='btn btn-danger m-3'
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >
                Parent button
            </button>
            <UseImperativeHandle ref={buttonRef}/>
        </div>
    )
}

export default ParentComponent