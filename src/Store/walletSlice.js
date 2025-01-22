// External Module............
import {createSlice} from "@reduxjs/toolkit";
// create a shopping bag slice on createSlice external module.............
const walletSlice = createSlice({
  name: 'wallet',
  initialState: ["3"],
  // create a reducers on action ..........
  reducers: {
    addToWallet: (state, action) => {
      
    },
    removeFromWallet: (state, action) => {
      
    },
  }
});
// export const shopping bag action payload...........
export const walletActions = walletSlice.actions;
// export shoping bag slice module...................
export default walletSlice;