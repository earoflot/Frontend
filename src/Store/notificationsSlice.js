// External Module............
import { createSlice } from "@reduxjs/toolkit";


// create a shopping home silce store...........
const notificationsSlice = createSlice({
  name: "jobItem",
  initialState: [],
  reducers: {
    addItems : (store,action) => {
      
      return action.payload;
    }
  }
})
// create a shopping home actions payload..................
export const notificationsActions = notificationsSlice.actions;
// export default shopping home slice module...........
export default notificationsSlice;