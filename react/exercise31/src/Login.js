import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin({ username, password });
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    const isDisabled = !username || !password;

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin} disabled={isDisabled}>
                Login
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default Login;
