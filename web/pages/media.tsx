import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { initializeApollo } from 'src/apollo/apollo';
import type { ApolloPageProps } from 'src/types';
import { MediasDocument, useMediasQuery } from 'src/graphql/queries/medias.generated';
import type { MediasQueryVariables } from 'src/graphql/queries/medias.generated';

export const MediaPage: NextPage = () => {
  const { data } = useMediasQuery();
  return (
    <>
      <NextSeo title={'Media'} canonical="/media" />
      <h1>Media</h1>
      <ul>
        {data?.medias?.items?.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MediaPage;

export const getStaticProps: GetStaticProps<ApolloPageProps> = async () => {
  const apolloClient = initializeApollo();
  try {
    await Promise.allSettled([
      apolloClient.query<unknown, MediasQueryVariables>({
        query: MediasDocument,
      }),
    ]);
  } catch {
    //
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
