
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" className="headerTitle">
          <i>Make My Trip</i>
        </Typography>

        
        <Button
          component={Link}
          to="/signup"
          color="inherit"
          className="button"
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          color="inherit"
          className="button"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
