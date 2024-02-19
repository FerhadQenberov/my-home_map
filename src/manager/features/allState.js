import { createSlice } from '@reduxjs/toolkit'

export const allState = createSlice({
  name: 'allState',
  initialState: {
    data: {
      announcement_type: null, // ELAN TIPI +
      rental_type: null, //kinler ucundur xanim beyler hami  +
      property_type: null, //emlakin tipi +

      apartment_type: null, // bina novu yenintikili kohne tikli +
      is_repaired: null, //,
      room_count: null, // otaq sayi +
      floor: null, //+

      city: null, // +
      region: null, // resgion rayon +
      house_area: null, //evin sahesi +
      village: null, //qesebe menteqe +
      area: null, //  heyetyani sahe yoxdur,

      document: null, // + // evin senedi
      address: null, // +
      price: null, // + evin qiymeti
      description: null, // + ev haqqinda
      img: [],
    },
    
  },

  reducers: {
    announcementTypes(state, action) {
      state.data.announcement_type = action.payload

    },
    villageArea(state, action) {
      state.data.area = action.payload
    },
    rentalTypes(state, action) {
      state.data.rental_type = action.payload
    },
    propertyType(state, action) {
      state.data.property_type = action.payload
    },
    apartmentTypes(state, action) {
      state.data.apartment_type = action.payload
    },
    repeairTypes(state, action) {
      state.data.is_repaired = action.payload
    },
    houesarea(state, action) {
      state.data.house_area = action.payload
    },
    roomCount(state, action) {
      state.data.room_count = action.payload
    },
    floor(state, action) {
      state.data.floor = action.payload
    },
    homeDocument(state, action) {
      state.data.document = action.payload
    },
    cities(state, action) {
      state.data.city = action.payload
    },
    region(state, action) {
      state.data.region = action.payload
    },
    villages(state, action) {
      state.data.village = action.payload
    },
    addres(state, action) {
      state.data.address = action.payload
     
    },
    price(state, action) {
      state.data.price = action.payload
   
    },
    homeAbout(state, action) {
      state.data.description = action.payload
    },
    img(state, action) {
      const { img } = state.data
      const isImageExist = img.includes(action.payload)

      if (!isImageExist) {
        state.data.img = [...img, action.payload]
      }
   
    },
  },
})
export const {
  announcementTypes,
  rentalTypes,
  propertyType,
  apartmentTypes,
  repeairTypes,
  houesarea,
  roomCount,
  villageArea,
  floor,
  homeDocument,
  cities,
  region,
  villages,
  addres,
  price,
  homeAbout,
  img,
} = allState.actions
export const selectAllData = (state) => state.allState.data

export default allState.reducer
