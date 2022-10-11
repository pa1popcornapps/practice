
import React, { useState } from "react";

function ControlledForms() {
    const [inputField, setInputField] = useState({
        first_name: '',
        last_name: '',
        gmail: ''
    })

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value })
    }

    const submitButton = () => {
        alert(inputField.gmail)
    }
    return (
        <div className="use-context">
            <h5>Controlled Forms</h5>
            <b>In case of an uncontrolled component, the component value can be taken
                from the state of the component depending on the event handling.</b>
            <p>Example:-</p>
            <p>Which Uses States Of The Component</p>
            <p>value="this.state.independentValue"</p>

            <form>
                <input
                    type="text"
                    name="first_name"
                    onChange={inputsHandler}
                    placeholder="First Name"
                    value={inputField.first_name} />
                <br />
                <input
                    type="text"
                    name="last_name"
                    onChange={inputsHandler}
                    placeholder="Lirst Name"
                    value={inputField.last_name} />
                <br />
                <input
                    type="gmail"
                    name="gmail"
                    onChange={inputsHandler}
                    placeholder="Gmail"
                    value={inputField.gmail} />
                <br />
                <button onClick={submitButton}>Submit Now</button>
            </form>
        </div>
    );
}
export default ControlledForms;