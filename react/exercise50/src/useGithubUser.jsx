import useSWR from 'swr';

const fetchGithubUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
    }
    const data = await response.json();
    return data;
};

const useGithubUser = (username) => {
    const { data, error } = useSWR(username, fetchGithubUserData);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useGithubUser;
