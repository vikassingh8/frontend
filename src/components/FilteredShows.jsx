import React, { useEffect, useState } from "react";

import ShowCards from "./ShowCards";
import tmdb from "../hooks/tmdb";
import { useSelector } from "react-redux";

// FilteredShows Component
function FilteredShows({ filterType, pageTitle }) {
  const { recommended } = tmdb();
  const [filteredData, setFilteredData] = useState([]);
  const bookmarks = useSelector((state) => state.bookmarks);
  // useEffect(() => {
  //   console.log(bookmarks);
  // }, [bookmarks]);

  useEffect(() => {
    async function geFilteredData() {
      const data = await recommended(pageTitle);
      setFilteredData(data);
      // console.log(data);
    }
    geFilteredData();
  }, [pageTitle]);
  // JSX structure for rendering FilteredShows component
  return (
    <section className="show-grid">
      {/* Dynamic page title based on the prop */}
      <h1 className="text-5xl">{pageTitle}</h1>

      {/* Display shows based on the specified filter type */}
      <div className="show-grid__shows">
        {/* ShowCards component displaying filtered shows */}
        <ShowCards data={filteredData} />
      </div>
    </section>
  );
}

// Export the FilteredShows component
export default FilteredShows;
