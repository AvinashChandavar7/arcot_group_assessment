import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../features/themeSlice.ts";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
