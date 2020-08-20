import * as Types from '../type.interface';

import gql from 'graphql-tag';

export type UserFragmentFragment = { __typename?: 'User' } & Pick<
  Types.User,
  | 'id'
  | 'firstName'
  | 'username'
  | 'email'
  | 'lastName'
  | 'isActive'
  | 'userType'
  | 'defaultLanguage'
  | 'createdAt'
  | 'updatedAt'
  | 'isDeleted'
  | 'deletedAt'
  | 'role'
  | 'fullName'
>;

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    firstName
    username
    email
    lastName
    isActive
    userType
    defaultLanguage
    createdAt
    updatedAt
    isDeleted
    deletedAt
    role
    fullName
  }
`;
