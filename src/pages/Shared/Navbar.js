import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const menuItems= <>
        <li><NavLink activeClassName="bg-primary" to='/home'>Home</NavLink></li>
        <li><NavLink activeClassName="bg-primary" to='/products'>Products</NavLink></li>
        <li><NavLink activeClassName="bg-primary" to='/myPortfolio'>My Portfolio</NavLink></li>
        <li><NavLink activeClassName="bg-primary" to='/blogs'>Blogs</NavLink></li>
        <li><NavLink activeClassName="bg-primary" to='/login'>Login</NavLink></li>
    </>

  return (
    <div className="navbar bg-neutral text-white lg:px-28 sticky top-0 z-40 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/home' className="normal-case text-primary text-xl">Style Fabrics</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu  menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;