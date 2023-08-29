import React, { useEffect, useState } from "react"
import style from "./Stopwatch.module.css"
import { Button } from "@chakra-ui/react"

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isRunning, time])

  //Minutes
  const minutes = Math.floor((time % 360000) / 6000)

  //Seconds
  const seconds = Math.floor((time % 6000) / 100)

  const start = () => {
    setIsRunning(!isRunning)
  }
  const stop = () => {
    setIsRunning(false)
  }

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0)
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.time}>
          <p>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
        <div className={style.button}>
          <Button
            colorScheme={"green"}
            color={"white"}
            mx={"20px"}
            my={"20px"}
            onClick={start}
          >
            Start
          </Button>
          <Button
            colorScheme={"red"}
            color={"white"}
            mx={"20px"}
            my={"20px"}
            onClick={stop}
          >
            Stop
          </Button>
          <Button
            colorScheme={"yellow"}
            color={"white"}
            mx={"20px"}
            my={"20px"}
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  )
}
