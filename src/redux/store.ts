import { configureStore } from "@reduxjs/toolkit";
import tthemeReducer from "./reducers/theme";
import ttt from "./reducers/btn";

export const store = configureStore({
  reducer: {
    theme: tthemeReducer,
    btn: ttt,
  },
});

store.subscribe(() => {
  localStorage["reduxx"] = JSON.stringify(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
