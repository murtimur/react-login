import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadAuthState, storeAuthState } from "./storage";

const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthState(),
  reducers: {
    loginSuccess: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    // eslint-disable-next-line no-unused-vars
    logoutSuccess: (state, action) => {
      state.id = 0;
      delete state.username;
    },
  },
});

export const {loginSuccess, logoutSuccess} = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

store.subscribe(() => {
  storeAuthState(store.getState().auth);
});
