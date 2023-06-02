import React from "react";

const User = ({ obj }) => {
  return (
    <div className="card">
      <h2>Name: {obj.name}</h2>
      <h4>Surname: {obj.surname}</h4>
      <h5>City: {obj.city}</h5>
    </div>
  );
};

export default User;
