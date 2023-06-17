
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import Counter from './Counter';
import Home from './Home';
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
                            <Link to="/users/AlptekinOcakdan">User: AlptekinOcakdan</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/users/:username" component={ShowGithubUser} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
