export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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

export type FinancialReports = {
  __typename?: 'FinancialReports';
  id: Scalars['ID'];
  categoryId?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  category?: Maybe<Category>;
  lang: LanguageEnum;
  title: Scalars['String'];
  subTitle: Scalars['String'];
  background?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  financialStatement?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  featureImageFullPath?: Maybe<Scalars['String']>;
  backgroundFullPath?: Maybe<Scalars['String']>;
  reportList?: Maybe<Array<ReportsModel>>;
};

export enum LanguageEnum {
  EN = 'EN',
  VI = 'VI',
}

export type MemberGeneralInfo = {
  __typename?: 'MemberGeneralInfo';
  id: Scalars['ID'];
  categoryId: Scalars['ID'];
  shortDescription?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
  category: Category;
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  titleHeading: Scalars['String'];
  subTitleHeading: Scalars['String'];
  pageUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  pageUrlPath?: Maybe<Scalars['String']>;
  backgroundPath?: Maybe<Scalars['String']>;
  featureImagePath?: Maybe<Scalars['String']>;
};

/** Category */
export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  countPage: Scalars['Int'];
  translations?: Maybe<Array<CategoryTranslations>>;
  description?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  pages: PageTranslation;
  children?: Maybe<Array<Category>>;
  parent?: Maybe<Category>;
  financials: FinancialReports;
  translation?: Maybe<CategoryTranslations>;
};

/** Node */
export type Node = {
  id: Scalars['ID'];
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  items?: Maybe<Array<Category>>;
  meta: BasePaginationMeta;
};

export type CategoryTranslations = {
  __typename?: 'CategoryTranslations';
  id: Scalars['ID'];
  cagetoryId: Scalars['ID'];
  name: Scalars['String'];
  lang: LanguageEnum;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  category: Category;
};

export type TemplateEntity = {
  __typename?: 'TemplateEntity';
  id: Scalars['ID'];
  details?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  pages?: Maybe<Array<PageTranslation>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type FundGroups = {
  __typename?: 'FundGroups';
  id: Scalars['ID'];
  translations?: Maybe<Array<FundGroupTranslations>>;
  funds?: Maybe<Array<Funds>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
  translation?: Maybe<FundGroupTranslations>;
  count?: Maybe<Scalars['Int']>;
};

export type FundGroupConnection = {
  __typename?: 'FundGroupConnection';
  items?: Maybe<Array<FundGroups>>;
  meta: BasePaginationMeta;
};

export type FundGroupTranslations = {
  __typename?: 'FundGroupTranslations';
  id: Scalars['ID'];
  fundGroupId: Scalars['ID'];
  pageTranslationId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  buttonColor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lang: LanguageEnum;
  name: Scalars['String'];
  label: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  linkUrlPath?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
};

export type FundRates = {
  __typename?: 'FundRates';
  id: Scalars['ID'];
  fundId: Scalars['ID'];
  rateDate?: Maybe<Scalars['DateTime']>;
  rateValue?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Funds = {
  __typename?: 'Funds';
  id: Scalars['ID'];
  fundGroupId?: Maybe<Scalars['ID']>;
  translations?: Maybe<Array<FundTranslations>>;
  rates?: Maybe<Array<FundRates>>;
  order: Scalars['Float'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
  fundGroup?: Maybe<FundGroups>;
  translation?: Maybe<FundTranslations>;
};

export type FundConnection = {
  __typename?: 'FundConnection';
  items?: Maybe<Array<Funds>>;
  meta: BasePaginationMeta;
};

export type FundTranslations = {
  __typename?: 'FundTranslations';
  id: Scalars['ID'];
  fundId: Scalars['ID'];
  pageTranslationId?: Maybe<Scalars['ID']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  buttonColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  moduleType: Scalars['String'];
  lang: LanguageEnum;
  urlSlug: Scalars['String'];
  name: Scalars['String'];
  label: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  urlSlugPath?: Maybe<Scalars['String']>;
  linkUrlPath?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  featureImagePath?: Maybe<Scalars['String']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type PageTranslation = {
  __typename?: 'PageTranslation';
  id: Scalars['ID'];
  pageId?: Maybe<Scalars['ID']>;
  pageTitle?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  layoutType?: Maybe<LayoutType>;
  pageLayout?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  createdBy: Scalars['ID'];
  page?: Maybe<PageEntity>;
  creator?: Maybe<User>;
  category?: Maybe<Category>;
  fundTranslations?: Maybe<Array<FundTranslations>>;
  template?: Maybe<TemplateEntity>;
  lang: LanguageEnum;
  featuredImage?: Maybe<Scalars['String']>;
  status?: Maybe<PageStatus>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pageType?: Maybe<PageType>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  hasEnLanguage?: Maybe<Scalars['Boolean']>;
  hasVnLanguage?: Maybe<Scalars['Boolean']>;
  draftVersionId?: Maybe<Scalars['String']>;
  otherVersions?: Maybe<Array<PageTranslation>>;
  isDraft?: Maybe<Scalars['Boolean']>;
  fullPath?: Maybe<Scalars['String']>;
  mediumImage?: Maybe<Scalars['String']>;
  lowQualityImage?: Maybe<Scalars['String']>;
  thumbImage?: Maybe<Scalars['String']>;
};

export enum LayoutType {
  BUILDER = 'BUILDER',
  UPLOAD = 'UPLOAD',
}

export enum PageStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

export enum PageType {
  HOME = 'HOME',
  PAGE = 'PAGE',
}

export type PageTransConnection = {
  __typename?: 'PageTransConnection';
  items?: Maybe<Array<PageTranslation>>;
  meta: BasePaginationMeta;
};

export type Members = {
  __typename?: 'Members';
  id: Scalars['ID'];
  translations?: Maybe<Array<MemberTranslation>>;
  order: Scalars['Float'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
  translation?: Maybe<MemberTranslation>;
};

export type MemberTranslation = {
  __typename?: 'MemberTranslation';
  id: Scalars['ID'];
  memberId: Scalars['ID'];
  quote?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  lang: LanguageEnum;
  urlSlug: Scalars['String'];
  photo: Scalars['String'];
  fullname: Scalars['String'];
  position: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  urlSlugPath?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  featureImagePath?: Maybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Members>>;
  username: Scalars['String'];
  email: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  userType: UserType;
  defaultLanguage: LanguageEnum;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<RoleType>;
  pages: Array<PageTranslation>;
  fullName?: Maybe<Scalars['String']>;
};

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum RoleType {
  ADMIN = 'ADMIN',
  SUBADMIN = 'SUBADMIN',
  EDITOR = 'EDITOR',
}

export type UserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<User>>;
  meta: BasePaginationMeta;
};

export type LogoutModel = {
  __typename?: 'LogoutModel';
  isDeleted: Scalars['Boolean'];
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
  fullPath?: Maybe<Scalars['String']>;
  thumbImage?: Maybe<Scalars['String']>;
  mediumImage?: Maybe<Scalars['String']>;
  originImage?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  uploadBy: Scalars['ID'];
  fileName: Scalars['String'];
  name: Scalars['String'];
  filePath?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  fileType?: Maybe<FileType>;
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  uploadType: UploadType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  owner?: Maybe<User>;
  capabilities?: Maybe<MediaCapability>;
};

export enum FileType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE',
}

export enum UploadType {
  FILE = 'FILE',
  DIR = 'DIR',
}

export type MediaConnection = {
  __typename?: 'MediaConnection';
  items?: Maybe<Array<Media>>;
  meta: BasePaginationMeta;
};

export type DeleteMedia = {
  __typename?: 'DeleteMedia';
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
};

export type MediaCapability = {
  __typename?: 'MediaCapability';
  canCopy?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
  canDownload?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canRename?: Maybe<Scalars['Boolean']>;
};

export type BranchTypes = {
  __typename?: 'BranchTypes';
  id: Scalars['ID'];
  translations?: Maybe<Array<BranchTypeTranslations>>;
  branches?: Maybe<Array<Branches>>;
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  translation?: Maybe<BranchTypeTranslations>;
};

export type BranchTypeTranslations = {
  __typename?: 'BranchTypeTranslations';
  id: Scalars['ID'];
  branchTypeId: Scalars['ID'];
  name: Scalars['String'];
  lang: LanguageEnum;
};

export type Branches = {
  __typename?: 'Branches';
  id: Scalars['ID'];
  branchTypeId?: Maybe<Scalars['ID']>;
  translations?: Maybe<Array<BranchTranslations>>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  province?: Maybe<Provinces>;
  district?: Maybe<Districts>;
  ward?: Maybe<Wards>;
  branchType: BranchTypes;
  translation?: Maybe<BranchTranslations>;
};

export type BranchConnection = {
  __typename?: 'BranchConnection';
  items?: Maybe<Array<Branches>>;
  meta: BasePaginationMeta;
};

export type BranchTranslations = {
  __typename?: 'BranchTranslations';
  id: Scalars['ID'];
  branchId: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['String'];
  lang: LanguageEnum;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Wards = {
  __typename?: 'Wards';
  id: Scalars['ID'];
  name: Scalars['String'];
  prefix: Scalars['String'];
  district: Districts;
  province: Provinces;
};

export type Districts = {
  __typename?: 'Districts';
  id: Scalars['ID'];
  name: Scalars['String'];
  prefix: Scalars['String'];
  province: Provinces;
  wards: Array<Wards>;
};

export type Provinces = {
  __typename?: 'Provinces';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  districts: Array<Districts>;
};

export type FundGeneralInfo = {
  __typename?: 'FundGeneralInfo';
  id: Scalars['ID'];
  categoryId: Scalars['ID'];
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
  category: Category;
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  pageUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  pageUrlPath?: Maybe<Scalars['String']>;
  backgroundPath?: Maybe<Scalars['String']>;
  featureImagePath?: Maybe<Scalars['String']>;
};

export type BlogGeneralInfo = {
  __typename?: 'BlogGeneralInfo';
  id: Scalars['ID'];
  categoryId: Scalars['ID'];
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
  category: Category;
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  pageUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  pageUrlPath?: Maybe<Scalars['String']>;
  backgroundPath?: Maybe<Scalars['String']>;
  featureImagePath?: Maybe<Scalars['String']>;
};

export type MenuModel = {
  __typename?: 'MenuModel';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  megaMenu?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<MenuModel>>;
};

export type SiteMapModel = {
  __typename?: 'SiteMapModel';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<SiteMapModel>>;
};

export type FooterModel = {
  __typename?: 'FooterModel';
  id: Scalars['ID'];
  logo: Scalars['String'];
  address: Scalars['String'];
  hotline: Scalars['String'];
  email: Scalars['String'];
  lang: LanguageEnum;
  sns?: Maybe<Array<FieldModel>>;
  shortcuts?: Maybe<Array<FieldModel>>;
  logoPath?: Maybe<Scalars['String']>;
};

export type FieldModel = {
  __typename?: 'FieldModel';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type HeaderModel = {
  __typename?: 'HeaderModel';
  id: Scalars['ID'];
  partners?: Maybe<Array<PartnerModel>>;
  lang: LanguageEnum;
  logo: Scalars['String'];
  hotline: Scalars['String'];
  buttonName: Scalars['String'];
  buttonURL: Scalars['String'];
  buttonBorderColor: Scalars['String'];
  buttonNameColor: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullPath?: Maybe<Scalars['String']>;
};

export type PartnerModel = {
  __typename?: 'PartnerModel';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type SearchResultModel = {
  __typename?: 'SearchResultModel';
  id: Scalars['ID'];
  moduleType: ModuleType;
  pageTitle: Scalars['String'];
  urlSlug: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export enum ModuleType {
  PRODUCT = 'PRODUCT',
  FUND = 'FUND',
  PRMOTION = 'PRMOTION',
  PRESS = 'PRESS',
  BLOG = 'BLOG',
  BRANDING = 'BRANDING',
  CSR = 'CSR',
}

export type SearchConnection = {
  __typename?: 'SearchConnection';
  items?: Maybe<Array<SearchResultModel>>;
  meta: BasePaginationMeta;
};

export type ReportsModel = {
  __typename?: 'ReportsModel';
  year?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  fileFullPath?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<UserConnection>;
  me: User;
  /** assets management */
  medias?: Maybe<MediaConnection>;
  /** media detail */
  media?: Maybe<Media>;
  /** Get Home Menu */
  getHomeMenu: Array<MenuModel>;
  /** Get Home Menu */
  menuHome: Array<SiteMapModel>;
  /** Get Paging Category */
  getPagingCategory?: Maybe<CategoryConnection>;
  /** Get all Category */
  getAllCategory?: Maybe<Array<Category>>;
  /** Get details Category */
  getDetailsCategory?: Maybe<Category>;
  /** Get all Page */
  getAllPage: Array<PageTranslation>;
  /** Get list all Pages with search sort filter */
  pages: PageTransConnection;
  /** Get page detail */
  page: PageTranslation;
  /** Get page detail by slug */
  pageBySlug: PageTranslation;
  /** Count total trash page */
  countPageTrash: Scalars['Float'];
  /** get published home page */
  homePage: PageTranslation;
  /** list page by lang and not paginate */
  pageList: Array<PageTranslation>;
  /** check unique slug */
  checkUniqueSlug: Scalars['Boolean'];
  /** Get all province */
  provinces: Array<Provinces>;
  /** Get details province */
  province?: Maybe<Provinces>;
  /** Get all district */
  districts: Array<Districts>;
  /** Get details district */
  district?: Maybe<Districts>;
  /** Get all wards */
  wards: Array<Wards>;
  /** Get details ward */
  ward?: Maybe<Wards>;
  /** Get branches */
  branches: Array<Branches>;
  /** Get branchTypes */
  branchTypes: Array<BranchTypes>;
  /** Get branch */
  branch?: Maybe<Branches>;
  /** Get Paging Branch */
  getPagingBranch?: Maybe<BranchConnection>;
  /** Get Site Map */
  sitemaps: Array<SiteMapModel>;
  /** Get footer */
  footer?: Maybe<FooterModel>;
  /** Get footer for homepage */
  footerHome?: Maybe<FooterModel>;
  /** Get header detail */
  header?: Maybe<HeaderModel>;
  /** Get header for homepage */
  headerHome?: Maybe<HeaderModel>;
  /** Get members */
  members?: Maybe<Array<Members>>;
  /** Get member details */
  member?: Maybe<Members>;
  /** Get member general info */
  memberGeneralInfo?: Maybe<MemberGeneralInfo>;
  /** Get admin member general info */
  adminMemberGeneralInfo?: Maybe<MemberGeneralInfo>;
  /** Get fund general info */
  fundGeneralInfo?: Maybe<FundGeneralInfo>;
  /** Get admin fund general info */
  adminFundGeneralInfo?: Maybe<FundGeneralInfo>;
  /** Get funds */
  funds?: Maybe<Array<Funds>>;
  /** Get paging funds */
  getPagingFund?: Maybe<FundConnection>;
  /** Get fund details */
  fund?: Maybe<Funds>;
  /** Get fundGroups */
  fundGroups?: Maybe<Array<FundGroups>>;
  /** Get paging fund groups */
  getPagingFundGroup?: Maybe<FundGroupConnection>;
  /** Get fund group details */
  fundGroup?: Maybe<FundGroups>;
  /** Search suggestion, return max 5 records */
  searchSuggestion: Array<SearchResultModel>;
  /** Search all Product/Fund/Promotion/Press/Blog/Branding campaign/CSR */
  searchAll: SearchConnection;
  /** Get financial detail */
  financial: FinancialReports;
  /** Get financial detail */
  reportList: Array<ReportsModel>;
};

export type QuerymediasArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sorts?: Maybe<Array<SortInput>>;
  fileType?: Maybe<FileType>;
  uploadDateFrom?: Maybe<Scalars['String']>;
  uploadDateTo?: Maybe<Scalars['String']>;
};

export type QuerymediaArgs = {
  id: Scalars['ID'];
};

export type QuerygetHomeMenuArgs = {
  lang: LanguageEnum;
};

export type QuerygetPagingCategoryArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type QuerygetDetailsCategoryArgs = {
  id: Scalars['ID'];
};

export type QuerypagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  sorts?: Maybe<Array<SortInput>>;
  category?: Maybe<Scalars['String']>;
  createdDateFrom?: Maybe<Scalars['String']>;
  createdDateTo?: Maybe<Scalars['String']>;
  pageIds?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<LanguageEnum>;
  status?: Maybe<PageStatus>;
  pageType: PageType;
};

export type QuerypageArgs = {
  id: Scalars['String'];
};

export type QuerypageBySlugArgs = {
  isPreview?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type QuerycountPageTrashArgs = {
  pageType: PageType;
};

export type QuerypageListArgs = {
  pageId?: Maybe<Scalars['ID']>;
  pageType?: Maybe<PageType>;
  search?: Maybe<Scalars['String']>;
  lang?: Maybe<LanguageEnum>;
};

export type QuerycheckUniqueSlugArgs = {
  input: CheckSlugInput;
};

export type QueryprovincesArgs = {
  search?: Maybe<Scalars['String']>;
};

export type QueryprovinceArgs = {
  id: Scalars['ID'];
};

export type QuerydistrictsArgs = {
  provinceId?: Maybe<Scalars['ID']>;
  search?: Maybe<Scalars['String']>;
};

export type QuerydistrictArgs = {
  id: Scalars['ID'];
};

export type QuerywardsArgs = {
  districtId?: Maybe<Scalars['ID']>;
  search?: Maybe<Scalars['String']>;
};

export type QuerywardArgs = {
  id: Scalars['ID'];
};

export type QuerybranchesArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  provinceId?: Maybe<Scalars['ID']>;
  branchTypeId?: Maybe<Scalars['ID']>;
  districtId?: Maybe<Scalars['ID']>;
  wardId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QuerybranchArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QuerygetPagingBranchArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  provinceId?: Maybe<Scalars['ID']>;
  branchTypeId?: Maybe<Scalars['ID']>;
  districtId?: Maybe<Scalars['ID']>;
  wardId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QuerysitemapsArgs = {
  lang: LanguageEnum;
};

export type QueryfooterArgs = {
  lang: LanguageEnum;
};

export type QueryheaderArgs = {
  lang: LanguageEnum;
};

export type QuerymemberArgs = {
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type QueryadminMemberGeneralInfoArgs = {
  lang: LanguageEnum;
};

export type QueryadminFundGeneralInfoArgs = {
  lang: LanguageEnum;
};

export type QuerygetPagingFundArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  fundGroupId?: Maybe<Scalars['ID']>;
};

export type QueryfundArgs = {
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type QuerygetPagingFundGroupArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryfundGroupArgs = {
  id: Scalars['ID'];
};

export type QuerysearchSuggestionArgs = {
  moduleType?: Maybe<ModuleType>;
  keyword: Scalars['String'];
};

export type QuerysearchAllArgs = {
  moduleType?: Maybe<ModuleType>;
  keyword: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryfinancialArgs = {
  lang: LanguageEnum;
};

export type SortInput = {
  field: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
};

/** check Unique slug */
export type CheckSlugInput = {
  id?: Maybe<Scalars['ID']>;
  urlSlug: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  sendMail: Scalars['Boolean'];
  login: AuthConnection;
  logout: LogoutModel;
  uploadMedia: Media;
  uploadMediaToS3: Media;
  deleteMedia: DeleteMedia;
  updateMedia: Media;
  /** create directory */
  createDirectory: Media;
  /** Create Or Update Home Menu */
  createOrUpdateHomeMenu: Array<MenuModel>;
  /** Create new Category */
  createCategory?: Maybe<Category>;
  /** Edit Category */
  editCategory?: Maybe<Category>;
  /** Delete Category */
  deleteCategory?: Maybe<Scalars['Boolean']>;
  /** Create a new page */
  createPage: PageTranslation;
  /** Edit page layout */
  editPageLayout: PageTranslation;
  /** Soft delete page */
  movePageToTrash: PageTranslation;
  /** Delete/Restore page */
  actionPage: PageTranslation;
  /** Edit page: general infors and seo configures */
  editPage: PageTranslation;
  /** Edit page: general infors and seo configures */
  clonePage: PageTranslation;
  /** Create new Branch */
  createBranch?: Maybe<Branches>;
  /** Edit Branch */
  editBranch?: Maybe<Branches>;
  /** Delete Branch */
  deleteBranch?: Maybe<Scalars['Boolean']>;
  /** Create Or Update Site Map */
  createOrUpdateSiteMap: Array<SiteMapModel>;
  /** Create or Update footer */
  createOrUpdateFooter?: Maybe<FooterModel>;
  /** Create or Update header */
  headerSetting?: Maybe<HeaderModel>;
  /** Create member */
  createOrUpdateMember?: Maybe<Members>;
  /** reOrderMembers */
  reOrderMembers?: Maybe<Array<Members>>;
  /** Delete Member */
  deleteMember?: Maybe<Scalars['Boolean']>;
  /** createOrUpdateMemberGeneralInfo */
  createOrUpdateMemberGeneralInfo?: Maybe<MemberGeneralInfo>;
  /** createOrUpdateFundGeneralInfo */
  createOrUpdateFundGeneralInfo?: Maybe<FundGeneralInfo>;
  /** createOrUpdateFund */
  createOrUpdateFund?: Maybe<Funds>;
  /** Delete Fund */
  deleteFund?: Maybe<Scalars['Boolean']>;
  /** createOrUpdateFundGroup */
  createOrUpdateFundGroup?: Maybe<FundGroups>;
  /** Delete Fund Group */
  deleteFundGroup?: Maybe<Scalars['Boolean']>;
  /** Create new or update financial report language version */
  upsertFinancial: FinancialReports;
  /** createOrUpdateBlogGeneralInfo */
  createOrUpdateBlogGeneralInfo?: Maybe<BlogGeneralInfo>;
};

export type MutationcreateUserArgs = {
  input: NewUserInput;
};

export type MutationloginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationuploadMediaArgs = {
  provider?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationuploadMediaToS3Args = {
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationdeleteMediaArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationupdateMediaArgs = {
  input: UpdateMediaInput;
};

export type MutationcreateDirectoryArgs = {
  parentId?: Maybe<Scalars['ID']>;
  dirName: Scalars['String'];
};

export type MutationcreateOrUpdateHomeMenuArgs = {
  lang: LanguageEnum;
  input: Array<HomeMenuInput>;
};

export type MutationcreateCategoryArgs = {
  input: NewCategoryInput;
};

export type MutationeditCategoryArgs = {
  input: EditCategoryInput;
};

export type MutationdeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationcreatePageArgs = {
  input: NewPageTransInput;
};

export type MutationeditPageLayoutArgs = {
  input: EditPageLayout;
};

export type MutationmovePageToTrashArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationactionPageArgs = {
  action?: Maybe<ActionPage>;
  id?: Maybe<Scalars['ID']>;
};

export type MutationeditPageArgs = {
  input: EditPageInput;
};

export type MutationclonePageArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationcreateBranchArgs = {
  input: NewBranchInput;
};

export type MutationeditBranchArgs = {
  input: EditBranchInput;
};

export type MutationdeleteBranchArgs = {
  id: Scalars['ID'];
};

export type MutationcreateOrUpdateSiteMapArgs = {
  lang: LanguageEnum;
  input: Array<SiteMapInput>;
};

export type MutationcreateOrUpdateFooterArgs = {
  input: FooterInput;
};

export type MutationheaderSettingArgs = {
  input: HeaderInput;
};

export type MutationcreateOrUpdateMemberArgs = {
  input: NewMemberInput;
};

export type MutationreOrderMembersArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationdeleteMemberArgs = {
  id: Scalars['ID'];
};

export type MutationcreateOrUpdateMemberGeneralInfoArgs = {
  input: MemberGeneralInfoInput;
};

export type MutationcreateOrUpdateFundGeneralInfoArgs = {
  input: FundGeneralInfoInput;
};

export type MutationcreateOrUpdateFundArgs = {
  input: NewFundInput;
};

export type MutationdeleteFundArgs = {
  id: Scalars['ID'];
};

export type MutationcreateOrUpdateFundGroupArgs = {
  input: NewFundGroupInput;
};

export type MutationdeleteFundGroupArgs = {
  id: Scalars['ID'];
};

export type MutationupsertFinancialArgs = {
  input: FinancialInput;
};

export type MutationcreateOrUpdateBlogGeneralInfoArgs = {
  input: BlogGeneralInfoInput;
};

export type NewUserInput = {
  role?: Maybe<RoleType>;
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UpdateMediaInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Input array home menu */
export type HomeMenuInput = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['ID']>;
  icon?: Maybe<Scalars['String']>;
  megaMenu?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<HomeMenuInput>>;
};

/** Input New Category */
export type NewCategoryInput = {
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  translations: Array<CategoryTranslationInput>;
};

/** Input New Category Translation */
export type CategoryTranslationInput = {
  name: Scalars['String'];
  lang: LanguageEnum;
};

/** Input Edit Category */
export type EditCategoryInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  translations: Array<CategoryTranslationInput>;
};

/** create new translation page */
export type NewPageTransInput = {
  featuredImage?: Maybe<Scalars['String']>;
  lang?: Maybe<LanguageEnum>;
  pageTitle: Scalars['String'];
  categoryId?: Maybe<Scalars['ID']>;
  urlSlug: Scalars['String'];
  pageId?: Maybe<Scalars['ID']>;
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeyword: Array<Scalars['String']>;
  templateId?: Maybe<Scalars['ID']>;
  pageLayout?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  status?: Maybe<PageStatus>;
  layoutType?: Maybe<LayoutType>;
};

/** Edit Page Layout */
export type EditPageLayout = {
  id: Scalars['ID'];
  pageLayout: Scalars['String'];
  status: PageStatus;
};

export enum ActionPage {
  DELETE = 'DELETE',
  RESTORE = 'RESTORE',
}

/** Input Edit Page Translation */
export type EditPageInput = {
  featuredImage?: Maybe<Scalars['String']>;
  lang?: Maybe<LanguageEnum>;
  pageTitle: Scalars['String'];
  categoryId?: Maybe<Scalars['ID']>;
  urlSlug: Scalars['String'];
  pageId?: Maybe<Scalars['ID']>;
  seoTitle: Scalars['String'];
  seoDescription: Scalars['String'];
  seoKeyword: Array<Scalars['String']>;
  templateId?: Maybe<Scalars['ID']>;
  pageLayout?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  status?: Maybe<PageStatus>;
  layoutType?: Maybe<LayoutType>;
  id: Scalars['ID'];
};

/** Input New Branch */
export type NewBranchInput = {
  branchTypeId: Scalars['ID'];
  translations: Array<BranchTranslationInput>;
  lat: Scalars['String'];
  lon: Scalars['String'];
  phone: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
  provinceId?: Maybe<Scalars['ID']>;
  districtId?: Maybe<Scalars['ID']>;
  wardId?: Maybe<Scalars['ID']>;
};

/** Input Translation Branch */
export type BranchTranslationInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  lang: LanguageEnum;
};

/** Input Edit Branch */
export type EditBranchInput = {
  branchTypeId: Scalars['ID'];
  translations: Array<BranchTranslationInput>;
  lat: Scalars['String'];
  lon: Scalars['String'];
  phone: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
  provinceId?: Maybe<Scalars['ID']>;
  districtId?: Maybe<Scalars['ID']>;
  wardId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

/** Input array site map */
export type SiteMapInput = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<SiteMapInput>>;
};

/** Input footer */
export type FooterInput = {
  logo: Scalars['String'];
  address: Scalars['String'];
  hotline: Scalars['String'];
  email: Scalars['String'];
  lang: LanguageEnum;
  sns?: Maybe<Array<FieldInput>>;
  shortcuts?: Maybe<Array<FieldInput>>;
};

export type FieldInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

/** Header input */
export type HeaderInput = {
  lang: LanguageEnum;
  logo?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<PartnerInput>>;
  hotline?: Maybe<Scalars['String']>;
  buttonName?: Maybe<Scalars['String']>;
  buttonURL?: Maybe<Scalars['String']>;
  buttonBorderColor?: Maybe<Scalars['String']>;
  buttonNameColor?: Maybe<Scalars['String']>;
};

export type PartnerInput = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

/** Input new member */
export type NewMemberInput = {
  memberId?: Maybe<Scalars['ID']>;
  lang: LanguageEnum;
  urlSlug: Scalars['String'];
  photo: Scalars['String'];
  fullname: Scalars['String'];
  position: Scalars['String'];
  quote?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
};

/** Input Member General Info */
export type MemberGeneralInfoInput = {
  categoryId: Scalars['ID'];
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  titleHeading: Scalars['String'];
  subTitleHeading: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
};

/** Input Fund General Info */
export type FundGeneralInfoInput = {
  categoryId: Scalars['ID'];
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
};

/** Input new fund */
export type NewFundInput = {
  fundId?: Maybe<Scalars['ID']>;
  pageTranslationId?: Maybe<Scalars['ID']>;
  fundGroupId?: Maybe<Scalars['ID']>;
  lang: LanguageEnum;
  urlSlug: Scalars['String'];
  name: Scalars['String'];
  label: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  buttonColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
};

/** Input new fund group */
export type NewFundGroupInput = {
  fundGroupId?: Maybe<Scalars['ID']>;
  pageTranslationId?: Maybe<Scalars['ID']>;
  lang: LanguageEnum;
  name: Scalars['String'];
  label: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  buttonColor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  fundIds: Array<Scalars['String']>;
};

/** Financial input */
export type FinancialInput = {
  lang: LanguageEnum;
  categoryId: Scalars['ID'];
  title: Scalars['String'];
  subTitle: Scalars['String'];
  background?: Maybe<Scalars['String']>;
  seoPageTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
  financialStatement: Array<FinancialStatementInput>;
};

/** Financial Statement input */
export type FinancialStatementInput = {
  year: Scalars['String'];
  file: Scalars['String'];
  fileFullPath?: Maybe<Scalars['String']>;
};

/** Input Blog General Info */
export type BlogGeneralInfoInput = {
  categoryId: Scalars['ID'];
  lang: LanguageEnum;
  title: Scalars['String'];
  background: Scalars['String'];
  seoPageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  seoKeyword?: Maybe<Array<Scalars['String']>>;
  featureImage?: Maybe<Scalars['String']>;
};
