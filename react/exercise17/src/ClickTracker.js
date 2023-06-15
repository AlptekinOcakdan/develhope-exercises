import { Component } from 'react';

class ClickTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastButtonPressed: null
        };
    }

    handleClick = (event) => {
        const lastButtonPressed = event.target.name;
        this.setState({
            lastButtonPressed
        });
    };

    render() {
        const { lastButtonPressed } = this.state;

        return (
            <div>
                <h1>Last Button Pressed: {lastButtonPressed}</h1>
                <button name="Button 1" onClick={this.handleClick}>Button 1</button>
                <button name="Button 2" onClick={this.handleClick}>Button 2</button>
                <button name="Button 3" onClick={this.handleClick}>Button 3</button>
            </div>
        );
    }
}

export default ClickTracker;
