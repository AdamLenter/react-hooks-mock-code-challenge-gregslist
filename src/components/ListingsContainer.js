import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {termToSearchFor} ) {
  const [listings, setListings] = useState([])
  const [listingsLoaded, setListingsLoaded] = useState(false);

  useEffect(()=> {
      fetch("http://localhost:6001/listings")
        .then((result) => result.json()) 
        .then((data)=>setListings(data))
        .then(()=>setListingsLoaded(true))
    }
  , [])

  function deleteListing(listingID) {
    const updatedListings = listings.filter((listing) => listing.id !== listingID);
    setListings(updatedListings);

    fetch(`http://localhost:6001/listings/${listingID}`, {
      method: "DELETE"}
      )
    }
  
  const displayedListings = termToSearchFor === "" ? [...listings] : listings.filter((listing) => listing.description.toUpperCase().includes(termToSearchFor.toUpperCase()))
  
  if(listingsLoaded) {
    return (
      <main>
        <ul className="cards">
          {displayedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} deleteListing = {deleteListing} />
          ))}
        </ul>
      </main>
    );
  }
  else {
    return (
      <main>
          <p>Waiting for listings...</p>
        </main>
    )
  }
}

export default ListingsContainer;
