import { Component } from 'react';

class UncontrolledLogin extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    componentDidMount() {
        this.usernameRef.current.focus();
    }

    handleLogin = () => {
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        const { onLogin } = this.props;
        onLogin({ username, password });
    };

    handleReset = () => {
        this.usernameRef.current.value = '';
        this.passwordRef.current.value = '';
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.usernameRef}
                    placeholder="Username"
                />
                <input
                    type="password"
                    ref={this.passwordRef}
                    placeholder="Password"
                />
                <button onClick={this.handleLogin}>
                    Login
                </button>
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default UncontrolledLogin;
