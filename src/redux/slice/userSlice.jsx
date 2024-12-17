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
    PaPartNumberDetail: [],
    PaPartNumberIsLoading: false,
    PaDataDetail: [],
    PaDataIsLoading: false,
    DaPartNumberDetail: [],
    DaPartNumberIsLoading: false,
    DaDataDetail: [],
    DaDataIsLoading: false,
    SaPartNumberDetail: [],
    SaPartNumberIsLoading: false,
    SaDataDetail: [],
    SaDataIsLoading: false,
  },

  reducers: {

    setGlobalLoader: (state, action) => {
      state.globalIsLoading = action.payload;  // Properly update the loading state
    },

    FoapartNumberReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.FoaPartNumberDetail = apiData;
      state.FoaPartNumberIsLoading = isLoading;
    },

    foaDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.foaDataDetail = apiData;
      state.foaDataIsLoading = isLoading;
    },

    barCodeDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.barCodeDataDetail = apiData;
      state.barCodeDataIsLoading = isLoading;
    },

    PyPartNumberReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.PyPartNumberDetail = apiData;
      state.PyPartNumberIsLoading = isLoading;
    },

    PyDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.PyDataDetail = apiData;
      state.PyDataIsLoading = isLoading;
    },
    PaPartNumberReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.PaPartNumberDetail = apiData;
      state.PaPartNumberIsLoading = isLoading;
    },

    PaDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.PaDataDetail = apiData;
      state.PaDataIsLoading = isLoading;
    },

    DaPartNumberReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.DaPartNumberDetail = apiData;
      state.DaPartNumberIsLoading = isLoading;
    },

    DaDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.DaDataDetail = apiData;
      state.DaDataIsLoading = isLoading;
    },
    SaPartNumberReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.SaPartNumberDetail = apiData;
      state.SaPartNumberIsLoading = isLoading;
    },

    SaDataReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.SaDataDetail = apiData;
      state.SaDataIsLoading = isLoading;
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
        PaPartNumberDetail: [],
        PaPartNumberIsLoading: false,
        PaDataDetail: [],
        PaDataIsLoading: false,
        DaPartNumberDetail: [],
        DaPartNumberIsLoading: false,
        DaDataDetail: [],
        DaDataIsLoading: false,
        SaPartNumberDetail: [],
        SaPartNumberIsLoading: false,
        SaDataDetail: [],
        SaDataIsLoading: false,
      };
    },
  },
});

export const { setGlobalLoader, FoapartNumberReducer, foaDataReducer, barCodeDataReducer, PyPartNumberReducer, PyDataReducer, PaPartNumberReducer, PaDataReducer, DaPartNumberReducer, DaDataReducer,SaPartNumberReducer, SaDataReducer, logout } = userSlice.actions;

export const userSelector = (state) => state.user;
export const userReducer = userSlice.reducer;
