import React from "react";

import Trending from "./Trending";
import Recommended from "./Recommended";

// Home Component
function Home() {
  // JSX structure for rendering Home component
  return (
    <section className="layout__home">
      {/* Component displaying trending shows */}
      <Trending />

      {/* Component displaying recommended shows */}
      <Recommended />
    </section>
  );
}

// Export the Home component
export default Home;
