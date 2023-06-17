import FilteredList from './FilteredList';

const myList = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 18 },
    { id: 4, name: 'Jane', age: 30 },
    { id: 5, name: 'Mike', age: 17 },
];

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <FilteredList list={myList} />
        </div>
    );
};

export default App;
