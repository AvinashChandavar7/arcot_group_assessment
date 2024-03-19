import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AiData, AiDataState } from '../types/AiData';
import { fetchAiData } from '../api/apiService';

const initialState: AiDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  'aiData/fetchAiData',
  async () => {
    const response = await fetchAiData();
    return response;
  }
);

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchData.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<AiData>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(
        fetchData.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload ? action.payload.toString() : 'An error occurred.';
        }
      );
  },
});

export const aiDataActions = aiDataSlice.actions;
export default aiDataSlice.reducer;

