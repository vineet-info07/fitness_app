import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isOtpVerified: false,
  token: null,
  user: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
    },
    otpVerified(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.isOtpVerified = true;
      state.token = action.payload;
      state.status = "idle";
    },
    logout() {
      return initialState;
    },
  },
});

export const { loginStart, otpVerified, logout } = authSlice.actions;

export default authSlice.reducer;
