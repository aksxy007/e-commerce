import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const ChekoutLogin = () => {
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const {cart} = useSelector(store=>store)
  const jwt = localStorage.getItem('jwt')

  const handleCheckout = () => {
    if (jwt){
      if(cart?.cart?.cartItems?.length<=0){
        navigate("/cart")
      }
      else
        navigate(`/checkout?step=${2}`);
    }
    else
      navigate('/login')
  };

  useEffect(()=>{
    dispatch(getCart())
  },[])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <p className="text-2xl font-bold ">Delivery Address</p>
        <div>
            <AddressCard address={cart?.cart?.user?.address[0]}/>
        </div>
      </div>
      <div>
      <p className="text-2xl font-bold my-3">Order Details</p>
        <div className="lg:grid grid-cols-3 relative mx-3">
          <div className="col-span-2">
            {cart?.cart?.cartItems?.map((item) => (
              <CartItem cartitem={item}/>
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
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Discount</span>
                  <span className="text-green-600">
                    -₹{cart.cart?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="opacity-60">Total Items</span>
                  <span className="">{cart.cart?.totalItem}</span>
                </div>
                <div className="flex font-bold justify-between pt-3 text-lg">
                  <span>Total Amount</span>
                  <span>₹{cart.cart?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
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

export default ChekoutLogin;
