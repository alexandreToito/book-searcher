import React, { useState } from "react";

import "./App.css";

import SearchBook from "../src/components/SearchBook/SearchBook";
import BookDetail from "../src/components/BookDetail/BookDetail";
import Home from "../src/components/Home/Home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [totalData, setTotalData] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

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
      default:
        return null;
    }
  };

  return (
    <>
      {!selectedBook && (
        <input
          type="text"
          placeholder="Search book"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
            validateFetch(e.target.value, false);
          }}
        />
      )}

      {!totalData && !selectedBook && <Home />}

      {totalData && !selectedBook && (
        <SearchBook
          totalData={totalData}
          inputValue={inputValue}
          validateFetch={validateFetch}
          setSelectedBook={setSelectedBook}
        />
      )}

      {selectedBook && (
        <BookDetail
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      )}

      {!selectedBook && (
        <footer className="footer">
          <div
            onClick={() => {
              setTotalData(null);
              setInputValue("");
            }}
          >
            <i className="fa fa-home" aria-hidden="true" />
            <p>Home</p>
          </div>
          <div>
            <i className="fa fa-book" aria-hidden="true" />
            <p>Libraries</p>
          </div>
          <div>
            <i className="fa fa-user" aria-hidden="true" />
            <p>Profile</p>
          </div>
        </footer>
      )}
    </>
  );
}

export default App;
