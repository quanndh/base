import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'src/helpers/app.routes';

const HtmlPage: React.SFC = React.memo(() => {
  return (
    <ul>
      <li>
        <NavLink to={AppRoutes.about}>List 1</NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.about}>List 2</NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.about}>List 3</NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.about}>List 4</NavLink>
      </li>
    </ul>
  );
});

export default HtmlPage;
