import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./styles/Searchbar.module.css";
import useDebounce from '../utils/useDebounce';


export default function Searchbar() {
    const users = useSelector(state => state.users.users);

    const [searchedData, setSearchedData] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const debouncedSearchValue = useDebounce(searchedData, 500);

    useEffect(() => {

        let matches = [];
        if (debouncedSearchValue.length > 0) {
            matches = users.filter((user) => {
                return user.username.toLowerCase().includes(debouncedSearchValue.toLowerCase());
            })
        };

        setSearchedData(debouncedSearchValue);
        setSuggestions(matches);

    }, [debouncedSearchValue])

    const handleClick = (username) => {

        setSuggestions([]);
        setSearchedData("");
        navigate(`/users/${username}`, { replace: true });

    };

    return (
        <div className={styles.SearchContainer}>

            <div className={styles.InputContainer}>
                <img src="../images/icons/search-gray.png" alt="search" className={styles.inputIcon} />
                <input type="text" placeholder="Search" className={styles.SearchInput} onInput={(e) => setSearchedData(e.target.value.trim())} value={searchedData} />
            </div>

            <div className={styles.AutoCompleteContainer}>
                {
                    suggestions &&
                    suggestions.map((suggestion) => (
                        <div key={Math.random()} className={styles.suggestion} onClick={(e) => handleClick(suggestion.username)}>{suggestion.username}</div>
                    ))
                }
            </div>
            
        </div>
    )
}
