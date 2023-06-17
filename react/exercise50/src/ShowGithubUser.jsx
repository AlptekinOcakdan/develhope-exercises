import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
    const { username } = useParams();

    return (
        <div>
            <h1>Github User: {username}</h1>
            <GithubUser username={username} />
        </div>
    );
};

export default ShowGithubUser;
