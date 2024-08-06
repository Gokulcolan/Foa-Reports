import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { adminReducer } from "./slice/adminSlice";
import { authReducer } from "./slice/authSlice";
import { userReducer } from "./slice/userSlice";

const rootReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  user: userReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
