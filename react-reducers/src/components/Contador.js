import React, { useReducer } from 'react'

const initialState = { contador: 0 }
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 }
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 }
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload }
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload }
        case TYPES.RESET:
            return initialState
        default:
            return state
    }
}
const TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
const init = (initialState) => {
    return {contador:initialState.contador + 100}
}
export const Contador = () => {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    const sumar = () => dispatch({ type: TYPES.INCREMENT })
    const sumar_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })
    const restar = () => dispatch({ type: TYPES.DECREMENT })
    const restar_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    const reset = () => dispatch({ type: TYPES.RESET })

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Contador Reducers</h2>
            <nav>
                <button onClick={sumar_5}>+5</button>
                <button onClick={sumar}>+</button>
                <button onClick={reset}>0</button>
                <button onClick={restar}>-</button>
                <button onClick={restar_5}>-5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}
