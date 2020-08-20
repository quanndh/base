import React, { memo, Suspense } from 'react';
import { RootRouter } from './routes';
import { useMeQuery } from 'src/graphql/queries/me.generated';
import DashboardLoader from './components/DashboardLoader';

const App: React.SFC = memo(() => {
  const { loading } = useMeQuery({
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });
  if (loading) return <DashboardLoader />;
  return (
    <Suspense fallback={<DashboardLoader />}>
      <RootRouter />
    </Suspense>
  );
});

export default App;
