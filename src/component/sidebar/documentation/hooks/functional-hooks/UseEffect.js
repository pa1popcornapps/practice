import React, { useState, useEffect,useRef } from "react";

function UseEffect() {
    const [title, setTitle] = useState("default title");
    const titleRef = useRef();
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        console.log("useEffect");
        document.title = title;
    }, [title]);
    console.log("render");
    const handleClick = () => setTitle(titleRef.current.value);
    const handleCheckboxChange = () => setDarkMode((prev) => !prev);
    return (
        <div className="use-effect">
            <h5>Use Effect</h5>
        <div className={darkMode ? "view dark-mode" : "view"}>
            <label htmlFor="darkMode">dark mode</label>
            <input
                name="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={handleCheckboxChange}
            />
            <input ref={titleRef} />
            <button onClick={handleClick}>change title</button>
        </div>
        </div>
    );
}

export default UseEffect;
