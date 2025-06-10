import { Route, Routes } from "react-router-dom"
import NavBaer from "./componets/NavBaer"
import About from "./page/About"
import Home from "./page/Home"
import { useState } from "react"
import NotFound from "./componets/NotFound"

function App() {
  const [Colorchange, setColorchange] = useState("bg-[#e9e9e7]")
  return (
    <>
      <NavBaer Colorchange={Colorchange} />
      <Routes>
        <Route path="/" element={<Home setColorchange={setColorchange} />} />
        <Route path="/about" element={<About setColorchange={setColorchange} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>

  )
}

export default App
