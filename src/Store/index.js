// External Module
import {configureStore, createSlice} from "@reduxjs/toolkit"
// Local Module
import modalSlice from "./modal"
import shoppingItems from "./shoppingItems";
import fetchStatus from "./fetchStatus";
import bagItems from "./bagItems";
//...............................

// Store Configure............
const store = configureStore({reducer:{
  // Import local slice module in modaljs.........
  modal: modalSlice.reducer,
  shopping: shoppingItems.reducer,
  fetchStatus: fetchStatus.reducer,
  bagItems: bagItems.reducer, 


}});

// Export default store in @reduxjs.............
export default store;
