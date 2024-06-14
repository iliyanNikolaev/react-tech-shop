import { Link, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Collection } from "./pages/Collection"
import { Product } from "./pages/Product"
import { Cart } from "./pages/Cart"
import { Checkout } from "./pages/Checkout"
import { Login } from "./pages/Login"
import { Admin } from "./pages/Admin"
import { Contacts } from "./pages/Contacts"
import { UploadImg } from "./component/uploadImg"

function App() {

  return (
    <>
      <Link to='/'>Home</Link>

      <UploadImg />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:name" element={<Collection />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
