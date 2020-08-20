import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RouteLayout from './components/router/RouteLayout';
import MainLayout from './layouts/Main';
import Blank from './layouts/Blank';
import { AppRoutes } from './helpers/app.routes';
import LoginPage from './pages/login';

const Page = {
  home: React.lazy(() => import('./pages/home')),
  html: React.lazy(() => import('./pages/html')),
};

const Page404 = React.lazy(() => import('src/components/Errors/404/404'));
const Page500 = React.lazy(() => import('src/components/Errors/500/500'));

const Category = {
  list: React.lazy(() => import('./pages/category/category')),
  create: React.lazy(() => import('./pages/category/create')),
  edit: React.lazy(() => import('./pages/category/edit')),
};
export const RootRouter = memo(() => {
  return (
    <Switch>
      <Route path={AppRoutes.login} component={LoginPage} exact />

      <RouteLayout path={AppRoutes.category} component={Category.list} exact layout={MainLayout} />
      <RouteLayout path={AppRoutes.categoryCreate} component={Category.create} exact layout={MainLayout} />
      <RouteLayout path={AppRoutes.categoryEdit} component={Category.edit} exact layout={MainLayout} />

      <RouteLayout path={AppRoutes.home} component={Page.home} layout={Blank} exact />
      <RouteLayout path={AppRoutes.html} component={Page.html} layout={Blank} exact />

      <Route path={AppRoutes.page404} component={Page404} exact />
      <Route path={AppRoutes.page500} component={Page500} exact />
      <Redirect path="/" to={AppRoutes.home} />
      <Redirect path="*" to={AppRoutes.page404} />
    </Switch>
  );
});
