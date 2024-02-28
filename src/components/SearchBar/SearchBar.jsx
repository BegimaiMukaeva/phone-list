import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
      <input
          className={styles.searchBar}
          type="text"
          placeholder="Search contacts..."
          onChange={(e) => onSearch(e.target.value)}
      />
  );
};

export default SearchBar;
