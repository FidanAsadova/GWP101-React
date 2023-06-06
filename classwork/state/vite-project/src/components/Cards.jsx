import React from "react";
import Card from "./Card";

const Cards = ({users}) => {
  return (
    <div className="cards">
      {
        users.map((user)=>{
            return <Card key={user.id} user={user}/>
        })
      }
    </div>
  );
};

export default Cards;
