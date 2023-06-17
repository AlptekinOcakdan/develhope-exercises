import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/users/:username" component={ShowGithubUser} />
            </Switch>
        </Router>
    );
};

export default App;
