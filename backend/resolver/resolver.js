// const Movie = require('../model/model');

const movies = [
  { id: 1, name: 'John Wick Parabellum1', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 2, name: 'John Wick Parabellum2', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 3, name: 'John Wick Parabellum3', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 4, name: 'John Wick Parabellum4', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 5, name: 'John Wick Parabellum5', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 6, name: 'John Wick Parabellum6', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 7, name: 'John Wick Parabellum7', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' },
  { id: 8, name: 'John Wick Parabellum8', genre: 'Action', year: 2019, image: 'https://rb.gy/kbnq4w' }
];

const resolvers = {
  movies: () => {
    return movies;
  },
  addMovie: (args) => {
    return {
      name: args.name,
      genre: args.genre,
      year: args.year
    };
  }
};

module.exports = resolvers;
