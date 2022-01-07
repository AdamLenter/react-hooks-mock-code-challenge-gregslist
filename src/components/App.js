import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [termToSearchFor, setTermToSearchFor] = useState("");
  
  function searchListings(){
    setTermToSearchFor(searchTerm);
  }

  function processSearchBar(searchEntry) {
    setSearchTerm(searchEntry)
  }

  return (
    <div className="app">
      <Header searchTerm = {searchTerm} processSearchBar = {processSearchBar} searchListings = {searchListings} />
      <ListingsContainer termToSearchFor = {termToSearchFor} />
    </div>
  );
}

export default App;
