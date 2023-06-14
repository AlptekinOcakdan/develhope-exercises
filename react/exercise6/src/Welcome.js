import Age from "./Age";

function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
        </div>
    );
}

export default Welcome