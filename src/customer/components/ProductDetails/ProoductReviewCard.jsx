import { Avatar, Grid, Rating, Box } from "@mui/material";
import React from "react";

function ProoductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">May 8,2024</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nisi
            placeat, id commodi blanditiis atque! Quos totam.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProoductReviewCard;
