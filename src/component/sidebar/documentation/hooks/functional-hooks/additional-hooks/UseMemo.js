import React, { useState, useMemo } from "react";
import '../../../../../../App.css';

const plusFives = (num) => {
    console.log("i was called!");
    return num + 5;
};
function UseMemo() {

    const [nums, setNums] = useState(0);
    const [lights, setLights] = useState(true);
    const numPlusFives = useMemo(() => plusFives(nums), [nums]);
    return (
        <div className="use-memo">
            <h5>Use Memo</h5>
            <b>useMemo is very similar to useCallback. It accepts a function and a list of dependencies, but the difference between useMemo and useCallback is that useMemo returns the memo-ized value returned by the passed function. It only recalculates the value when one of the dependencies changes. It’s very useful if you want to avoid expensive calculations on every render when the returned value isn’t changing</b>

     
            <p><b>If you open the console, you’ll see that plusFive is called whether we click on “Update Number” which sets a new number, or “Toggle the light” which updates the boolean state (and has nothing to do with numPlusFive).

                So how can we prevent this from happening? By memoizing plusFive !
                Until we will receive a new number, the function will not be called. The calculation is skipped, and we will receive the result immediately.

                We will do that by using useMemo , and it will look like this:</b></p>
            <div className={lights ? "light" : "dark"}>
                <div>
                    <h5>With useMemo (Then Watch In Console By clicking Toggle Button)</h5>
                    <h5>Remove useMemo (Then Watch In Console By clicking Toggle Button)</h5>
                    <h2>
                        Current number: {nums}, Plus five: {numPlusFives}
                    </h2>
                    <div className="button-container">
                        <button
                            onClick={() => {
                                setNums(nums + 1);
                            }}
                        >
                            Update Number{" "}
                        </button>
                        <button
                            onClick={() => {
                                setLights(!lights);
                            }}
                        >
                            {" "}
                            Toggle the light{" "}
                        </button>
                    </div>
                    <a href="https://levelup.gitconnected.com/understanding-the-difference-between-usememo-and-usecallback-ec956adb2004">When To Use UseMemo</a>
                </div>
            </div>
        </div>
    );
}
export default UseMemo;