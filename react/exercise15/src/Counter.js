import {Component} from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
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
        return <CounterDisplay count={this.state.count}/>;
    }
}

export default Counter;