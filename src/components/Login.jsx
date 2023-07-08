import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'


const Login = () => {

    const { setUsername } = useContext(AppContext)
    return (
        <>
            <div className='wrap-content'>
                <input className='form-control' type="text" onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            </div>
        </>
    )
}

export default Login