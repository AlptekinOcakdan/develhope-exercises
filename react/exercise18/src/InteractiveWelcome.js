import {Component} from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        const { inputValue } = this.state;

        return (
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                />
                <Welcome name={inputValue} />
            </div>
        );
    }
}

export default InteractiveWelcome;