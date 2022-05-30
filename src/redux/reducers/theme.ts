import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialStat1e: ThemeState = {
  value: "dark", //JSON.parse(localStorage["reduxx"]).theme.value,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialStat1e,
  reducers: {
    setTheme: (state, action: { payload: { newTheme: string } }) => {
      const { newTheme } = action.payload;
      const newState = { ...state };
      newState.value = newTheme;

      return newState;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
