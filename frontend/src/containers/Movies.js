import React, { Component } from 'react';
import Movie from '../components/Movie';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const allMovies = gql`
  {
    movies{
      name
      genre
      year
    }
  }
`;
class Movies extends Component {
  state = {
    movies: [
      { id: 1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
      { id: 8, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' }
    ]
  };

  render() {
    console.log(this.props);
    return (
      <div className="movies">
        {this.state.movies.map((movie) => {
          return <Movie key={movie.id}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            image={movie.image}
          />;
        })}
      </div>
    );
  }
}


export default graphql(allMovies)(Movies);