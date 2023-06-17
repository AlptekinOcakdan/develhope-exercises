import { useState, useCallback } from 'react';

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);

    return [count, increment, decrement, reset];
};

export default useCounter;
