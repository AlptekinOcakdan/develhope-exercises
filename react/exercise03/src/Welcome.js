function Welcome({ name }) {
    return <p>Welcome, {name}!</p>;
}

Welcome.defaultProps = {
    name: 'Guest'
};
export default Welcome