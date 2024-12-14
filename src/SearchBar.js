import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a recipe..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
