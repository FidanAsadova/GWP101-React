import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
let BASE_URL = "http://localhost:8080/movies";
import React, { useState, useEffect } from "react";
import Movies from "./components/movies";
import Form from "./components/Form";

const App = () => {
  const [movies, setMovis] = useState([]);
  const getMovies = async () => {
    const res = await axios(BASE_URL);
    const data = res.data;
    setMovis(data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <Form/>
      <Movies movies={movies} setMovis={setMovis} />
    </div>
  );
};

export default App;
