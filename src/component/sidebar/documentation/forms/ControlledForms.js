
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
        console.log(inputField)
        alert(inputField.gmail)
    }
    return (
        <div className="use-context">
            <h5>Controlled Forms</h5>
            <b>Controlled components are mainly those where any prop value of the component is either
                from the parent component or from the store (as in case of redux).
                <p>Example:-</p>
                <p>Which Uses Props Of The component and Ref</p>
                <p>value="this.props.fromParent"</p></b>

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