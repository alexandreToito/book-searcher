import React from "react";
import "./SearchBook.css";

import noimage from "../../icons/no-image.jpg";

const SearchBook = ({
  totalData,
  inputValue,
  validateFetch,
  setSelectedBook,
}) => {
  const bookDetail = idx => {
    const book = totalData.filter((_, position) => position === idx);
    setSelectedBook(book);
  };

  return (
    <>
      <div className="books-grid">
        {totalData?.map((book, idx) => {
          return (
            <div className="books-content" key={idx}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail ?? noimage}
                alt={book.volumeInfo.title}
                onClick={() => bookDetail(idx)}
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
    </>
  );
};

export default SearchBook;
