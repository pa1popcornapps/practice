import React, { Component } from "react";

class UnControlledForms extends Component {
    constructor() {
        super()
        this.nameInput = React.createRef();
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        console.log(this.nameInput.current.value);
    };

    render() {
        return (
            <div className="use-context">
                <h5>Un Controlled Forms</h5>
                <b>In case of an uncontrolled component, the component value can be taken
                    from the state of the component depending on the event handling.
                    <p>Example:-</p>
                    <p>Which Uses States Of The Component</p>
                    <p>value="this.state.independentValue"</p>
                </b>
                <form onSubmit={this.submitFormHandler}>
                    <div>
                        <input type="text" name="name" ref={this.nameInput} />
                    </div>
                </form>
            </div>
        );
    }
}
export default UnControlledForms;