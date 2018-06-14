import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
    <div className="search">
        <input
            className="search__input"
            type="search"
            placeholder="Type a username to search at Github"
            onKeyUp={handleSearch}
        />
    </div>
);

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Search;
