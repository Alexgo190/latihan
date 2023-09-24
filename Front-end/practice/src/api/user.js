import axios from "axios"

const fetchUser = () => {
  return axios.get("http://localhost:2000/users")
}

const addUser = (data) => {
  return axios.post("http://localhost:2000/users", data)
}

export default {
  fetchUser,
  addUser,
}
