import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from './counterActions';

const App = ({ counter, incrementCounter, decrementCounter, resetCounter }) => {
    return (
        <div>
            <p>Current count: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state,
});

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter,
    resetCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
