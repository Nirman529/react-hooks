import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        // console.log(inputRef.current.value);
        // uncomment above statement to see that the value in the uselayouteffect is rendered before the useeffect hook is set forward
    }, [])

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])
    
    return (
        <>
            <h3>UseLayoutEffect</h3>
            <p>Refresh page again to see that the hello in the input field was changed from its previous value.</p>
<p>This happens because useLayoutEffect is triggered before the useEffect hook in the component life cycle</p>
            <input ref={inputRef} value='NIRMAN' onChange={() => { }} />
        </>
    )
}

export default UseLayoutEffect