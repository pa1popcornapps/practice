import React from "react";
import { useCallback, useState } from 'react'

const Button = React.memo(({ handleClick, name }) => {
    console.log(`${name} rendered`)
    return <button onClick={handleClick}>{name}</button>
})

function UseCallback() {
    console.log('counter rendered')
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])
    return (
        <div className="use-callback">
            <h5>Use Callback</h5>
            {countOne} {countTwo}
            <Button handleClick={memoizedSetCountOne} name="button1" />
            <Button handleClick={memoizedSetCountTwo} name="button1" />
        </div>
    )
}
export default UseCallback;