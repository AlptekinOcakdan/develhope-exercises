import Counter from "./Counter";

function App() {
    return (
        <div>
            <Counter initialValue={0} incrementInterval={1000} incrementAmount={1} />

        </div>
    );
}

export default App;
