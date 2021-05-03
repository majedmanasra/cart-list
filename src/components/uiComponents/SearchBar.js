import React from "react";
import styles from './cssModules/searchBar.module.css';

function SearchBar({searchText, handleChange}) {
    return <input className={styles.searchBar} placeholder={"Search..."} value={searchText} onChange={handleChange}/>;
}

export default SearchBar;