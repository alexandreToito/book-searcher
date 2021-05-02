import React from "react";

import "./Home.css";

import hand from "../../icons/hand.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-user">
        <p className="home-user-greetings">Hi, </p>
        <p className="home-user-userName">Alexandre Toito</p>
      </div>
      <img className="home-user-hand" src={hand} alt="Waving Hand" />

      <div className="home-discover">
        <p className="home-discover-text">Discover new book</p>
        <p className="home-discover-more">More</p>
      </div>

      <div className="home-discover-blue">
        <div className="home-discover-blue-text">
          <p className="home-discover-title">Hooked</p>
          <p className="home-discover-author">Nir Eyal</p>
          <p className="home-discover-more">120 + Read Now</p>
        </div>
        <img
          src="http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="Book Cover"
        />
      </div>

      <div className="home-currently">
        <p className="home-currently-text">Currently Reading</p>
        <p className="home-currently-all">All</p>
      </div>

      <div className="home-currently-div">
        <img
          src="http://books.google.com/books/content?id=Cy86CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="Book Cover"
        />

        <div className="home-currently-div-text">
          <p className="home-currently-title">Originals</p>
          <p className="home-currently-author">by Adam Grant</p>
          <p className="home-currently-more">Chapter 2 from 9</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
