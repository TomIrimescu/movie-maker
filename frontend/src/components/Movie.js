import React from 'react';

const Movie = (props) => {
  return (
    <div className="card">
      <div className="container">
        <img src='https://rb.gy/kbnq4w' alt="John Wick" width="100%" height="230px" />
        <h4>{props.name}</h4>
        <h4>{props.genre} - {props.year}</h4>
      </div>
    </div>
  );
};

export default Movie;
