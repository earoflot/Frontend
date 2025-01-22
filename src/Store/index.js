// External Module
import {configureStore} from "@reduxjs/toolkit"
// Local Module
import modalSlice from "./modalSlice"
import shoppinghomeSlice from "./shoppinghomeSlice";
import fetchStatus from "./fetchStatus";
import shoppingbagSlice from "./shoppingbagSlice";
import jobSlice from "./jobSlice";
import homeSlice from "./homeSlice";
import notificationsSlice from "./notificationsSlice";
import currentnotifsSlice from "./currentnotifsSlice";

// Import FF game local module import ...............
import ffgameSlice from "./ffgameSlice";
import ffsummarySlice from "./ffsummarySlice";
import ffamountSlice from "./ffamountSlice";
import walletSlice from "./walletSlice";

//...............................

// Store Configure............
const store = configureStore({reducer:{
  // Import local slice module in modaljs.........
  // fetching backend 
  fetchStatus: fetchStatus.reducer,
  
  homeSlice: homeSlice.reducer,
  
 
  
  currentnotifsSlice: currentnotifsSlice.reducer,


  shoppinghomeSlice: shoppinghomeSlice.reducer,
  
  shoppingbagSlice: shoppingbagSlice.reducer,
  
  walletSlice : walletSlice.reducer,

  
  jobSlice: jobSlice.reducer,

  notificationsSlice: notificationsSlice.reducer,

  ffgameSlice: ffgameSlice.reducer,
  
  ffsummarySlice: ffsummarySlice.reducer,
  
  ffamountSlice: ffamountSlice.reducer,




}});

// Export default store in @reduxjs.............
export default store;
