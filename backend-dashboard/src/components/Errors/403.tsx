import React, { memo, SFC } from 'react';
import { Button, Result } from 'antd';
import { AppRoutes } from 'src/helpers/app.routes';

const Error403: SFC = memo(() => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" href={AppRoutes.home}>
          Back Home
        </Button>
      }
    />
  );
});

export default Error403;
