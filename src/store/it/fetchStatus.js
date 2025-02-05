import {createSlice} from "@reduxjs/toolkit";

const fetchStatus = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  }
});

export const fetchStatusActions = fetchStatus.actions;

export default fetchStatus;