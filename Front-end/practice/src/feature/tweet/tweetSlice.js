import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import tweetApi from "./../../api/tweet"

export const fetchTweet = createAsyncThunk(
  "tweet/fetchTweetStatus",
  async () => {
    const response = await tweetApi.fetchTweet()
    return response.data
  }
)

export const postTweet = createAsyncThunk(
  "tweet/postTweetStatus",
  async (data) => {
    const response = await tweetApi.postTweet(data)
    return response.data
  }
)

const initialState = {
  tweetList: [],
}

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTweet.fulfilled, (state, action) => {
      state.tweetList = action.payload
    })
    builder.addCase(postTweet.fulfilled, () => {
      // fetchTweet()
    })
  },
})

export default tweetSlice.reducer
