import React, { useState } from "react";
import "./App.css";

import noimage from "../src/icons/no-image.jpg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [totalData, setTotalData] = useState([]);

  const fetchData = async (params, quantity) => {
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=${quantity}&key=AIzaSyDu_MtOz_hq6eRLBqazjk5qtu6t1VwL_ts`
    )
      .then(response => response.json())
      .then(result => setTotalData(result.items));
  };

  const validateFetch = (params, loadMore) => {
    switch (loadMore) {
      case false:
        fetchData(params, 8);
        break;
      case true && totalData.length < 16:
        fetchData(params, totalData.length + 8);
        break;
      case true && totalData.length === 16:
        window.alert("Sorry, no more books to search");
        break;
      default:
        return null;
    }
  };

  console.log(totalData);

  return (
    <>
      <input
        type="text"
        placeholder="Search book"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          validateFetch(e.target.value, false);
        }}
      />

      <div className="books-grid">
        {totalData?.map((book, idx) => {
          return (
            <div className="books-content" key={idx}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail ?? noimage}
                alt={book.volumeInfo.title}
              />
              <p className="books-title">{book.volumeInfo.title}</p>
              <p className="books-author">{`by ${
                book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : "No author found"
              }`}</p>
            </div>
          );
        })}
        {totalData?.length > 0 && (
          <div className="books-load-more">
            <button
              className="books-load-more-icon"
              title="Load more"
              disabled={totalData.length === 16}
              onClick={() => validateFetch(inputValue, true)}
            >
              <i className="fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <footer className="footer">
        <div>
          <i className="fa fa-home" aria-hidden="true"></i>
          <p>Home</p>
        </div>
        <div onClick={() => console.log("clicado")}>
          <i className="fa fa-book" aria-hidden="true"></i>
          <p>Libraries</p>
        </div>
        <div>
          <i className="fa fa-user" aria-hidden="true"></i>
          <p>Profile</p>
        </div>
      </footer>
    </>
  );
}

export default App;
