import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className=" flex py-6 justify-between items-center bg-slate-900 text-white ">
        <div className="text-3xl text-orange-500">
          <Link to="/"> Best-Laptop</Link>
        </div>
        <div className="nav-item flex">
          <CustomLink className="mr-4   text-bas " to="/home">
            HOME
          </CustomLink>
          <CustomLink className="mr-4   text-base " to="/review">
            REVIEW
          </CustomLink>
          <CustomLink className="mr-4   text-base " to="/dashboard">
            DASHBOARD
          </CustomLink>
          <CustomLink className="mr-4   text-base " to="/blog">
            BLOG
          </CustomLink>
          <CustomLink className="mr-4   text-base " to="/about">
            ABOUT
          </CustomLink>
        </div>

        {/*============== login and submit div========================  */}

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
