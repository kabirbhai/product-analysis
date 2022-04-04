import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className=" flex py-6 justify-between items-center bg-slate-900 text-white ">
        <div className="text-3xl text-orange-500">
          <Link to="/"> Best-Laptop</Link>
        </div>
        <div className="nav-item">
          <Link
            className="mr-4 underline text-base   hover:text-orange-500"
            to="/home"
          >
            HOME
          </Link>
          <Link
            className="mr-4 underline text-base    hover:text-orange-500"
            to="/review"
          >
            REVIEW
          </Link>
          <Link
            className="mr-4 underline text-base    hover:text-orange-500"
            to="/dashboard"
          >
            DASHBOARD
          </Link>
          <Link
            className="mr-4 underline text-base    hover:text-orange-500"
            to="/blog"
          >
            BLOG
          </Link>
          <Link
            className="mr-4 underline text-base    hover:text-orange-500"
            to="/about"
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-submit">
          <Link
            className="p-3 text-base bg-orange-600 rounded-lg m-1  hover:bg-orange-900"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="p-3 text-base bg-orange-600 rounded-lg m-1 hover:bg-orange-900"
            to="/signup"
          >
            SignUp
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
