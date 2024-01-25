import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chaptersOfTravelListSlice = createSlice({
  name: "chapterOfTravelList",
  initialState,
  reducers: {
    addChapter: (state, action) => {
      state.push(action.payload);
    },
    changeChapter: (state, action) => {
      const chapter = state.find((el) => el.id === action.payload.id);
      chapter.title = action.payload.title;
      chapter.text = action.payload.text;
    },
  },
});

export const { addChapter, changeChapter } = chaptersOfTravelListSlice.actions;

export const selectChapters = (state) => state.chaptersOfTravelList;

export default chaptersOfTravelListSlice.reducer;
