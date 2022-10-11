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
                <b>Controlled components are mainly those where any prop value of the component is either
                    from the parent component or from the store (as in case of redux).</b>
                <p>Example:-</p>
                <p>Which Uses Props Of The component and Ref</p>
                <p>value="this.props.fromParent"</p>
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