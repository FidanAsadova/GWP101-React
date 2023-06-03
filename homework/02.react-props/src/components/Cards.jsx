import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Cards;
