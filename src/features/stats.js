import { createSlice } from '@reduxjs/toolkit';
import { RunningData } from '../data/RunningData';

export const statsSlice = createSlice({
  name: "userStats",
  initialState: { value: new RunningData() },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default statsSlice.reducer;