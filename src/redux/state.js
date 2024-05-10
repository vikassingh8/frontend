import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  bookmarks: [],
  bookmarkStateChange: false,
  searchTerm: "",
  searchData: [],
};
const todosSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },
    changeBookmarkState: (state, action) => {
      state.bookmarkStateChange = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchedData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const {
  setToken,
  setBookmarks,
  changeBookmarkState,
  setSearchTerm,
  setSearchedData,
} = todosSlice.actions;
export default todosSlice.reducer;
