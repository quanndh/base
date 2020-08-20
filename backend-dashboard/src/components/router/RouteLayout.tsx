import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useAuthenticated } from 'src/hooks/useAuthenticated';
import { AppRoutes } from 'src/helpers/app.routes';

type Props = {
  layout?: React.ComponentType<any>;
  isPrivate?: boolean;
  redirect?: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
} & RouteProps;

export const RouteLayout: React.FC<Props> = ({
  layout: Layout,
  component: Component,
  isPrivate,
  redirect,
  ...props
}) => {
  const isAuthenticated = useAuthenticated();
  if (!isAuthenticated && isPrivate) return <Redirect to={redirect ?? AppRoutes.login} />;
  return (
    <Route
      {...props}
      render={(ownProps) => {
        if (Layout)
          return (
            <Layout>
              <Component {...ownProps} />
            </Layout>
          );
        return <Component {...ownProps} />;
      }}
    />
  );
};

export default RouteLayout;

RouteLayout.defaultProps = {
  isPrivate: true,
};
