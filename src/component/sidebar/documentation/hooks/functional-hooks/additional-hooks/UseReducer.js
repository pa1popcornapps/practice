import React, { useReducer } from "react";
// Defining the initial state and the reducer
const initialState = 0;
const initialStates = { counts: 0 };
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};
const reducers = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counts: state.counts + 1 };
        case 'decrement':
            return { counts: state.counts - 1 };
        default:
            throw new Error();
    }
};
function UseReducer() {
    // Initialising useReducer hook
    const [count, dispatch] = useReducer(reducer, initialState);
    const [counts, dispatchs] = useReducer(reducers, initialStates);
    return (
        <div className="use-reducer">
            <h5>Use Reducer</h5>
            <h2>Ex :- 2</h2>
            <h5>Count :  {count}</h5>
            <button onClick={() => dispatch("add")}>
                add
            </button>
            <button onClick={() => dispatch("subtract")}>
                subtract
            </button>
            <button onClick={() => dispatch("reset")}>
                reset
            </button>
            <h2>Ex :- 1</h2>
            <h5>Count : {counts.counts}</h5>
            <button onClick={() => dispatchs({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatchs({ type: 'increment' })}>Increment</button>
        </div>
    );
};
export default UseReducer;