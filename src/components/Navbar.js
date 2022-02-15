import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "1.45rem" : "1.2rem",
    };
  };
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav>
      <NavLink style={navLinkStyles} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to='about'>
        About
      </NavLink>

      {auth.user && (
        <NavLink style={navLinkStyles} to='profile'>
          Profile
        </NavLink>
      )}
      {auth.user && (
        <NavLink style={navLinkStyles} to='fetch-data'>
          FetchData
        </NavLink>
      )}

      {!auth.user && (
        <NavLink style={navLinkStyles} to='register'>
          Register
        </NavLink>
      )}
      {auth.user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
