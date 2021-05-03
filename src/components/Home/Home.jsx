import React from "react";

import "./Home.css";

import hand from "../../icons/hand.png";
import video from "../../icons/video.png";

const Home = ({ setSelectedBook }) => {
  const API_KEY = "Please, insert your Google API Key";

  const fetchData = async (params, quantity) => {
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=${quantity}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(result => setSelectedBook(result.items));
  };

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
          onClick={() => fetchData("dsz5AwAAQBAJ", 1)}
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
          onClick={() => fetchData("Cy86CQAAQBAJ", 1)}
        />

        <div className="home-currently-div-text">
          <p className="home-currently-title">Originals</p>
          <p className="home-currently-author">by Adam Grant</p>
          <p className="home-currently-more">Chapter 2 from 9</p>
        </div>
      </div>

      <div className="home-review">
        <p className="home-review-text">Reviews of The Day</p>
        <p className="home-review-all">All Videos</p>
      </div>

      <div className="home-review-cover">
        <img src={video} alt="Video Cover" />
      </div>
    </div>
  );
};

export default Home;
