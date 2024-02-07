import { configureStore } from '@reduxjs/toolkit'
import myTravelListReducer from './slices/myTravelListSlice'
import chaptersOfTravelListSlice from './slices/chaptersOfTravelListSlice'
import countrySlice from './slices/countrySlice'

const store = configureStore({
  reducer: {
    myTravelList: myTravelListReducer,
    chaptersOfTravelList: chaptersOfTravelListSlice,
    country: countrySlice,
  },
})

export default store
