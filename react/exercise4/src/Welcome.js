function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, {name}!</p>
            <p>Your age is {age}.</p>
        </div>
    );
}

Welcome.defaultProps = {
    name: 'Guest',
    age: 'Unknown'
};

export default Welcome