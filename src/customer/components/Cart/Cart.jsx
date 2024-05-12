import React from "react";
import CartItem from "./CartItem";
import {Button } from "@mui/material";

function Cart() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-5">
                <div className="flex justify-between pt-3">
                    <span>Price</span>
                    <span>₹4444</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span className="opacity-60">Discount</span>
                    <span className="text-green-600">-₹3000</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span className="opacity-60">Delivery Charge</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex font-bold justify-between pt-3 text-lg">
                    <span>Total Amount</span>
                    <span>₹1444</span>
                </div>
            </div>
            <Button
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
  );
}

export default Cart;