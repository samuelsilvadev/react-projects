import React from 'react';

import { Search } from '../icons';

import styles from './SearchInput.module.css';

const SearchInput = ({ className = '' }) => {
	return (
		<div className={`${styles.search} ${className}`}>
			<Search width='19px' height='19px' />
			<input
				className={styles.search__input}
				type='text'
				placeholder='Search by name or number'
			/>
		</div>
	);
};

export default SearchInput;
