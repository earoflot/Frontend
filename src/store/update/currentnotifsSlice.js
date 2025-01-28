import { createSlice} from "@reduxjs/toolkit";

const currentnotifsSlice = createSlice({
  name: "crrentNotification",
  initialState: [],
  reducers: {
    addItems : (state,action ) => {
      
      return action.payload;
    }
  }
})

export const currentnotifsActions = currentnotifsSlice.actions;
export default currentnotifsSlice;