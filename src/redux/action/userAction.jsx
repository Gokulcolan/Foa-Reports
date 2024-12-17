// redux/actions/userActions.js
import { Apiservice } from "../api/Apiservice";
import { barCodeDataReducer, DaDataReducer, DaPartNumberReducer, foaDataReducer, FoapartNumberReducer, PaDataReducer, PaPartNumberReducer, PyDataReducer, PyPartNumberReducer, SaDataReducer, SaPartNumberReducer, setGlobalLoader } from "../slice/userSlice";

// let loadingCounter = 0;
// console.log(loadingCounter, "loadingCounter")

// export function apiHelper(apiReducer, method, apiURL, data = "") {
//   return async (dispatch) => {
//     if (loadingCounter === 0) dispatch(setGlobalLoader(true));
//     loadingCounter++;

//     dispatch(apiReducer({ isLoading: true }));
//     Apiservice(method, apiURL, data)
//       .then((e) => {
//         dispatch(apiReducer({ apiData: e?.data, isLoading: false }));
//         loadingCounter--;
//         if (loadingCounter === 0) dispatch(setGlobalLoader(false));
//       })
//       .catch((e) => {
//         dispatch(apiReducer({ isLoading: false }));
//         loadingCounter--;
//         if (loadingCounter === 0) dispatch(setGlobalLoader(false));
//       });
//   };
// } 

export function apiHelper(apiReducer, method, apiURL, data = "", Toastmessage = "", giveToast = true) {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    Apiservice(method, apiURL, data)
      .then((e) => {
        dispatch(apiReducer({ apiData: e?.data, isLoading: false }));

      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));

      });
  };
}

export function FoapartNumberApi(payload) {
  return apiHelper(FoapartNumberReducer, "POST", "/get_foa_varieties", payload);
}

export function foaDataApi(payload) {
  return apiHelper(foaDataReducer, "POST", "/get_foa_data", payload);
}

export function barCodeDataApi(payload) {
  return apiHelper(barCodeDataReducer, "POST", "/get_foa_bar_data", payload);
}

export function PyPartNumberApi(payload) {
  return apiHelper(PyPartNumberReducer, "POST", "/get_py_varieties", payload);
}

export function PyDataApi(payload) {
  return apiHelper(PyDataReducer, "POST", "/get_py_data", payload);
}

export function PaPartNumberApi(payload) {
  return apiHelper(PaPartNumberReducer, "POST", "/get_pa_varieties", payload);
}

export function PaDataApi(payload) {
  return apiHelper(PaDataReducer, "POST", "/get_pa_data", payload);
}

export function DaPartNumberApi(payload) {
  return apiHelper(DaPartNumberReducer, "POST", "/get_da_varieties", payload);
}

export function DaDataApi(payload) {
  return apiHelper(DaDataReducer, "POST", "/get_da_data", payload);
}

export function SaPartNumberApi(payload) {
  return apiHelper(SaPartNumberReducer, "POST", "/get_sa_varieties", payload);
}

export function SaDataApi(payload) {
  return apiHelper(SaDataReducer, "POST", "/get_sa_data", payload);
}