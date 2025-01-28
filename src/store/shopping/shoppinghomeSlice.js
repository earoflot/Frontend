// External Module............
import { createSlice } from "@reduxjs/toolkit";


// create a shopping home silce store...........
const shoppinghomeSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems : (store,action) => {
      
      return action.payload;
    }
  }
})

// create a shopping home actions payload..................
export const shoppinghomeActions = shoppinghomeSlice.actions;
// export default shopping home slice module...........
export default shoppinghomeSlice;