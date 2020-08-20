import { MeDocument, MeQueryResponse } from 'src/graphql/queries/me.generated';
import { useApolloClient } from '@apollo/client';

export const useCurrentUser = () => {
  const client = useApolloClient();
  try {
    const data = client.readQuery<MeQueryResponse>({
      query: MeDocument,
    });
    return data?.me;
  } catch {
    return undefined;
  }
};
