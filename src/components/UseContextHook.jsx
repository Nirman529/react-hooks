import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null);

const UseContextHook = () => {
    const [username, setUsername] = useState('')

    return (
        <>
            <AppContext.Provider value={{ username, setUsername }}>
                <h3>UseContextHook Demo</h3>
                <Login /> <User />
            </AppContext.Provider>
        </>
    )
}

export default UseContextHook