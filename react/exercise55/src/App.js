import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todosReducer from './todosReducer';
import Todos from './Todos';

const store = createStore(todosReducer);

const App = () => {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    );
};

export default App;
