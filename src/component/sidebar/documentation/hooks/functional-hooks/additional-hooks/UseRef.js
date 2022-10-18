import React, { useRef } from "react";
function UseRef() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.value =
        "The quick brown fox jumps over the lazy dog";
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <div className="use-ref">
            <h5>Use Ref</h5>
            <p><b>useRef is used to get the values and insert the values from ref attribute(input with ref attribute) </b></p>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}
export default UseRef;