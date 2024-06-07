import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className='rounded-md border shadow-gray-700 shadow-sm hover:shadow-stone-700 hover:shadow-md p-5 py-7'>
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6} >
                <div className="flex cursor-pointer">
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                    <div className="ml-5 space-y-2">
                        <p className=''>Men Slim Mid Rise Balck jeans</p>
                        <p className="opacity-60 text-xs font-semibold ">Size:M</p>
                        <p className="opacity-60 text-xs font-semibold ">Color:Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>₹1999</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div className="space-y-1">
                    <p className="">
                        <AdjustIcon sx={{width:"1rem",height:"1rem" }} className='text-green-600 mr-2' />
                        <span>
                            Delivered On March 04.
                        </span>
                    </p>
                    <p className="text-sm opacity-80 mx-6">
                        Your item has been delivered.
                    </p>
                </div>
                
                 }
                {false && <p className="">
                    <span>
                        Expected delivery On March 04.
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard