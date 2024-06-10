import { Button, IconButton, Icon } from "@mui/material";
// import Icon from '@mui/material/Icon';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useNavigate } from "react-router-dom";

function CartItem({ screen,cartitem }) {
  // const [itemCount, setItemCount] = useState(cartitem?.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const screenDisplay = screen=="order"?"hidden":"flex"

  const handleProductRoute = () => {
    navigate(`/product/${cartitem?.product?.id}`);
  };

  const handleUpdateCart = (num) => {
    const data = {data:{quantity:cartitem?.quantity+num,size:cartitem?.size},cartItemId:cartitem?.id}
    dispatch(updateCartItem(data))
  };

  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(cartitem?.id))
  }

  const minusColor = cartitem?.quantity > 1 ? "RGB(255 0 0)" : "RGB(128 128 128)";
  return (
    <div className="px-5 py-2 shadow-lg border rounded-md lg:my-10 my-5">
      <div className="flex items-center ml-5">
        <div
          className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] cursor-pointer object-cover"
          onClick={handleProductRoute}
        >
          <img src={cartitem?.product.imageUrl} alt="" />
        </div>
        <div className="ml-8 mt-6 space-y-1">
          <div className="flex flex-col space-y-1 items-start text-gray-900">
            <p className="font-semibold text-lg">
              {cartitem?.product?.brand.toUpperCase()}
            </p>
            <p className="font-semibold text-sm">{cartitem?.product?.title}</p>
            <p className="opacity-70 text-sm">Size: {cartitem?.size}</p>
            <p className="opacity-70 text-sm">Color: {cartitem?.product?.color}</p>
            <p className="opacity-50 line-through text-sm">
              Original Price: ₹{cartitem?.product?.price}
            </p>
            <p className="text-green-500 font-semibold text-sm">
              Disocunt: {cartitem?.product?.discountPercent}% off
            </p>
            <p className="font-semibold ">
              Discount Price: ₹{cartitem?.product?.discountedPrice}
            </p>
          </div>
        </div>
      </div>
      {screen!="order"?<div className="lg:flex itemms-center lg:space-x-10 mt-5 pt-2" >
        <div className="flex space-x-2 justify-between items-center mt-1">
          <div>
            <IconButton onClick={()=>handleUpdateCart(-1)} sx={{ color: minusColor }} disabled={cartitem?.quantity<=1}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
          <span className="px-7">{cartitem?.quantity}</span>
          <div className="py-1 rounded-sm">
            <IconButton onClick={()=>handleUpdateCart(1)} sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
        <div className="w-full flex items-center">
          <Button sx={{ color: "RGB(145 85 253)" }} onClick={handleRemoveCartItem}>Remove</Button>
        </div>
      </div>:<div className="lg:flex itemms-center lg:space-x-10 mt-5 pt-2 h-[30px]" ></div>
    }
    </div>
  );
}

export default CartItem;
