// External Module............
import {createSlice} from "@reduxjs/toolkit";
// create a shopping bag slice on createSlice external module.............
const shoppingbagSlice = createSlice({
  name: 'bag',
  initialState: [],
  // create a reducers on action ..........
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  }
});
// export const shopping bag action payload...........
export const shoppingbagActions = shoppingbagSlice.actions;
// export shoping bag slice module...................
export default shoppingbagSlice;