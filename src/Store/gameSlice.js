import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: [],
  reducers : {
    addItems : (state,action) =>{
      console.log(action.payload)
      return action.payload;
    }
  }
})

export const gameActions = gameSlice.actions;
export default gameSlice;