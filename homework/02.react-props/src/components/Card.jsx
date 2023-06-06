import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Name: {user.fisrtname}</h2>
        <h4>Surname: {user.surname}</h4>
      </div>
    </div>
  );
};

export default Card;
