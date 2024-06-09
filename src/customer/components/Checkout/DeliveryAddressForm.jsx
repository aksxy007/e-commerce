import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Grid, TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../State/Auth/Action";
import { styled } from '@mui/system';

const ScrollableContainer = styled(Box)({
    overflowY: 'auto',
    maxHeight: '600px',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* Internet Explorer 10+ */
    '&::-webkit-scrollbar': {
      width: '0px',
      background: 'transparent' /* Chrome/Safari/Webkit browsers */
    }
  });


const DeliveryAddressForm = () => {
  const screen = "Delivery";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  console.log(auth);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address1") + " " + data.get("address2"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    const order = { address, navigate };
    dispatch(createOrder(order));
    console.log(address);
  };

  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, auth.jwt]);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          container
          xs={12}
          lg={5}
          classname="flex h-full border rounded-3-md shadow-md"
          sx={{ overflow: "auto" }}
        >
          <ScrollableContainer
            className="flex h-full rounded-3-md"
          >
            <div className="p-5 py-7 space-y-4 cursor-pointer w-full">
              {auth?.user?.address?.map((item) => (
                <AddressCard key={item.id} screen={screen} address={item} />
              ))}
            </div>
          </ScrollableContainer>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lasttName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address Line 1"
                    fullWidth
                    autoComplete="given-name"
                    // multiline
                    // rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address2"
                    name="address2"
                    label="Address Line 2"
                    fullWidth
                    autoComplete="given-name"
                    // multiline
                    // rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Posta Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid container item xs={12} sm={12} justifyContent="flex-end">
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145,85,253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
