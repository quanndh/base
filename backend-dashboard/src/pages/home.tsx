import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage: React.SFC = React.memo(() => {
  return (
    <>
      <Helmet title="Home management" />
      <h4>Home Page</h4>
    </>
  );
});

export default HomePage;
