import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { Button, TextField, Typography } from '@mui/material';
import './Login.css'



function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
      <div className="login">
      <Typography variant="h3">Login</Typography>
      
      <form onSubmit={submit}>
        <TextField
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>

      <br />
      <Typography variant="body1">OR</Typography>
      <br />

      <Button component={Link} to="/signup" variant="outlined" color="primary" fullWidth>
        Sign up Page
      </Button>
    </div>
    )
}

export default Login