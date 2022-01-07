import React from "react";

function Search( { searchTerm, processSearchBar, searchListings }) {
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    searchListings(searchTerm)
  }

  function handleSearchBar(event) {
    processSearchBar(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange = {handleSearchBar}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
