import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/helpers/app.routes';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      Go to <Link to={AppRoutes.home}>Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
