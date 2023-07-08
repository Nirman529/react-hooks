import React, { useEffect } from 'react'

const CallbackChild = ({ returnComment }) => {
   
    useEffect(() => {
        console.log('return comment function called', )
    },[returnComment])
   
    return (
        <>
            <div>{returnComment("Callback child called")}</div>
        </>
    )
}

export default CallbackChild