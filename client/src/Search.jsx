import React, { useState } from 'react';


const Search = ({ search }) => {
  const [handle, setHandle] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(handle);
  };
  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <div className="wrap">
        <h1>Search a Twitter handle to generate a personality profile</h1>
        <div className="search">
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="searchTerm"
            placeholder="Search for a handle..."
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
