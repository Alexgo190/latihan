import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./../feature/user/userSlice"
import tweetReducer from "./../feature/tweet/tweetSlice"

export const store = configureStore({
  reducer: {
    tweet: tweetReducer,
    user: userReducer,
  },
})
