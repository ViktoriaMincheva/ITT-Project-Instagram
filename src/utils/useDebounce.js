//custom use debounce hook

import React, {useState, useEffect} from 'react'

const useDebounce = (value, time) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedValue(value);
        }, time);
        
        return () => {
            clearTimeout(timerID)
        }
    }, [value])

    return debouncedValue;
}

export default useDebounce;
