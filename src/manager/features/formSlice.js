import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  district: {
    id: 0,
    lat: 0,
    lng: 0,
  },
  city: {
    id: 0,
    lat: 0,
    lng: 0,
  },
  settlementid: {
    id: 0,
    lat: 0,
    lng: 0,
  },
  cityData: {
    data: [],
  },
}

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,

  reducers: {
    setDistrictId(state, action) {
      state.district.id = action.payload
    },
    setCityId(state, action) {
      state.city.id = action.payload
    },

    setCityData(state, action) {
      const stateKordinat = action.payload?.find(
        (item) => item.id == state.city.id,
      )
      if (stateKordinat) {
    
        state.city.lat = stateKordinat.lat

        state.city.lng = stateKordinat.lng
      }
    },
    setDistrictData(state, action) {
      const districtKordinat = action.payload?.find(
        (item) => item.id == state.district.id,
      )

      if (districtKordinat) {
        state.district.lat = districtKordinat.lat

        state.district.lng = districtKordinat.lng
      }
    },

    settLementId(state, action) {
      state.settlementid.id = action.payload
    },
    settleData(state, action) {
    

      const setKordinat = action.payload?.find(
        (item) => item.id == state.settlementid.id,
      )

      if (setKordinat) {
      
        
        state.settlementid.lat = setKordinat.lat

        state.settlementid.lng = setKordinat.lng
      }
    },
  },
})
export const {
  setCityId,
  setDistrictId,
  setCityData,
  setDistrictData,
  settleData,
  settLementId,
} = formSlice.actions
export const selectAllCity = (state) => state.formSlice.city.id
export const selectAllStatus = (state) => state.formSlice.city.status
export const selectAllDistrict = (state) => state.formSlice.district.id

export const cityLat = (state) => state.formSlice.city.lat
export const cityLng = (state) => state.formSlice.city.lng

export const districtLat = (state) => state.formSlice.district.lat
export const districtLng = (state) => state.formSlice.district.lng

export const allSetlat = (state) => state.formSlice.settlementid.lat
export const allSetlng = (state) => state.formSlice.settlementid.lng
export default formSlice.reducer
