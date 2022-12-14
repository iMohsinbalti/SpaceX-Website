import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  urlName: " Moh",
  navbar: false,
};

const menuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    openMenu: (state, actions) => {
      state.isOpen = !state.isOpen;
      console.log("open Modal");
    },
    closeMenu: (state, actions) => {
      state.isOpen = false;
    },
    changeName: (state, actions) => {
      state.urlName = actions.payload;
    },
    hideNav: (state, actions) => {
      state.navbar = actions.payload;
    },
  },
});

export const { openMenu, closeMenu, changeName, hideNav } = menuSlice.actions;

export default menuSlice.reducer;
