import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    formData:[]

  },
  reducers: {
    setFormData: (state,action) =>{
      state.formData.push(action.payload);
    },
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    }
  },
});

export const {
  setFormData,
  setSignedIn,
  setUserData
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectFormData = (state) => state.user.formData;

export default userSlice.reducer;
