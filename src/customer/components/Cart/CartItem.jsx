import { Button, IconButton, Icon } from "@mui/material";
// import Icon from '@mui/material/Icon';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import React, { useState } from "react";

function CartItem() {
  const [itemCount,setItemCount] = useState(1)
  const handleAdd=()=>{
    setItemCount(itemCount+1)
  }
  const handleSub=()=>{
    if (itemCount>1){
      setItemCount(itemCount-1)
    }
    else
      setItemCount(1)
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem]">
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
      </div>
      <div className="lg:flex itemms-center lg:space-x-10 mt-10 pt-4">
        <div className="flex space-x-2 justify-between items-center">
          <div>
          <IconButton onClick={handleSub}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          </div>
          <span className="px-7">
              {itemCount}
          </span>
          <div className="py-1 border rounded-sm">
            <IconButton onClick={handleAdd} sx={{color:"RGB(145 85 253)"}}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
