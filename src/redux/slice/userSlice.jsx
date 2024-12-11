import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    globalIsLoading: false,  // Add this to track global loading state
    FoaPartNumberDetail: [],
    FoaPartNumberIsLoading: false,
    foaDataDetail: [],
    foaDataIsLoading: false,
    barCodeDataDetail: [],
    barCodeDataIsLoading: false,
    PyPartNumberDetail: [],
    PyPartNumberIsLoading: false,
    PyDataDetail: [],
    PyDataIsLoading: false,
  },

  reducers: {

    setGlobalLoader: (state, action) => {
      console.log(action.payload, "testloading")
      state.globalIsLoading = action.payload;  // Properly update the loading state
    },

    FoapartNumberReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.FoaPartNumberDetail = apiData;
      state.FoaPartNumberIsLoading = isLoading;
    },

    foaDataReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.foaDataDetail = apiData;
      state.foaDataIsLoading = isLoading;
    },

    barCodeDataReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.barCodeDataDetail = apiData;
      state.barCodeDataIsLoading = isLoading;
    },

    PyPartNumberReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.PyPartNumberDetail = apiData;
      state.PyPartNumberIsLoading = isLoading;
    },

    PyDataReducer: (state, { payload }) => {
      console.log(payload, "payload");
      const { apiData, isLoading } = payload;
      state.PyDataDetail = apiData;
      state.PyDataIsLoading = isLoading;
    },

    logout: (state) => {
      return {
        globalIsLoading: false,
        FoaPartNumberDetail: [],
        FoaPartNumberIsLoading: false,
        foaDataDetail: [],
        foaDataIsLoading: false,
        barCodeDataDetail: [],
        barCodeDataIsLoading: false,
        PyPartNumberDetail: [],
        PyPartNumberIsLoading: false,
        PyDataDetail: [],
        PyDataIsLoading: false,
      };
    },
  },
});

export const { setGlobalLoader, FoapartNumberReducer, foaDataReducer,barCodeDataReducer, PyPartNumberReducer, PyDataReducer, logout } = userSlice.actions;

export const userSelector = (state) => state.user;
export const userReducer = userSlice.reducer;
