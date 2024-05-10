import axios from "axios";
import React, { useState } from "react";
import config from "../config/config";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { changeBookmarkState, setBookmarks } from "../redux/state";

const tmdb = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token);
  const bookmarkStateChange = useSelector((state) => state.bookmarkStateChange);
  const dispatch = useDispatch();
  const trending = async () => {
    const all = "https://api.themoviedb.org/3/trending/all/day";
    try {
      setLoading(true);
      const { data } = await axios.get(all, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${config.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      setLoading(false);
      // console.log("res", data.results);
      return data.results;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  async function getBookmaredData() {
    const data = await getBookmarked();
    // console.log(data);
    const filteredData = data?.map((d) => d.bookmark);
    dispatch(setBookmarks(filteredData));
  }
  // getBookmaredData();
  const recommended = async (type) => {
    getBookmaredData();
    const all = `https://api.themoviedb.org/3/trending/${
      type == "Tv"
        ? "tv/day?page=4"
        : type == "Movies"
        ? "movie/day?page=3"
        : "all/day?page=2"
    }`;
    try {
      setLoading(true);
      const { data } = await axios.get(all, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${config.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      setLoading(false);
      // console.log("res", data.results);
      return data.results;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const addBookmark = async (bookmark) => {
    if (!token) {
      toast.dismiss();
      toast.error("Please login first before bookmark");
      return false;
    }
    try {
      const addBookmarkUrl = `${config.VITE_API_URL}/api/bookmark/add`;
      const { data } = await axios.post(
        addBookmarkUrl,
        { bookmark },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status) {
        toast.dismiss();
        toast.success(data.message);
        // getBookmarked();
        // dispatch(changeBookmarkState(!bookmarkStateChange));
        getBookmaredData();
      } else {
        toast.dismiss();
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeBookmark = async (bookmarkId) => {
    if (!token) {
      toast.dismiss();
      toast.error("Please login first before bookmark");
      return false;
    }
    try {
      const addBookmarkUrl = `${config.VITE_API_URL}/api/bookmark/remove`;
      const { data } = await axios.post(
        addBookmarkUrl,
        { bookmarkId },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status) {
        toast.dismiss();
        toast.success(data.message);
        // return data.data;
        const filteredData = data?.data?.map((d) => d.bookmark);
        dispatch(setBookmarks(filteredData));
        // dispatch(changeBookmarkState());
        // getBookmarked();
        getBookmaredData();
      } else {
        toast.dismiss();
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getBookmarked = async () => {
    if (!token) return [];
    try {
      const getBookmarksUrl = `${config.VITE_API_URL}/api/bookmark`;
      const { data } = await axios.get(getBookmarksUrl, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status) {
        // toast.dismiss();
        // toast.success(data.message);
        return data.data;
      } else {
        // toast.dismiss();
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      // toast.dismiss();
      // toast.error(error.response?.data?.message);
    }
  };

  const search = async (params) => {
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.VITE_TMDB_API_KEY}&query=${params}&page=1`;
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${config.VITE_TMDB_API_KEY}&query=${params}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${config.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      return data.results;
    } catch (error) {
      console.log(error);
    }
  };
  const detail = async (id, type) => {
    const detailUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${config.VITE_TMDB_API_KEY}`;
    try {
      const { data } = await axios.get(detailUrl, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${config.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    trending,
    loading,
    recommended,
    addBookmark,
    getBookmarked,
    removeBookmark,
    search,
    detail,
  };
};

export default tmdb;
