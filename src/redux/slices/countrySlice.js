import { createSlice } from '@reduxjs/toolkit'
import { dataCountry } from '../../03-organisms/data/datasCountry'
import { createCountryWithId } from '../../utils/createCountryWithId'

const initialState = createCountryWithId(dataCountry)

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    toggleFavoriteCountry: (state, action) => {
      return state.map((el) =>
        el.id === action.payload ? { ...el, choose: !el.choose } : el
      )
    },
    cleanFavoriteCountry: (state) => {
      return (state = initialState)
    },
  },
})

export const { toggleFavoriteCountry, cleanFavoriteCountry } =
  countrySlice.actions

export const selectCountry = (state) => state.country

export default countrySlice.reducer
