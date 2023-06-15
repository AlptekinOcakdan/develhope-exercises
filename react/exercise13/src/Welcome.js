import Age from "./Age";

function Welcome({name, age}) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {age && age > 18 && age < 65 && name==="John" && <Age age={age}/>}
        </div>
    );
}

export default Welcome