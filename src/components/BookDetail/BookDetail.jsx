import React from "react";

import "./BookDetail.css";

import headerBackground from "../../icons/header-background.png";
import blueDot from "../../icons/blue-dot.png";
import pinkDot from "../../icons/pink-dot.png";
import transparentDot from "../../icons/transparent-dot.png";
import dashedDot from "../../icons/dashed-dot.png";
import noimage from "../../icons/no-image.jpg";

const BookDetail = ({ selectedBook, setSelectedBook }) => {
  console.log(selectedBook);
  return (
    <>
      <div className="book-detail-header">
        <img src={headerBackground} alt="Header Background" />
        <img className="book-detail-blue-dot" src={blueDot} alt="Blue Dot" />
        <img className="book-detail-pink-dot" src={pinkDot} alt="Pink Dot" />
        <img
          className="book-detail-transparent-dot"
          src={transparentDot}
          alt="Transparent Dot"
        />
        <img
          className="book-detail-dashed-dot"
          src={dashedDot}
          alt="Dashed Dot"
        />
        <button
          className="book-detail-goBack"
          onClick={() => setSelectedBook(null)}
        >
          <i className="fa fa-arrow-left fa-lg " aria-hidden="true"></i>
        </button>
        <img
          className="book-detail-thumbnail"
          src={selectedBook[0].volumeInfo.imageLinks?.thumbnail ?? noimage}
          alt={selectedBook[0].volumeInfo.title}
        />
      </div>

      <section className="book-detail-section">
        <div className="book-detail-info">
          <h2 className="book-detail-title">
            {selectedBook[0].volumeInfo.title}
          </h2>
          <p className="book-detail-author">
            {selectedBook[0].volumeInfo.authors
              ? selectedBook[0].volumeInfo.authors[0]
              : "No author found"}
          </p>
          <div className="book-detail-description">
            {selectedBook[0].volumeInfo.description ??
              "Sorry, no description found."}
          </div>
        </div>
      </section>

      <footer className="book-detail-footer">
        <div>
          <i className="fas fa-book-open" />
          <span>Read</span>
        </div>

        <hr className="solid" />

        <div>
          <i className="fas fa-headphones-alt" /> <span>Listen</span>
        </div>

        <hr className="solid" />

        <div>
          <i className="far fa-share-square" /> <span>Share</span>
        </div>
      </footer>
    </>
  );
};

export default BookDetail;
