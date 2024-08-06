import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    // partNumberDetail: [],
    // partNumberIsLoading: false,
   
  },
  reducers: {
    // partNumberReducer: (state, { payload }) => {
    //   const { apiData, isLoading } = payload;
    //   state.partNumberDetail = apiData;
    //   state.partNumberIsLoading = isLoading;
    // },
   
    // getSubAdminReducer: (state, { payload }) => {
    //   const { apiData, isLoading } = payload;
    //   state.getallSubAdminDetail = apiData;
    //   state.adminDataLoading = isLoading;
    // },

    // editSubAdminReducer: (state, { payload }) => {
    //   const { apiData, isLoading } = payload;
    //   state.subAdminDetail = apiData;
    //   state.adminDataLoading = isLoading;
    // },
  },
});

// export const { partNumberReducer } = adminSlice.actions;

export const authSelector = (state) => state.auth;
export const authReducer = authSlice.reducer;
