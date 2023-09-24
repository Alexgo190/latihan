import "./App.css"
import { Routes, Route } from "react-router-dom"
import Users from "./components/Users"
import Register from "./components/Register"
import Tweet from "./components/Tweets"

function App() {
  return (
    <>
      <div className="container">
        <h1>Exercise</h1>
        <div className="nav">
          <a href="/users">Users</a>
          <a href="/register">Register</a>
          <a href="/tweets">Tweets</a>
        </div>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tweets" element={<Tweet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
