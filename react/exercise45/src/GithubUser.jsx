
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
    const userData = useGithubUser(username);

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
