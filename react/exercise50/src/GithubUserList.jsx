import { useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

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

    const { path } = useRouteMatch();

    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <div>
                {usernames.map((username) => (
                    <div key={username}>
                        <Link to={`${path}/${username}`}>{username}</Link>
                    </div>
                ))}
            </div>
            <Switch>
                <Route path={`${path}/:username`} component={ShowGithubUser} />
            </Switch>
        </div>
    );
};

export default GithubUserList;
