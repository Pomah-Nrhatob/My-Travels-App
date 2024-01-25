import { configureStore } from "@reduxjs/toolkit";
import myTravelListReducer from "./slices/myTravelListSlice";
import chaptersOfTravelListSlice from "./slices/chaptersOfTravelListSlice";

const store = configureStore({
  reducer: {
    myTravelList: myTravelListReducer,
    chaptersOfTravelList: chaptersOfTravelListSlice,
  },
});

export default store;
