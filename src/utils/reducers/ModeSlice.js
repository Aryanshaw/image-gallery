import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = modeSlice.actions;
export const darkModeSelector =(state)=> state.mode.isDarkMode
export default modeSlice.reducer;
