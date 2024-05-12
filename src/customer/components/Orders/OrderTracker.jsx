import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps  = ["Placed","Order Confirmed","Shipped","Out for Delivery","Delivered"]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full px-5 lg:px-20'>
        <Stepper activeStep={activeStep}>
          {steps.map((label)=>(
            <Step key={label}>
              <StepLabel sx={{color:"#9155FD",fontSize:"4rem"}}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
    </div>
  )
}

export default OrderTracker