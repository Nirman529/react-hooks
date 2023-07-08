import React, {useContext} from 'react'
import { AppContext } from './UseContextHook'

const User = () => {
    const {username} = useContext(AppContext)
    return (
        <div>
            <h6>User: {username}</h6>
        </div>
    )
}

export default User