import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

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

  const handleEmptyCart=()=>{
    navigate('/')
  }

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.removeCartItem]);

  return (
    <div>
      {cart && cart.cart?.cartItems?.length <= 0 ? (
        <div className="flex flex-col space-y-2 justify-center items-center">
          <div className="h-[20rem] w-[20rem]">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"></img>
          </div>
          <p className="font-semibold text-[2rem]">Your Cart Is Empty</p>
          <div className="">
          <Button
                onClick={handleEmptyCart}
                fullWidth
                variant="contained"
                sx={{
                  px: "2rem",
                  py: "1rem",
                  bgcolor: "#9155fd",
                  mt: "2rem",
                }}
              >
                Add Items
              </Button>
          </div>
          
        </div>
      ) : (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {cart &&
              cart.cart?.cartItems?.map((item) => <CartItem cartitem={item} />)}
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
      )}
    </div>
  );
}

export default Cart;
