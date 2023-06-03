import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-div">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Staff</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
