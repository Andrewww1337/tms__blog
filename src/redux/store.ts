import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";
import btnReducer from "./reducers/btn";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    btn: btnReducer,
  },
});

store.subscribe(() => {
  localStorage["reduxx"] = JSON.stringify(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
