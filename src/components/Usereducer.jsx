import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }

        case "toggleShowText":
            return { count: state.count, showText: !state.showText }

        default:
            return state
    }
}

const Usereducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <>
            <h3>UseReducer hook demo</h3>
            <h5>Count state: {state.count}</h5>
            <button className='btn btn-primary' onClick={() => {
                dispatch({ type: "INCREMENT" })
            }}>
                Increment
            </button> <br /><br />

            {state.showText && <div> Showing text</div>}
            <button className='btn btn-primary' onClick={() => {
                dispatch({ type: "toggleShowText" })
            }}>Show/Hide text</button>
        </>
    )
}

export default Usereducer