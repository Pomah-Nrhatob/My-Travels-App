import { configureStore } from "@reduxjs/toolkit";
import myTravelListReducer from "./slices/myTravelListSlice";

const store = configureStore({
  reducer: {
    myTravelList: myTravelListReducer,
  },
});

export default store;
