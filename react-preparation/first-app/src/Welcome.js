import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return <h2>Hello, {this.props.name}</h2>
    }
}

export default Welcome;