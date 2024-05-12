import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <p className="text-2xl font-bold ">Delivery Address</p>
        <AddressCard />
      </div>
      <div>
      <p className="text-2xl font-bold my-3">Order Details</p>
        <div className="lg:grid grid-cols-3 relative mx-3">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-20 h-[100vh] mt-5 lg:mt-10">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
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
    </div>
  );
};

export default OrderSummary;
