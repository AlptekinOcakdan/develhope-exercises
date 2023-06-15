import { useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ClickCounter;
