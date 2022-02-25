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


// useEffect(() => {
//     let matches = [];
//     matches = users.filter(user => {
//         return user.username.toLowerCase().includes(debouncedSearchValue.toLowerCase())
//     });
//     setSearchedData(debouncedSearchValue);
//     setSuggestions(matches);
// }, [debouncedSearchValue])

// const handleClick = (username) => {
//     setSuggestions([]);
//     navigate(`/users/${username}`, { replace: true });
// };