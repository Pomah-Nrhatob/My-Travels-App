import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myTravelListSlice = createSlice({
  name: "myTravelList",
  initialState,
  reducers: {
    addTravel: (state, action) => {
      state.push(action.payload);
    },
    changeTravel: (state, action) => {
      const travel = state.find((el) => el.id === action.payload.id);
      travel.title = action.payload.title;
    },
  },
});

export const { addTravel, changeTravel } = myTravelListSlice.actions;

export const selectTravelList = (state) => state.myTravelList;

export default myTravelListSlice.reducer;
