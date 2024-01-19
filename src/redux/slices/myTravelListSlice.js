import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myTravelListSlice = createSlice({
  name: "myTravelList",
  initialState,
  reducers: {
    addTravel: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTravel } = myTravelListSlice.actions;

export const selectTravelList = (state) => state.myTravelList;

export default myTravelListSlice.reducer;
