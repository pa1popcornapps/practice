import React, {useRef, useEffect, useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.value = "another user"
  });
  useLayoutEffect(()=>{
    console.log(inputRef.current.value)
  });
    return (
        <div className="use-layout">
            <h5>Use Layout Effect</h5>
            <a href="https://dev.to/emmanuelthecoder/useeffect-vs-uselayouteffect-the-difference-and-when-to-use-them-124c">When To Use Use Layout Effect</a>
            <div>
                <input type="text" value="EmmanuelTheCoder" ref={inputRef} />
            </div>
        </div>
    );
}
export default UseLayoutEffect;