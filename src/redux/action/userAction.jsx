// redux/actions/userActions.js
import { Apiservice } from "../api/Apiservice";
import { foaDataReducer, partNumberReducer, setGlobalLoader } from "../slice/userSlice";

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

export function partNumberApi(payload) {
  return apiHelper(partNumberReducer, "POST", "/get_foa_varieties", payload);
}

export function foaDataApi(payload) {
  return apiHelper(foaDataReducer, "POST", "/get_foa_data", payload);
}
