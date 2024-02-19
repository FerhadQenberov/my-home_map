import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/roomSlice'
import floorCounter from '../features/floorSlice'
import formReducer from '../features/formSlice'
import allStateReducer from '../features/allState'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterFloor:floorCounter,
    formSlice:formReducer,
    allState:allStateReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
export const { useFetchTagsQuery } = apiSlice
export default store
