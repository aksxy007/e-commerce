import { Button, Grid, Icon } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useRef, useEffect } from 'react';
import { createOrder } from "../../../State/Order/Action";

const AddressCard = ({ screen,address }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const firstName  = address?.firstName||""
  const lastName = address?.lastName||""
  const fullName = firstName+" "+lastName


  const handleSelectDelivery = ()=>{
    const data = {firstName:address?.firstName,lastName:address?.lastName,streetAddress:address?.streetAddress,city:address?.city,state:address?.state,zipCode:address?.zipCode,mobile:address?.mobile}
    const order = {address:data,navigate:navigate}
    dispatch(createOrder(order))
    console.log("selected address",address)
  }

  return (
    <div>
      <div className="space-y-1 rounded-lg shadow-xl px-5 py-5">
        <div className="mb-3">
          <p className="text-xl font-semibold">{fullName}</p>
        </div>
        <div className="mx-2 space-y-2">
          {/* <p className="">Natures Nest Apartments</p> */}
          <p className="text-lg">{address?.streetAddress||""}</p>
          <p className="text-lg">{address?.city||""},{address?.state||""}</p>
          <p className="text-lg">{address?.zipCode||""}</p>
        </div>

        <div className="space-y-1 mx-2">
          <p className="font-semibold">{address?.mobile}</p>
        </div>
        {screen == "Delivery" ? (
          <Grid container item justifyContent="flex-end">
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145,85,253)", position: "relative" }}
              size="large"
              variant="contained"
              onClick={handleSelectDelivery}
            >
              Choose
            </Button>
          </Grid>
        ) : (
          <CheckCircleOutlineIcon sx={{color:"green", height:"2rem", width:"2rem"}} />
        )}
      </div>
    </div>
  );
};

export default AddressCard;
