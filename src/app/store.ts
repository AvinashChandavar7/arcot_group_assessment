import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../features/themeSlice.ts";
import aiDataReducer from "../features/aiDataSlice.ts";


export const store = configureStore({
  reducer: {
    aiData: aiDataReducer,
    theme: themeReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
