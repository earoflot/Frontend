import { createSlice } from "@reduxjs/toolkit";

const ffyouresultSlice = createSlice({
  name : "ffyouresult",
  initialState : ["Hello"],
  reducers : {
    addResult : (state,action) => {
      return action.payload;

    }
  }
})

export const ffyouresultActions = ffyouresultSlice.actions;
export default ffyouresultSlice;