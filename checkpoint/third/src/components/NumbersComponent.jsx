import DisplayNumber from "./DisplayNumber.jsx";
import {useEffect, useState} from "react";

const NumbersComponent = () => {
    const [number, setNumber] = useState(3);
    const [numbers, setNumbers] = useState([number]);
    const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
    useEffect(() => {
        setNumbers([...numbers, number]);
        numbers.splice(0,1);

    }, [number])
    const newNumber = (() => {
        fetch(url).then(r => r.json()).then(r => setNumber(r))
    })
    const removeLastNumber = () => {
        // numbers.splice(numbers.length-1,1);
        const poppedArray = [...numbers];
        const poppedElement = poppedArray.pop();
        setNumbers(poppedArray);
    }
    const addLocalStorage = () => {
        localStorage.setItem('number',JSON.stringify(numbers));
    }
    const loadFromStorage = () => {
        const data = localStorage.getItem('number');
        console.log(data);
    }
    console.log(numbers);
    return (
        <>
            <DisplayNumber number={number}/>
            <button onClick={newNumber}>New Number</button>
            <DisplayNumber number={numbers.map((n) => {
                return ' ' + n
            })}/>

            <button onClick={removeLastNumber}>Remove Last Number</button>

            <button onClick={addLocalStorage}>Add to Local Storage</button>

            <button onClick={loadFromStorage}>Load From Storage</button>
        </>
    );
};

export default NumbersComponent;