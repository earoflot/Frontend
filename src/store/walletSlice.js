// External Module............
import {createSlice} from "@reduxjs/toolkit";
// create a shopping bag slice on createSlice external module.............
const walletSlice = createSlice({
  name: 'wallet',
  initialState: [10000],
  // create a reducers on action ..........
  reducers: {
    addToWallet: (state, action) => {
     
    },
    orderTo: (state, action) => {
      if (state >=action.payload){
        return state - action.payload;
      }else{
        return [0]
      } 
    },
  }
});
// export const shopping bag action payload...........
export const walletActions = walletSlice.actions;
// export shoping bag slice module...................
export default walletSlice;