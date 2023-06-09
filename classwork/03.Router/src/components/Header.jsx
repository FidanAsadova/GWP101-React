import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h4 className="bg-dark text-light text-center pt-3 pb-3">Header</h4>
      <div className="btns d-flex gap-3 justify-content-center bg-primary pt-4 pb-4">
        <button className="btn bg-warning" onClick={()=> navigate("/")}>Home</button>
        <button className="btn bg-warning" onClick={()=> navigate("/about")}>About</button>
        <button className="btn bg-warning" onClick={()=> navigate("/contact")}>Contact</button>
        <button className="btn bg-warning" onClick={()=> navigate("/blog")}>Blog</button>
      </div>
      <div className="d-flex gap-5 justify-content-center pb-4 pt-4 bg-success">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </div>
    </div>
  );
};

export default Header;
