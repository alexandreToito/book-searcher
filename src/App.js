import React, { useState } from "react";

import "./App.css";

import SearchBook from "../src/components/SearchBook/SearchBook";
import BookDetail from "../src/components/BookDetail/BookDetail";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [totalData, setTotalData] = useState(null);
  const [selectedBook, setSelectedBook] = useState(true);

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
      {/* <input
        type="text"
        placeholder="Search book"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          validateFetch(e.target.value, false);
        }}
      /> */}

      {totalData && !selectedBook && (
        <SearchBook
          totalData={totalData}
          inputValue={inputValue}
          validateFetch={validateFetch}
          setSelectedBook={setSelectedBook}
        />
      )}

      {selectedBook && <BookDetail selectedBook={selectedBook} />}
    </>
  );
}

export default App;
