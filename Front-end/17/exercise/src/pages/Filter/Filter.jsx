import React, { useEffect, useState } from "react"
import { Input } from "@chakra-ui/react"
import style from "./Filter.module.css"

function Filter() {
  const [search, setSearch] = useState("")

  const [boxes, setBoxes] = useState([
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ])

  useEffect(() => {
    if (search != "") {
      const lowercaseArray = boxes.map((item) => item.toLowerCase())
      const searchFilter = lowercaseArray.filter((box) => {
        return box.includes(search)
      })

      setBoxes([...searchFilter])
    } else {
      setBoxes([
        ...[
          "Banana",
          "Apple",
          "Orange",
          "Mango",
          "Pineapple",
          "Watermelon",
          "Strawberry",
          "Persimmon",
        ],
      ])
    }
  }, [search])

  return (
    <>
      <div className={style.container}>
        <div className={style.searchBar}>
          <h1>Search : </h1>
          <Input
            placeholder="Search"
            w="500px"
            color={"white"}
            variant={"outline"}
            focusBorderColor="white"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          ></Input>
        </div>
        <div>
          <ul className={style.list}>
            {boxes.map((box, index) => {
              return (
                <li className={style.box} key={index}>
                  {box}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Filter
