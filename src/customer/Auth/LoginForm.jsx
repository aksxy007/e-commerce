import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../State/Auth/Action";
import { useEffect } from "react";


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const {auth} = useSelector(store=>store)

  // useEffect(()=>{
  //   if(jwt){
  //     dispatch(getUser(jwt))
  //   }
  // },[jwt,auth.jwt])

    const handleSubmit = (event) => {
      event.preventDefault()
  
      const data = new FormData(event.currentTarget);
  
      const UserData = {
        email:data.get("email"),
        password:data.get("password"),
      }
      dispatch(login(UserData))
      console.log(UserData);
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: "0.8rem 0", bgcolor:"#9155FD" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center flex-col items-center"> 
        <div className="py-3 flex items-center">
          <p>Don't have an account?</p>
          <Button onClick={()=>navigate("/register")} >REGISTER</Button>
        </div>
      </div>
      </div>
  )
}

export default LoginForm