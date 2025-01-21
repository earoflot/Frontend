import { createSlice } from "@reduxjs/toolkit";

const gamesummarySlice = createSlice({
  name: "gamesummary",
  initialState: [],
  reducers : {
    addItems : (state,action) =>{
      return action.payload;
    },
   
  }
})

export const gamesummaryActions = gamesummarySlice.actions;
export default gamesummarySlice;