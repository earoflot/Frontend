import { createSlice } from "@reduxjs/toolkit";

const ffnumberSlice = createSlice({
  name : "ffnumber",
  initialState: [],
  reducers : {
    doneItems : (state,action) => { 
      console.log(action.payload);
      return action.payload;
    },
    
  }
})

export const ffnumberActions = ffnumberSlice.actions;
export default ffnumberSlice;