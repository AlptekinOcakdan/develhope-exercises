import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
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

    return userData;
};

export default useGithubUser;
