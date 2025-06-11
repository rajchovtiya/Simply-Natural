import { Route, Routes } from "react-router-dom"
import NavBaer from "./componets/NavBaer"
import About from "./page/About"
import Home from "./page/Home"
import { useState } from "react"
import NotFound from "./componets/NotFound"
import Footer from "./componets/Footer"
import Contact from "./page/Contact"
import Login from "./page/Login"

function App() {
  const [Colorchange, setColorchange] = useState("bg-[#e9e9e7]")
  const [CartSlow, setCartSlow] = useState(false)
  return (
    <>
      <NavBaer Colorchange={Colorchange} />
      <div className="bg-[#f9f9f9]">
        <Routes>
          <Route path="/" element={<Home setColorchange={setColorchange} />} />
          <Route path="/about" element={<About setColorchange={setColorchange} />} />
          <Route path="/contact" element={<Contact setColorchange={setColorchange} />} />
          <Route path="/Login" element={<Login setColorchange={setColorchange} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />


    </>

  )
}

export default App
