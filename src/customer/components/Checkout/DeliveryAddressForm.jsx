import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Grid, TextField,Box } from "@mui/material";

const DeliveryAddressForm = () => {
    const handleSubmit= (e)=>{
        e.preventDefault();
        
        const data = new FormData(e.currentTarget)
        const address = {
            firstName : data.get('firstName'),
            lastName: data.get('lastName'),
            address1 : data.get('address1'),
            address2 : data.get('address2'),
            city : data.get('city'),
            state : data.get('state'),
            zipcode : data.get('zip'),
            phone : data.get('phoneNumber')
        }
        console.log(address)
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid container xs={12} lg={5} classname="border rounded-3-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursoer-pointer w-full">
            <AddressCard screen="Delivery" /> 
          </div>
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
                                label='First Name'
                                fullWidth
                                autoComplete="given-name" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required
                                id="firstName"
                                name="firstName"
                                label='Last Name'
                                fullWidth
                                autoComplete="given-name" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                required
                                id="address1"
                                name="address1"
                                label='Address Line 1'
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
                                label='Address Line 2'
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
                                label='City'
                                fullWidth
                                autoComplete="given-name" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required
                                id="state"
                                name="state"
                                label='State/Province/Region'
                                fullWidth
                                autoComplete="given-name" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required
                                id="zip"
                                name="zip"
                                label='Zip / Posta Code'
                                fullWidth
                                autoComplete="shipping postal-code" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label='Phone Number'
                                fullWidth
                                autoComplete="given-name" 
                            />
                        </Grid>
                        <Grid container item xs={12} sm={12} justifyContent="flex-end">
                           <Button
                            sx={{py:1.5 ,mt:2, bgcolor:"RGB(145,85,253)"}}
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
