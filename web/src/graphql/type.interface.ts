export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BasePaginationMeta = {
  __typename?: 'BasePaginationMeta';
  itemCount: Scalars['Float'];
  totalItems: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalPages: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  roles?: Maybe<Array<Scalars['String']>>;
  fullName?: Maybe<Scalars['String']>;
};

/** Node */
export type Node = {
  id: Scalars['ID'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<User>>;
  meta: BasePaginationMeta;
};

/** AuthConnection */
export type AuthConnection = {
  __typename?: 'AuthConnection';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Media = Node & {
  __typename?: 'Media';
  id: Scalars['ID'];
  fileSize?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  filePath?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Boolean'];
  ownerId?: Maybe<Scalars['String']>;
  type: FileType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  owner?: Maybe<User>;
  capabilities?: Maybe<MediaCapability>;
};

export enum FileType {
  FILE = 'FILE',
  DIR = 'DIR',
}

export type MediaConnection = {
  __typename?: 'MediaConnection';
  items?: Maybe<Array<Media>>;
  meta: BasePaginationMeta;
};

export type MediaCapability = {
  __typename?: 'MediaCapability';
  canCopy?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
  canDownload?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canRename?: Maybe<Scalars['Boolean']>;
};

export type Sample = Node & {
  __typename?: 'Sample';
  id: Scalars['ID'];
  views: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  isPublished: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<UserConnection>;
  me: User;
  medias?: Maybe<MediaConnection>;
};

export type QueryMediasArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  sendMail: Scalars['Boolean'];
  login: AuthConnection;
  uploadMedia: Media;
  uploadMediaToS3: Media;
  removeMedia: Media;
  updateMedia: Media;
  createDir: Media;
};

export type MutationCreateUserArgs = {
  input: NewUserInput;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationUploadMediaArgs = {
  provider?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationUploadMediaToS3Args = {
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationRemoveMediaArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationUpdateMediaArgs = {
  input: UpdateMediaInput;
};

export type MutationCreateDirArgs = {
  parentId?: Maybe<Scalars['ID']>;
  dirName: Scalars['String'];
};

export type NewUserInput = {
  age?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
};

export type UpdateMediaInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};
