import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
let BASE_URL = "http://localhost:8080/movies";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} setMovis={setMovis} />}
        />
        <Route path="/form" element={<Form />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
