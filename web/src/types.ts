import { NormalizedCacheObject } from '@apollo/client';

export type ApolloPageProps = { initialApolloState: NormalizedCacheObject; lang?: string; [key: string]: any };
