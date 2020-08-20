import React from 'react';
import { Helmet } from 'react-helmet';
import CategoryUpdateContainer from 'src/modules/categories/Actions/index';

const CategoryEditPage: React.SFC = React.memo(() => {
  const type = 'edit-category';
  return (
    <>
      <Helmet title="Update Category" />
      <CategoryUpdateContainer typeCategory={type} />
    </>
  );
});

export default CategoryEditPage;
