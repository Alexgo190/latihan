import React, { useEffect } from "react"
import style from "./Users.module.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../feature/user/userSlice"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.userList)

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
      <table border={1} cellPadding={5} cellSpacing={0} className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
