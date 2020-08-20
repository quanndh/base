import React from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from 'src/apollo/apollo';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import SEO from '../next-seo.config';
import { pageview, event } from 'src/helpers/gtag';
import { GlobalStyle } from 'src/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import { Reset } from 'src/styles/Reset';
import { Normalize } from 'src/styles/Normalize';

dayjs.extend(localizedFormat);
dayjs.locale('vi');

type NextWebVitalsMetrics = {
  id: string;
  label: 'web-vital' | 'custom' | string;
  name:
    | 'FCP'
    | 'LCP'
    | 'CLS'
    | 'FID'
    | 'TTFB'
    | 'Next.js-hydration'
    | 'Next.js-route-change-to-render'
    | 'Next.js-render';
  startTime: number;
  value: number;
};
export function reportWebVitals(metric: NextWebVitalsMetrics) {
  const { id, name, label, value } = metric;
  // These metrics can be sent to any analytics service
  event(name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}

function RootApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState as NormalizedCacheObject,
    lang: pageProps.lang,
  });
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <>
          <Reset />
          <Normalize />
          <GlobalStyle />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default RootApp;
