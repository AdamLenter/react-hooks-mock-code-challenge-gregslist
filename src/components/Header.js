import React from "react";
import Search from "./Search";

function Header({searchTerm, processSearchBar, searchListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm = {searchTerm} processSearchBar = {processSearchBar} searchListings = {searchListings}/>
    </header>
  );
}

export default Header;
