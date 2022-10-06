import React from 'react'

export default function ChildC({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <button primary onClick={() => childToParent(data)}>Click Child</button>
        </div>
    )
}