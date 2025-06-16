import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBaer from "./componets/NavBaer";
import About from "./page/About";
import Home from "./page/Home";
import NotFound from "./componets/NotFound";
import Footer from "./componets/Footer";
import Contact from "./page/Contact";
import Login from "./page/Login";
import NavCart from "./componets/NavCart";
import CartDescription from "./componets/CartDescription";
import Cart from "./componets/Cart";

function App() {
  const [Colorchange, setColorchange] = useState("bg-[#e9e9e7]");
  const [CartSlow, setCartSlow] = useState(false);

  return (
    <>
      <NavBaer Colorchange={Colorchange} CartSlow={CartSlow} setCartSlow={setCartSlow} />
      <NavCart CartSlow={CartSlow} setCartSlow={setCartSlow} />

      <div className={`relative ${CartSlow ? 'overflow-hidden h-screen' : 'overflow-auto'}`}>
        <div className={`bg-[#f9f9f9]`}>
          <Routes>
            <Route path="/" element={<Home setColorchange={setColorchange} CartSlow={CartSlow} />} />
            <Route path="/about" element={<About setColorchange={setColorchange} />} />
            <Route path="/contact" element={<Contact setColorchange={setColorchange} />} />
            <Route path="/Login" element={<Login setColorchange={setColorchange} />} />
            <Route path="/CartDescription" element={<CartDescription setColorchange={setColorchange} />} />
            <Route path="/Cart" element={<Cart setColorchange={setColorchange} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
