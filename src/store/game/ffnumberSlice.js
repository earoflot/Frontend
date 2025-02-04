import { createSlice } from "@reduxjs/toolkit";

const ffnumberSlice = createSlice({
  name : "ffnumber",
  initialState: [],
  reducers : {
    addItems : (state,action) => { 
      return action.payload;
    },
    
  }
})

export const ffnumberActions = ffnumberSlice.actions;
export default ffnumberSlice;