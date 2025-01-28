// External Module
import {configureStore} from "@reduxjs/toolkit"
// Local Module
import modalSlice from "./model/modalSlice"
import shoppinghomeSlice from "./shopping/shoppinghomeSlice";
import fetchStatus from "./it/fetchStatus";
import shoppingbagSlice from "./shopping/shoppingbagSlice";
import jobSlice from "./job/jobSlice";
import homeSlice from "./home/homeSlice";
import notificationsSlice from "./update/notificationsSlice";
import currentnotifsSlice from "./update/currentnotifsSlice";

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
