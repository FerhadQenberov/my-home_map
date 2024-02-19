import { createSlice } from '@reduxjs/toolkit'

export const roomSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1
      }
    },
  },
})

export const { increment, decrement } = roomSlice.actions

export default roomSlice.reducer
