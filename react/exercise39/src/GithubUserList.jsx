import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUserList = () => {
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddUser = () => {
        setUsernames((prevUsernames) => [...prevUsernames, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <div>
                {usernames.map((username) => (
                    <GithubUser key={username} username={username} />
                ))}
            </div>
        </div>
    );
};

export default GithubUserList;
