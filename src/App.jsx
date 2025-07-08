import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBaer from "./components/NavBaer";
import About from "./page/About";
import Home from "./page/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Contact from "./page/Contact";
import Login from "./page/Login";
import NavCart from "./components/NavCart";
import CartDescription from "./page/CartDescription";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Store from "./page/Store";
import Plants from "./page/Plants";

function App() {
  const [Colorchange, setColorchange] = useState("bg-[#e9e9e7]");
  const [CartSlow, setCartSlow] = useState(false);

  return (
    <>
      <NavBaer Colorchange={Colorchange} CartSlow={CartSlow} setCartSlow={setCartSlow} />
      {CartSlow === true && (
        <NavCart CartSlow={CartSlow} setCartSlow={setCartSlow} />
      )}

      <div className={`relative ${CartSlow ? 'overflow-hidden h-screen' : 'overflow-auto '}`}>
        <Routes>
          <Route path="/Simply-Natural" element={<Home setColorchange={setColorchange} CartSlow={CartSlow} />} />
          <Route path="/about" element={<About setColorchange={setColorchange} />} />
          <Route path="/store" element={<Store setColorchange={setColorchange} />} />
          <Route path="/contact" element={<Contact setColorchange={setColorchange} />} />
          <Route path="/Login" element={<Login setColorchange={setColorchange} />} />
          <Route path="/CartDescription" element={<CartDescription setColorchange={setColorchange} />} />
          <Route path="/cart" element={<Cart setColorchange={setColorchange} setCartSlow={setCartSlow} />} />
          <Route path="/checkout" element={<Checkout setColorchange={setColorchange} />} />
          <Route path="/plants" element={<Plants setColorchange={setColorchange} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
