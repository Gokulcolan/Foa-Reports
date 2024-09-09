import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    partNumberDetail: [],
    partNumberIsLoading: false,
    foaDataDetail: [],
    foaDataIsLoading: false,
    globalIsLoading: false,  // Add this to track global loading state
  },

  reducers: {

    setGlobalLoader: (state, action) => {
      console.log(action.payload,"testloading")
      state.globalIsLoading = action.payload;  // Properly update the loading state
    },

    partNumberReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.partNumberDetail = apiData;
      state.partNumberIsLoading = isLoading;
    },

    foaDataReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.foaDataDetail = apiData;
      state.foaDataIsLoading = isLoading;
    },
  },
});

export const { partNumberReducer,foaDataReducer,setGlobalLoader } = userSlice.actions;

export const userSelector = (state) => state.user;
export const userReducer = userSlice.reducer;
