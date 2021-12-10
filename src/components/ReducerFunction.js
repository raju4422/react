import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 1;
const reducer123 = (state, action) => {
switch (action.type) {
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

const ReducerFunction = () => {
    // Initialising useReducer hook
const [count, dispatchq] = useReducer(reducer123, initialState);
return (
    <div>
    <h2>{count}</h2>
    <button onClick={() => dispatchq({type:'add'})}>
        add
    </button>
    <button onClick={() => dispatchq({type:'subtract'})}>
        subtract
    </button>
    <button onClick={() => dispatchq({type:'reset'})}>
        reset
    </button>
    </div>
);
};


export default ReducerFunction;