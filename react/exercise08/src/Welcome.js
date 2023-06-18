import Age from "./Age";

function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {age && age > 18 && <Age age={age} />}
        </div>
    );
}

export default Welcome