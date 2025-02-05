import { createSlice } from "@reduxjs/toolkit";

const ffamountSlice = createSlice({
  name : "ffamount",
  initialState: [],
  reducers : {
    addItems : (state,action) => {
      return action.payload;

    }
  }
})

export const ffamountActions = ffamountSlice.actions;
export default ffamountSlice;