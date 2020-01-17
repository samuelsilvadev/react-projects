import React from 'react';

import { Search } from '../icons';

const SearchInput = ({ className = '' }) => {
	return (
		<>
			<style jsx>
				{`
					.search {
						align-items: center;
						background-color: var(--light-sky-blue);
						border-radius: 18px;
						display: flex;
						margin-left: auto;
						padding-left: 12px;
						height: 27px;
						width: 300px;
					}

					.search__input {
						background: none;
						border: none;
						padding-left: 10px;
						font-family: Lato;
						font-size: 16px;
						font-weight: 300;
						line-height: normal;
						letter-spacing: 0.13px;
						color: var(--dark-grey-blue);
						flex-grow: 1;
					}

					.search__input::placeholder {
						color: var(--dark-grey-blue);
					}
				`}
			</style>
			<div className={`search ${className}`}>
				<Search width='19px' height='19px' />
				<input
					className='search__input'
					type='text'
					placeholder='Search by name or number'
				/>
			</div>
		</>
	);
};

export default SearchInput;
