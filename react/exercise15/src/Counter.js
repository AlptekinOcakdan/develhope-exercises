import {Component} from "react";

function CounterDisplay({ count }) {
    return <h1>{count}</h1>;
}

class Counter extends Component {
    // In this updated version, the constructor is still required to initialize the state and handle the initial value of the counter.
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + this.props.incrementAmount
            }));
        }, this.props.incrementInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}}

export default Counter;