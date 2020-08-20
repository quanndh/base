import React from 'react';
import { Helmet } from 'react-helmet';
import CategoryCreateContainer from 'src/modules/categories/Actions/index';

const CategoryCreatePage: React.SFC = React.memo(() => {
  return (
    <>
      <Helmet title="Create Category" />
      <CategoryCreateContainer />
    </>
  );
});

export default CategoryCreatePage;
