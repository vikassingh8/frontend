import React from "react";

import { Movies as Movie, Tv, Play } from "../assets";
import { CiBookmark as BookmarkEmpty } from "react-icons/ci";
import { FaBookmark as BookmarkFull } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { dateFormat } from "../helpers/helpers";
import tmdb from "../hooks/tmdb";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

// ShowCards Component
function ShowCards({ data }) {
  const navigate = useNavigate();
  const bookmarks = useSelector((state) => state.bookmarks);
  const detail = (id, type) => {
    if (!type) {
      return toast.error("Sorry, detail not provided by TMDB.");
    }
    navigate(`/${type}/${id}`);
  };
  const { addBookmark, removeBookmark } = tmdb();

  const renderedCards = data?.map((data, index) => {
    // console.log(data);
    const isBookmarked = Boolean(
      bookmarks?.find((bookmark) => bookmark.id == data.id)
    );
    const imgSrc = `https://www.themoviedb.org/t/p/w780${data.poster_path}`;
    const title = data.media_type == "tv" ? data.name : data.title;
    const fomattedDate =
      data.media_type == "tv"
        ? dateFormat(data.first_air_date)
        : data.media_type == "movie"
        ? dateFormat(data.release_date)
        : "2024-01-01";

    return (
      <div className="card card--show" key={index}>
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

        {/* Play button for the show */}
        <button className="btn btn--play">
          <span className="btn--play__icon btn--play__icon--show">
            <Play />
            <h4>Play</h4>
          </span>
          <img
            src={imgSrc}
            alt={title}
            className="object-cover duration-1000 hover:scale-110 z-10"
          />
        </button>

        {/* Show information section */}
        <div className="card--show__info z-40">
          <p className="font-small pt-4">
            {fomattedDate}
            <span className="card__dot"></span>
            {data.media_type == "tv" ? <Tv /> : <Movie />}
            {data.media_type == "tv" ? "Tv" : "Movie"}
            <span className="card__dot"></span>
            {data.original_language?.toUpperCase()}
            <span className="card__dot"></span>
            {data.vote_average}
          </p>
          <h4
            className="cursor-pointer text-3xl mt-3"
            onClick={() => detail(data.id, data.media_type)}
          >
            {title}
          </h4>
        </div>
      </div>
    );
  });

  // JSX structure for rendering ShowCards component
  return <>{renderedCards}</>;
}

// Export the ShowCards component
export default ShowCards;
