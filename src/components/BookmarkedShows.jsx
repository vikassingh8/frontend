import React, { useEffect } from "react";

import ShowCards from "./ShowCards";
import tmdb from "../hooks/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarks } from "../redux/state";

// BookmarkedShows Component
function BookmarkedShows() {
  const { getBookmarked } = tmdb();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  useEffect(() => {
    async function getBookmaredData() {
      const data = await getBookmarked();
      // console.log(data);
      const filteredData = data?.map((d) => d.bookmark);
      dispatch(setBookmarks(filteredData));
    }
    getBookmaredData();
  }, []);
  // JSX structure for rendering BookmarkedShows component
  return (
    <section className="show-grid">
      {/* Header for BookmarkedShows */}
      <h1 className="text-5xl">Bookmarks</h1>

      {/* Display shows if the user is logged in */}

      <div className="show-grid__shows">
        {/* ShowCards component displaying bookmarked shows */}
        <ShowCards data={bookmarks} />
      </div>

      {/* Display login prompt if the user is not logged in */}
      <div className="show-grid__shows" style={{ display: "none" }}>
        <div className="account__footer">
          <p>
            {/* Login link for users without an account */}
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// Export the BookmarkedShows component
export default BookmarkedShows;
