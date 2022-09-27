import React, { useState } from 'react';
function UseState() {
    const [message, setMessage] = useState( '' );
    const [messageObj, letMessage] = useState({ messages: '', id: 1 });

    return (
      <div className="use-state">
        <h5>Use State for arrays</h5>
        <input
           type="text"
           value={message}
           placeholder="Enter a message"
           onChange={e => setMessage(e.target.value)}
         />
        <p>
          <strong>{message}</strong>
        </p>
         <h5>Use State for arrays</h5>
        <input
          type="text"
          value={messageObj.messages}
          placeholder="Enter a message"
          onChange={e => {
            const newMessageObj = { messages: e.target.value };
            letMessage(newMessageObj); 
          }}
        />
        <p>
          <strong>{messageObj.id} : {messageObj.messages}</strong>
        </p>
      </div>
    );
  };
export default UseState;