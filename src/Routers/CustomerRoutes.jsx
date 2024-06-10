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
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Orders/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/payments/:orderId' element={<PaymentSuccess/>}></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes