import React, { useEffect, useState } from "react";

import ShowCards from "./ShowCards";
import tmdb from "../hooks/tmdb";

// Recommended Component
function Recommended() {
  const { recommended } = tmdb();
  const [recommendedData, setRecommendedData] = useState([]);
  useEffect(() => {
    async function geRecommended() {
      const data = await recommended(""); // "" means all
      setRecommendedData(data);
      // console.log(data);
    }
    geRecommended();
  }, []);
  // JSX structure for rendering Recommended component
  return (
    <section className="show-grid">
      {/* Title for the Recommended section */}
      <h1 className="text-5xl">Recommended for you</h1>

      {/* Display shows based on the data from the Redux store */}
      <div className="show-grid__shows">
        {/* ShowCards component displaying recommended shows */}
        <ShowCards data={recommendedData} />
      </div>
    </section>
  );
}

// Export the Recommended component
export default Recommended;
