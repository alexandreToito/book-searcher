import React from "react";

import "./BookDetail.css";

import headerBackground from "../../icons/header-background.png";
import blueDot from "../../icons/blue-dot.png";
import pinkDot from "../../icons/pink-dot.png";
import transparentDot from "../../icons/transparent-dot.png";
import dashedDot from "../../icons/dashed-dot.png";

const BookDetail = ({ selectedBook }) => {
  return (
    <div>
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
        <img
          className="book-detail-thumbnail"
          src="http://books.google.com/books/content?id=ofRuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="teste"
        />
      </div>
    </div>
  );
};

export default BookDetail;
