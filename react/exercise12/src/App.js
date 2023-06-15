import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
    return (
        <div>
            <Welcome name={<strong>John</strong>} age={23} />
            <Counter/>
        </div>
    );
}

export default App;
