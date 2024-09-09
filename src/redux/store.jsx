import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slice/authSlice";
import { userReducer } from "./slice/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const Store = configureStore({ reducer: rootReducer });
export default Store;
