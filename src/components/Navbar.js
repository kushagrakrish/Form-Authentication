import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "1.45rem" : "1.2rem",
    };
  };

  const auth = useAuth();
  return (
    <nav>
      <NavLink style={navLinkStyles} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to='about'>
        About
      </NavLink>
      {/* <NavLink style={navLinkStyles} to='products'>
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to='users'>
        Users
      </NavLink> */}
      <NavLink style={navLinkStyles} to='profile'>
        Profile
      </NavLink>
      {/* {!auth.user && (
        <NavLink style={navLinkStyles} to='login'>
          Login
        </NavLink>
      )} */}

      <NavLink style={navLinkStyles} to='fetch-data'>
        Fetch Data
      </NavLink>

      {!auth.user && (
        <NavLink style={navLinkStyles} to='register'>
          Register
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
