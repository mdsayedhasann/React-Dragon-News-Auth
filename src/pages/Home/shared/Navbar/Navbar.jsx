import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import navbar from "./Navbar.css";
import defaultAvatar from "../../../../assets/user.png";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navLink = (
    <>
      <li>
        {" "}
        <NavLink className={navbar} to="/">
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink className={navbar} to="/about">
          About
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink className={navbar} to="/career">
          Career
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          {
            user && 
            <p> {user.email} </p>
          }
          <img className="w-6" src={defaultAvatar} alt="" />

          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
