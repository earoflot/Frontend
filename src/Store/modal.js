// Import External Module.........
import {configureStore, createSlice} from "@reduxjs/toolkit"

// Create a modalslice in @reduxjs/toolkit.........
const modalSlice = createSlice({
  name: 'Modal',
  initialState: { modalValue:"Enquary Now"},
  reducers: {

  },
});

// Name export modalActions in local module............
export const modalActions = modalSlice.actions;
// Default export modalSlice in local module.........
export default modalSlice;