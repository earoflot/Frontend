import { createSlice } from "@reduxjs/toolkit";



const shoppingItems = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems : (store,action) => {
      
      return action.payload;
    }
  }
})

export const shoppingActions = shoppingItems.actions;

export default shoppingItems;