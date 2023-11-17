import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button, TextField, Typography } from '@mui/material';
import "./Signup.css";

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    console.log("hello")
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      console.log("Hello1")
      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        history("/home", { state: { id: email } });
      }
    } catch (error) {
      alert("Error occurred while signing up. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="signup">
      <Typography variant="h3">Sign up</Typography>

      <form onSubmit={submit}>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign up
        </Button>
      </form>

      <br />
      <Typography variant="body1">OR</Typography>
      <br />

      <Button component={Link} to="/" variant="outlined" color="primary" fullWidth>
        Login Page
      </Button>
    </div>
  );
}

export default Signup;
