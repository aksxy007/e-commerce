import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const screen = ""
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const {order} = useSelector(store=>store)
  const localtion = useLocation();
  const searchParams = new URLSearchParams(localtion.search)
  const orderId = searchParams.get("order_id")
  const jwt = localStorage.getItem('jwt')

  const handleOrderCheckout = () => {
    if (jwt){
      if(order?.orders?.orderItems?.length<=0){
        navigate("/cart")
      }
      else{
        console.log(orderId)
        dispatch(createPayment(orderId))
      }
    }
    else
      navigate('/login')
  };

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  const handleCheckout=()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <p className="text-2xl font-bold ">Delivery Address</p>
        <div>
          <AddressCard address={order?.order?.shippingAddress}/>
        </div>
      </div>
      <div>
      <p className="text-2xl font-bold my-3">Order Details</p>
        <div className="lg:grid grid-cols-3 relative mx-3">
          <div className="col-span-2">
            {order?.order?.orderItems?.map((item) => (
              <CartItem screen="order" cartitem={item}/>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] lg:mt-0">
            <div className="border shadow-lg rounded-lg p-3 my-10">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 space-x-3 font-semibold px-4 mb-5">
                <div className="flex justify-between pt-3">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Total Items</span>
                  <span className="">{order.order?.totalItem}</span>
                </div>
                <div className="flex font-bold justify-between pt-3 text-lg">
                  <span>Total Amount</span>
                  <span>₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                onClick={handleOrderCheckout}
                fullWidth
                variant="contained"
                sx={{
                  px: "2rem",
                  py: "1rem",
                  bgcolor: "#9155fd",
                  mt: "2rem",
                }}
                
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
