import { Button, Grid, Icon } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";

const AddressCard = ({ screen }) => {
  return (
    <div>
      <div className="space-y-3 rounded-lg shadow-xl p-10">
        <div className="">
          <p className="text-xl font-semibold">Atul Kumar Singh</p>
        </div>
        <div className="mx-2">
          <p className="">Natures Nest Apartments</p>
          <p className="">Hassarghata Main Road,MS Palya</p>
          <p className="">Bangalore,Karnataka</p>
          <p className="">560097</p>
        </div>

        <div className="space-y-1 mx-2">
          <p className="font-semibold">9353955244</p>
        </div>
        {screen == "Delivery" ? (
          <Grid container item justifyContent="flex-end">
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145,85,253)", position: "relative" }}
              size="large"
              variant="contained"
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
