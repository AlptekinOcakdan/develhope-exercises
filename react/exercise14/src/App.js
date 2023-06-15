import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
    return (
        <div>
            <Welcome name={<strong>John</strong>} age={23} />
            <Counter initialValue={0} incrementInterval={1000} incrementAmount={1} />

        </div>
    );
}

export default App;
