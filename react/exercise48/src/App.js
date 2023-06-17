
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import GithubUserList from './GithubUserList';
import Counter from './Counter';
import Home from './Home';
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
                            <Link to="/counter">Counter</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/counter" component={Counter} />
                    <Route exact path="/users" component={GithubUserList} />
                    <Route path="/users/:username" component={ShowGithubUser} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;