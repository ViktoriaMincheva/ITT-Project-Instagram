import React from 'react';
import { useState } from 'react';
import { useNavigate, navigation } from 'react-router-dom';
import styles from "./styles/Searchbar.module.css";
import { useSelector } from 'react-redux';


export default function Searchbar() {
    const users = useSelector(state => state.users.users);

    const [searchedData, setSearchedData] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleInput = (text) => {
        let matches = [];
        if(text.length > 0) {
                matches = users.filter((user) => {
                    return user.username.toLowerCase().includes(text.toLowerCase());
            })
        }
        setSuggestions(matches);
        setSearchedData(text);
    }

    const handleClick = (username) => {
        setSuggestions([]);
        navigate(`/users/${username}`, { replace: true });
    }

    return (
        <div className={styles.SearchContainer}>
            <div className={styles.InputContainer}>
                <img src="../images/icons/search-gray.png" alt="search" className={styles.inputIcon} />
                <input type="text" placeholder="Search" className={styles.SearchInput} onInput={(e) => handleInput(e.target.value.trim())} value={searchedData}/>
            </div>
            <div className={styles.AutoCompleteContainer}>
                {
                   suggestions && 
                   suggestions.map((suggestion) => (
                       <div key={Math.random()} className={styles.suggestion} onClick={(e) => handleClick(suggestion.username)}>{suggestion.username}</div>
                    )
                   )
                }
            </div>
        </div>
    )
}
