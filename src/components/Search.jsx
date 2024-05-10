import React, { useEffect, useState } from "react";

import { SearchButton } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedData, setSearchTerm } from "../redux/state";
import { useNavigate } from "react-router-dom";
import tmdb from "../hooks/tmdb";

// Search Component
function Search() {
  // JSX structure for rendering Search component
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = tmdb();

  const handleChange = (e) => {
    const { value } = e.target;
    if (value) {
      navigate(`/search/${value}`);
    } else {
      navigate("/");
    }
    dispatch(setSearchTerm(value));
  };
  useEffect(() => {
    const getData = setTimeout(() => {
      async function searchFun() {
        const data = await search(searchTerm);
        dispatch(setSearchedData(data));
      }
      searchFun();
    }, 500);
    return () => clearTimeout(getData);
  }, [searchTerm]);

  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      {/* Search button */}
      <button className="btn__search" title="Search">
        <SearchButton />
      </button>

      {/* Input field for entering search term */}
      <input
        className="input input__search heading-medium"
        type="text"
        placeholder="Search for movies or TV series"
        value={searchTerm}
        onChange={handleChange}
      ></input>
    </form>
  );
}

// Export the Search component
export default Search;
