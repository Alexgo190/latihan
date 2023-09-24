import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userApi from "./../../api/user"

export const fetchUser = createAsyncThunk("user/fetchUserStatus", async () => {
  const response = await userApi.fetchUser()
  return response.data
})

export const addUser = createAsyncThunk("user/addUserStatus", async () => {
  const response = await userApi.fetchUser()
  return response.data
})

const initialState = {
  userList: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userList = action.payload
    })
    builder.addCase(addUser.fulfilled, () => {})
  },
})

export default userSlice.reducer
