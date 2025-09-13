import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Shop from './components/common/Shop'
import Product from './components/common/Product'
import Cart from './components/common/Cart'
import Checkout from './components/common/Checkout'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}


export default App
