import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Orders from '../customer/components/Orders/Orders'
import OrderDetails from '../customer/components/Orders/OrderDetails'
import Footer from '../customer/components/Footer/Footer'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            {/* <Route path='/' element={<ProductDetails/>}></Route>
            <Route path='/' element={<Checkout/>}></Route>
            <Route path='/' element={<Orders/>}></Route>
            <Route path='/' element={<OrderDetails/>}></Route> */}
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes