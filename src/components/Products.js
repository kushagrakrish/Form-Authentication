import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type='text' placeholder='Search Products' />
      </div>
      <nav className='primary-nav'>
        <NavLink to='featured'>Featured</NavLink>
        <NavLink to='new-products'>New Products</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
