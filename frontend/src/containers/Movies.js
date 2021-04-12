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
  render() {
    console.log(this.props);
    let data = this.props.data;
    if (data.loading) {
      return <h2 style={{ textAlign: 'center' }}>We are loading your movies...</h2>;
    }
    if (data.movies.length === 0) {
      return <h2 style={{ textAlign: 'center' }}>Please add movies of your choice</h2>;
    }
    return (
      <div className="movies">
        {data.movies.map((movie) => {
          return <Movie key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
          />;
        })}
      </div>
    );
  }
}


export default graphql(allMovies)(Movies);