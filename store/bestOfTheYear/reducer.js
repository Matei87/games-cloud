import { createSlice } from '@reduxjs/toolkit';
import { platforms } from '@/components/shared/platforms';

const initialState = {
  page: 1,
  size: 1,
  platforms: platforms,
};

const bestOfTheYearSlice = createSlice({
  name: 'bestOfYear',
  initialState,
  reducers: {
    setPagination(state, { payload }) {
      state.page = payload.page ?? 1;
      state.size = payload.size;
    },
    clearState() {
      return { ...initialState };
    },
  },
  extraReducers: () => {},
});

export const { setPagination, clearState } = bestOfTheYearSlice.actions;
export default bestOfTheYearSlice.reducer;
