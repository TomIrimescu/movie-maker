import React from 'react';
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies';

const App = () => {
  return (
    <div>
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
};

export default App;