import React, { useEffect, useState } from "react";

import { Movies as Movie, Tv, Play } from "../assets";
import { CiBookmark as BookmarkEmpty } from "react-icons/ci";
import { FaBookmark as BookmarkFull } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import tmdb from "../hooks/tmdb";
import { dateFormat } from "../helpers/helpers";
import { useSelector } from "react-redux";

// TrendingCards Component
function TrendingCards() {
  const navigate = useNavigate();
  const bookmarks = useSelector((state) => state.bookmarks);
  const detail = (id, type) => {
    navigate(`/${type}/${id}`);
  };
  const { loading, trending, addBookmark, removeBookmark } = tmdb();
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    async function getTrending() {
      const data = await trending();
      setTrendingData(data);
      // console.log(data);
    }
    getTrending();
  }, []);

  // Mapping over trending shows to render individual trending cards
  const renderedCards = trendingData?.map((data, index) => {
    const isBookmarked = Boolean(
      bookmarks?.find((bookmark) => bookmark.id == data.id)
    );
    const imgSrc = `https://www.themoviedb.org/t/p/w780${data.poster_path}`;
    const title = data.media_type == "tv" ? data.name : data.title;
    const fomattedDate =
      data.media_type == "tv"
        ? dateFormat(data.first_air_date)
        : dateFormat(data.release_date);

    return (
      <div className="card card--trending" key={index}>
        {isBookmarked ? (
          <>
            {/* Display full bookmark icon for bookmarked shows */}

            <button
              className="btn__bookmark btn__bookmark--show z-50"
              onClick={() => removeBookmark(data.id)}
            >
              <BookmarkFull />
            </button>
          </>
        ) : (
          <>
            {/* Display empty bookmark icon for non-bookmarked shows */}
            <button
              className="btn__bookmark btn__bookmark--show z-50"
              onClick={() => addBookmark(data)}
            >
              <BookmarkEmpty size={20} />
            </button>
          </>
        )}

        {/* Play button for the trending show */}
        <button className="btn btn--play">
          <span className="btn--play__icon btn--play__icon--trending">
            <Play />
            <h4>Play</h4>
          </span>

          {/* Information section for the trending show */}
          <span className="card--trending__info z-40">
            <p>
              {fomattedDate}
              <span className="card__dot"></span>
              {data.media_type == "tv" ? <Tv /> : <Movie />}
              {data.media_type == "tv" ? "Tv" : "Movie"}
              <span className="card__dot"></span>
              {data.original_language.toUpperCase()}
              <span className="card__dot"></span>
              {data.vote_average}
            </p>
            <h3
              className="cursor-pointer text-3xl"
              onClick={() => detail(data.id, data.media_type)}
            >
              {title}
            </h3>
          </span>

          {/* Image for the trending show */}
          <img
            src={imgSrc}
            alt={title}
            className="object-cover duration-1000 hover:scale-110 z-10 opacity-40 absolute h-full w-full inset-0"
            style={{
              color: "transparent",
            }}
          />
        </button>
      </div>
    );
  });

  // JSX structure for rendering TrendingCards component
  return <>{renderedCards}</>;
}

// Export the TrendingCards component
export default TrendingCards;
