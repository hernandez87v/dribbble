import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [shots, setShots] = useState([]);
  // api with data
  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://cdn.dribbble.com/uploads/_/shots.json'
      )
      .then((response) => setShots(response.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="all-cards">
      {shots.map((shot) => (
        <div className="card-content" key={shot.id}>
          <img
            rel="preload"
            as="image"
            className="shot-still"
            src={shot.stillUrl}
          />
          <div className="author-info">
            <img
              rel="preload"
              as="image"
              className="author-avatar"
              src={shot.author.avatarUrl}
            />
            <span className="author-name">{shot.author.name}</span>
            {shot.author.isPro === false && shot.author.isTeam === false ? (
              <span className="badge-neither"></span>
            ) : shot.author.isPro === true ? (
              <span className="badge badge-pro">PRO</span>
            ) : (
              <span className="badge badge-team">TEAM</span>
            )}

            <div className="author-stats">
              <span className="author-comments">
                <a
                  rel="preload"
                  as="image"
                  target="_blank"
                  rel="noopener noreferrer preload"
                  className="fas fa-comment"
                  aria-label="comment"
                ></a>
                {Math.floor(Math.random() * 10)}
              </span>
              <span className="author-likes">
                {' '}
                <a
                  rel="preload"
                  as="image"
                  target="_blank"
                  rel="noopener noreferrer preload"
                  className="fas fa-heart"
                  aria-label="heart"
                ></a>
                {shot.likesCount}
              </span>
            </div>
          </div>
          {/* <span>Title: {shot.title}</span> */}
        </div>
      ))}
    </div>
  );
}
