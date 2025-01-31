import { createSlice } from "@reduxjs/toolkit";


const gameSlice = createSlice({
   
  name: "game",
  initialState: [],
  reducers : {
    addItems : (state,action) =>{
      
     return action.payload;
    },
    clearItems : (state,action) =>{
      return []
    },
  }
})

export const ffgameActions = gameSlice.actions;
export default gameSlice ;