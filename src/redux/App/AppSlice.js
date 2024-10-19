import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    item: {
      bmi: 0
    }
  },
  reducers: {
    calculateBmi: (state, action) => {
      const { kilo, boy } = action.payload;
      const bmi = kilo / (boy * boy);
      state.item.bmi = bmi.toFixed(2);
    }
  }
});

export const { calculateBmi } = AppSlice.actions;

export default AppSlice.reducer;
