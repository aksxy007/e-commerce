import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple, orange } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  const [currentStpe,setCurrentStep] = useState(0)

  return (
    <div className="px-5 lg:px-20 py-3">
      <div className="">
        <h1 className="font-semibold text-lg lg:text-2xl pt-4">
          Delivering To
        </h1>
        <AddressCard />
      </div>
      <div className="mt-10">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-x-5 space-y-5 mt-3 lg:mt-10">
        {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border shadow-gray-300 hover:shadow-gray-400" justifyContent="space-between"
          sx={{ alignItems: "center" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[9rem] h-[9rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                alt=""
              />
              <div className="space-y-1 justify-center">
                <p className="font-semibold text-lg">Men Slim Mid Rise Balck Jeans</p>
                <p className="space-x-5 opacity-80"><span>Color:Black</span><span>Size:M</span></p>
                <p className="">Seller: Linaria</p>
                <p className="font-bold text-green-600">₹1999</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:"#ff9100"}}>
                <StarBorderIcon sx={{fontSize:"3rem"}} className="px-2"/>
                <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
