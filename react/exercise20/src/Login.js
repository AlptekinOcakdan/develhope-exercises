import { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleLogin = () => {
        const { onLogin } = this.props;
        const { username, password } = this.state;
        onLogin({ username, password });
    };

    handleReset = () => {
        this.setState({
            username: '',
            password: ''
        });
    };

    render() {
        const { username, password } = this.state;
        const isDisabled = !username || !password;

        return (
            <div>
                <input
                    type="text"
                    value={username}
                    onChange={this.handleUsernameChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                    placeholder="Password"
                />
                <button onClick={this.handleLogin} disabled={isDisabled}>
                    Login
                </button>
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Login;
