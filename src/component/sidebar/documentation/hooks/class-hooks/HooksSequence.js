import React from 'react';
class HooksSequence extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "Click The Button" };
        this.changeState = this.changeState.bind(this)
    }
    render() {
        return (
            <div className="class-hooks">
                <h1>Class Component's Lifecycle</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick={this.changeState}>Hooks</button>
            </div>
        );
    }
    componentWillMount() {
        console.log('Component Will MOUNT!')
    }
    componentDidMount() {
        console.log('Component Did MOUNT!')
    }
    changeState() {
        this.setState({ hello: " Watch Console After Click." });
    }
    componentWillReceiveProps(newProps) {
        console.log('Component Will Recieve Props!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }
}
export default HooksSequence;  