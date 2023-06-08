import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header d-flex flex-column align-items-center">
          <h1 className="text-center">Movies</h1>
          <div className="btns p-4 d-flex gap-1">
            <NavLink to={"/"}>List</NavLink>
            <NavLink to={"/form"}>Form</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
