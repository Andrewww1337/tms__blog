import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BtnState {
  value: string;
}

const initialStat2e: BtnState = {
  value: JSON.parse(localStorage["reduxx"]).btn.value,
};

export const btnSlice = createSlice({
  name: "btn",
  initialState: initialStat2e,
  reducers: {
    setBtn: (state, action: { payload: { newBtn: string } }) => {
      const { newBtn } = action.payload;
      const newStateBtn = { ...state };
      newStateBtn.value = newBtn;

      return newStateBtn;
    },
  },
});

export const { setBtn } = btnSlice.actions;
export default btnSlice.reducer;
