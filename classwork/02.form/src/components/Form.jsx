import axios from "axios";
import React, { useState } from "react";
let BASE_URL = "http://localhost:8080/movies";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    Title: "",
    Year: "",
    Genre: "",
    Language: "",
    imdbRating: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue({
      Title: "",
      Year: "",
      Genre: "",
      Language: "",
      imdbRating: "",
    });
    await axios.post(BASE_URL, inputValue);
  };

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col col-3"></div>
          <div className="col col-6">
            <form action="" onSubmit={handleSubmit}>
              <h2 className="text-center p-2">Movie Form</h2>
              <div className="title-div mb-3">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="formTitle"
                  className="form-control"
                  placeholder='Enter a title...'
                  value={inputValue.Title}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Title: e.target.value })
                  }
                />
              </div>
              <div className="year-div mb-3">
                <label htmlFor="yead">Year</label>
                <input
                  type="text"
                  name="year"
                  id="formYear"
                  className="form-control"
                  placeholder='Enter a year...'
                  value={inputValue.Year}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Year: e.target.value })
                  }
                />
              </div>
              <div className="Genre-div mb-3">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  name="genre"
                  id="formGenre"
                  className="form-control"
                  placeholder='Enter a genre...'
                  value={inputValue.Genre}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Genre: e.target.value })
                  }
                />
              </div>
              <div className="Language-div mb-3">
                <label htmlFor="lang">Language</label>
                <input
                  type="text"
                  name="lang"
                  id="formLang"
                  className="form-control"
                  placeholder='Enter a language...'
                  value={inputValue.Language}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Language: e.target.value })
                  }
                />
              </div>
              <div className="imdb-div mb-3">
                <label htmlFor="imdb">Imbd</label>
                <input
                  type="text"
                  name="imdb"
                  id="formImdb"
                  className="form-control"
                  placeholder='Enter an imbd...'
                  value={inputValue.imdbRating}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, imdbRating: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
          <div className="col col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
