import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { initializeApollo } from 'src/apollo/apollo';
import type { ApolloPageProps } from 'src/types';

export const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={'KLC'} canonical="/" />
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<ApolloPageProps> = async () => {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
