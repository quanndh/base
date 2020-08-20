import { ApolloError } from '@apollo/client';
import { notification } from 'antd';
import flatten from 'flat';
//import { useTranslation } from 'react-i18next';

interface KeyErrors {
  [key: string]: string;
}

export enum NetworkStatusCode {
  SUCCESS = 200,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
}
export const useApolloError = () => {
  //const { t } = useTranslation();
  function defaultErrorHandleWithNotification(error: ApolloError) {
    error.graphQLErrors.forEach((graphqlError) => {
      notification.error({
        message: graphqlError.extensions?.title || graphqlError.message,
        description: graphqlError.message,
      });
    });
  }

  function apolloErrors(error: ApolloError, keys: KeyErrors = {}) {
    if (error?.graphQLErrors.length > 0) {
      error.graphQLErrors.forEach((graphqlError) => {
        const error: KeyErrors = flatten(graphqlError.extensions);
        const errorKey = Object.values(keys).find((v) => typeof error[v] !== 'undefined');
        const content = errorKey ? error[errorKey] : undefined;
        notification.error({
          message: content || graphqlError.message,
        });
      });
    } else {
      notification.error({
        // message: error.networkError?.message,
        message: 'Something went wrong!',
      });
    }
  }

  function getApolloErrorStatus(error?: ApolloError) {
    if (!error) return NetworkStatusCode.SUCCESS;
    return error?.graphQLErrors?.[0]?.extensions?.exception.status as NetworkStatusCode;
  }

  return { defaultErrorHandleWithNotification, apolloErrors, getApolloErrorStatus };
};
