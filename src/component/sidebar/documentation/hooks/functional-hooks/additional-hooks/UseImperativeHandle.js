import React, { useRef } from "react";
import ChildUse from "./childUse/ChildUse";
function UseImperativeHandle() {
    const childRef = useRef(null);

    const handleOpenModal = (value) => {
        childRef.current.openModal(value);
    }
    return (
        <div className="use-imperative">
            <h5>Use Imperative Handle</h5>
            <a href="https://blog.logrocket.com/underrated-react-hooks-youre-missing-out-on/">When To Use Use Imperative Handle</a>
            <p>This is a parent component</p>
            <button onClick={() => handleOpenModal(true)}>Open modal</button>
            <ChildUse ref={childRef} />
        </div>
    );
}
export default UseImperativeHandle;