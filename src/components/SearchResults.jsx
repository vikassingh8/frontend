import React from "react";
import { useSelector } from "react-redux";

import ShowCards from "./ShowCards";

// SearchResults Component
function SearchResults() {
  // Retrieve data and search term from the Redux store
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchData = useSelector((state) => state.searchData);
  // JSX structure for rendering SearchResults component
  return (
    <section className="show-grid">
      {/* Display search term in the heading */}
      <h1 className="text-5xl">{`Results for '${searchTerm}'`}</h1>

      {/* Display shows based on the data from the Redux store */}
      <div className="show-grid__shows">
        {/* ShowCards component displaying search results */}
        <ShowCards data={searchData} />
      </div>
    </section>
  );
}

// Export the SearchResults component
export default SearchResults;
