import React from "react";
import "./Home.scss";
import Cards from "../components/Cards";

const Home = ({data}) => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home">
          <div className="head">
            <p className="head-title">Certified Teachers</p>
            <p className="head-body">
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
            <Cards data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
