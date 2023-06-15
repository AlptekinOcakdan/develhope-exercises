import { useState, useEffect } from 'react';

const Counter = ({ initialValue, incrementAmount, incrementInterval }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + incrementAmount);
        }, incrementInterval);

        return () => {
            clearInterval(interval);
        };
    }, [incrementAmount, incrementInterval]);

    return <h1>{count}</h1>;
};

export default Counter;