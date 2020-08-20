import React from 'react';
import { Helmet } from 'react-helmet';
import CategoryContainer from 'src/modules/categories/index';

const CategoryPage: React.SFC = React.memo(() => {
  return (
    <>
      <Helmet title="Categories" />
      <CategoryContainer />
    </>
  );
});

export default CategoryPage;
