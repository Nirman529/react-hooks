import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                setData(response.data)
            })
    }, [])

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log('This was computed',)

        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <>
            <h3>UseMemoHook</h3>
            <div>{getLongestName}</div>
            <button className='btn btn-primary m-3' onClick={() => {
                setToggle(!toggle);
            }}>
                Toggle
            </button>

            {toggle && <div>Toggle</div>}


        </>
    )
}

export default UseMemoHook