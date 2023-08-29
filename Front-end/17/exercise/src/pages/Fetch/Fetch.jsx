import { useEffect, useState } from "react"
import style from "./Fetch.module.css"

export default function Fetch() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })

    const data = await response.json()
    setUsers(data)
  }

  return (
    <div className={style.container}>
      <h1>Fetch API from JSON Placeholder</h1>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={1}
        color="black"
        className={style.table}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
