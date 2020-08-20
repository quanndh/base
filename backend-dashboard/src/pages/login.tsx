import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { Helmet } from 'react-helmet';
import LoginContainer from 'src/modules/accounts/Login/index';

const LoginPage: React.SFC = memo(() => {
  const history = useHistory();
  const user = useCurrentUser();
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <>
      <Helmet title="Login" />
      <LoginContainer />
    </>
  );
});

export default LoginPage;
