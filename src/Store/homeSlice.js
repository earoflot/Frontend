import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: [],
  reducers:{
    addItems: (state,action) => {
      return action.payload;
    }
  }
})

export const homeActions = homeSlice.actions;
export default homeSlice;



