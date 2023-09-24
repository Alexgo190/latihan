import axios from "axios"

const fetchTweet = () => {
  return axios.get("http://localhost:2000/tweets")
}

const postTweet = (data) => {
  return axios.post("http://localhost:2000/tweets", data)
}

export default {
  fetchTweet,
  postTweet,
}
