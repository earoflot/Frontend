import {createSlice} from "@reduxjs/toolkit";

const bagItems = createSlice({
  name: 'bag',
  initialState: ['001','002','003'],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  }
});

export const bagActions = bagItems.actions;

export default bagItems;