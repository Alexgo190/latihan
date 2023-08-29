import { useState } from "react"
import Counter from "./pages/Counter/Counter"
import Filter from "./pages/Filter/Filter"
import Fetch from "./pages/Fetch/Fetch"
import Stopwatch from "./pages/Stopwatch/Stopwatch"
// import { Container, Heading, Stack } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="1" element={<Counter />} />
        <Route path="2" element={<Stopwatch />} />
        <Route path="3" element={<Filter />} />
        <Route path="4" element={<Fetch />} />
        {/* <Route path="5" element={<Counter />} /> */}
      </Routes>

      {/* <Filter /> */}
    </>
  )
}

export default App
