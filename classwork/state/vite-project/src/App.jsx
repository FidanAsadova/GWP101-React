import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
let BASE_URL = "https://jsonplaceholder.typicode.com/users";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await axios(BASE_URL);
    const data = res.data;
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <div className="App">
      <h1>App</h1>
      <Cards users={users} />
    </div>
  );
};

export default App;
