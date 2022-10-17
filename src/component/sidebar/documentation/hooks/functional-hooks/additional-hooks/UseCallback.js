import React from "react";
import { useCallback, useState,useEffect } from 'react'
import '../../../../../../App.css';
function UseCallback() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    const plusFive = useCallback(() => {
        console.log("I was called!");
        return num + 5;
    }, [num]);
    return (
        <div className="use-callback">
            <h5>Use Callback</h5>
         
            <div className={light ? "light" : "dark"}>
                <div>
                    <h5>With useCallback (Then Watch In Console By clicking Toggle Button)</h5>
                    <h5>Remove useCallback (Then Watch In Console By clicking Toggle Button)</h5>
                    <h2>
                        Current number: {num},
                        <SomeComp someFunc={plusFive} />
                    </h2>
                    <div className="button-container">
                        <button
                            onClick={() => {
                                setNum(num + 1);
                            }}
                        >
                            Update Number{" "}
                        </button>
                        <button
                            onClick={() => {
                                setLight(!light);
                            }}
                        >
                            {" "}
                            Toggle the light{" "}
                        </button>
                    </div>
                    <a href="https://levelup.gitconnected.com/understanding-the-difference-between-usememo-and-usecallback-ec956adb2004">When To Use UseCallback</a>
                </div>
            </div>
        </div>
    )
}
export default UseCallback;
const SomeComp = ({ someFunc }) => {
    const [calcNum, setCalcNum] = useState(0);
    useEffect(() => {
        setCalcNum(someFunc());
    }, [someFunc]);

    return <span> Plus five: {calcNum}</span>;
};