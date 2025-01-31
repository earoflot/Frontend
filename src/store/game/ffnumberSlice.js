import { createSlice } from "@reduxjs/toolkit";

const ffnumberSlice = createSlice({
  name : "ffnumber",
  initialState: [],
  reducers : {
    doneItems : (state,action) => { 
     if(action.payload === "Enter your number"){
      return []
     }else if (action.payload === "Thankyou"){
      return []
     }else{
      return action.payload;
     }
      
    },
    
  }
})

export const ffnumberActions = ffnumberSlice.actions;
export default ffnumberSlice;