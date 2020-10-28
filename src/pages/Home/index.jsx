/* eslint-disable max-len */
// import react
import React from 'react';
// import hero component
import Hero from '../../components/Hero/index.jsx';
// import Masonry
import Grid from '../../components/Grid/index.jsx';

// create and export Home page
const Home = () => (
  <>
    <Hero
      caption="Top 10 amazing things 2020 <3"
      background="https://images.unsplash.com/photo-1601907532353-3c9176919f38?ixlib=rb-1.2.1&auto=format&fit=crop&w=982&q=80"
    />
    <Grid />
  </>
);

export default Home;
