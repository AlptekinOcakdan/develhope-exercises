import { useState } from 'react';

const useGithubUser = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserData = async (username) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setError(null);
            } else {
                setError('Error fetching user data');
            }
        } catch (error) {
            setError('Error fetching user data');
        } finally {
            setLoading(false);
        }
    };

    return { userData, loading, error, fetchUserData };
};

export default useGithubUser;
