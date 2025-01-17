// External Module
import {configureStore, createSlice} from "@reduxjs/toolkit"
// Local Module
import modalSlice from "./modal"
import shoppinghomeSlice from "./shoppinghomeSlice";
import fetchStatus from "./fetchStatus";
import shoppingbagSlice from "./shoppingbagSlice";
//...............................

// Store Configure............
const store = configureStore({reducer:{
  // Import local slice module in modaljs.........
  // fetching backend 
  fetchStatus: fetchStatus.reducer,
  modal: modalSlice.reducer,

  shopping: shoppinghomeSlice.reducer,
  
  shoppingbagSlice: shoppingbagSlice.reducer, 


}});

// Export default store in @reduxjs.............
export default store;
