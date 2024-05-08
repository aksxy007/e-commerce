import { Button, IconButton } from "@mui/material";
import Icon from '@mui/material/Icon';

import * as React from "react";

function CartItem() {
   
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/l/7/u/l-vfku1833skd-vbuyz-original-imaggtqkmyvjzjey.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slime Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70">Seller: Christian Fashion</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-500 font-semibold">5% off</p>
          </div>
        </div>
        <div className="lg:flex itemms-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                <Icon baseClassName="fas" className="fa-minus-circle" sx={{color:"balck"}} />
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">
                <IconButton>
                    <Icon baseClassName="fas" className="fa-plus-circle" sx={{color:"black"}}/>
                </IconButton>
                </span>
            </div>
            <div>
                <Button >Remove</Button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default CartItem;
