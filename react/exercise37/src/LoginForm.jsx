import React from 'react';
import useLoginForm from './useLoginForm';

const LoginForm = () => {
    const { username, password, handleUsernameChange, handlePasswordChange } = useLoginForm();

    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button>Login</button>
        </div>
    );
};

export default LoginForm;
