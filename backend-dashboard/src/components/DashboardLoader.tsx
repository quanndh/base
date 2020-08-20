import React from 'react';
import ContentLoader from 'react-content-loader';

const DashboardLoader = (props: React.ComponentProps<typeof ContentLoader>) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={800}
    viewBox="0 0 1200 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="208" height="800" />
  </ContentLoader>
);

export default DashboardLoader;
