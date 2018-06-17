import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (
    <div className="search">
        <input
            className="search__input"
            type="search"
            placeholder="Type a username to search at Github"
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
);

Search.defaultProps = {
    isDisabled: false
};

Search.propTypes = {
    isDisabled: PropTypes.bool,
    handleSearch: PropTypes.func.isRequired
};

export default Search;
