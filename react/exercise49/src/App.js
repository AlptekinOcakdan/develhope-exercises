import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">User List</Link>
                        </li>
                        <li>
                            <Link to="/counter">Counter</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={GithubUserList} />
                    <Route path="/users/:username" component={ShowGithubUser} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
