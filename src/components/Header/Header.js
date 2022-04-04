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
          <Link className="px-1 text-base  hover:text-blue-700" to="/home">
            Home
          </Link>
          <Link className="px-1 text-base   hover:text-blue-700" to="/review">
            Review
          </Link>
          <Link
            className="px-1 text-base   hover:text-blue-700"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link className="px-1 text-base   hover:text-blue-700" to="/blog">
            blog
          </Link>
          <Link className="px-1 text-base   hover:text-blue-700" to="/about">
            About
          </Link>
          <Link className="px-1 text-base   hover:text-blue-700" to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav-submit">
          <Link className="px-1 text-xl hover:text-blue-700" to="/login">
            Login
          </Link>
          <Link className="px-1 text-xl hover:text-blue-700" to="/signup">
            SignUp
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
