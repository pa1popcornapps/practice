import React from "react";
import { useSelector ,useDispatch} from "react-redux";
export default function Redux() {
    const counter = useSelector((state) => state.counter)
    const dispatch=useDispatch()
    const increment =()=>{
        dispatch({type:'INC'})
    }
    const decrement =()=>{
        dispatch({type:'DEC'})
    }
    const adds=()=>{
        dispatch({type:"ADD",payload:10})
    }
    return (
        <div className="use-state">
            <h5>React With Redux</h5>
            <h1>Counter With Redux</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={adds}>Add By 10</button>
        </div>
    );
}