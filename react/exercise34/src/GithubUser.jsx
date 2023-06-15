import { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.log('Error:', response.status);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchUserData();
    }, [username]);

    return (
        <div>
            {userData ? (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Username: {userData.login}</p>
                    <p>Location: {userData.location}</p>
                    <p>Bio: {userData.bio}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default GithubUser;