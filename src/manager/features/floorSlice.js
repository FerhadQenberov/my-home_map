import { createSlice } from '@reduxjs/toolkit';

export const floorSlice = createSlice({
  name: 'counterFloor',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1
      }
    },
  },
})

export const { increment, decrement } = floorSlice.actions
export const selectFloor = (state) => state.counterFloor.value;

export default floorSlice.reducer
