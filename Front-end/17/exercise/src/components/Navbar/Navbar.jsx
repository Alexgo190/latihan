import style from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <a href="1">Counter</a>
      <a href="2">Stopwatch</a>
      <a href="3">Filter</a>
      <a href="4">Fetch API</a>
      <a href="5">Exercise 5</a>
    </nav>
  )
}
