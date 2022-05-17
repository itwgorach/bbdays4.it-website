/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly trailingSlash: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI__MEDIA = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI__MEDIAFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly localFile: Maybe<File>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI__MEDIA_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI__MEDIA_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI__MEDIAFormats = {
  readonly small: Maybe<STRAPI__MEDIAFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnail>;
  readonly large: Maybe<STRAPI__MEDIAFormatsLarge>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMedium>;
};

type STRAPI__MEDIAFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsSmallProvider_metadata>;
};

type STRAPI__MEDIAFormatsSmallProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI__MEDIAFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsThumbnailProvider_metadata>;
};

type STRAPI__MEDIAFormatsThumbnailProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI__MEDIAFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsLargeProvider_metadata>;
};

type STRAPI__MEDIAFormatsLargeProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI__MEDIAFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsMediumProvider_metadata>;
};

type STRAPI__MEDIAFormatsMediumProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Description: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly FirstName: Maybe<Scalars['String']>;
  readonly LastName: Maybe<Scalars['String']>;
  readonly Title: Maybe<Scalars['String']>;
  readonly Description: Maybe<STRAPI_SPEAKERDescription>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly Photo: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  /** Returns all children nodes filtered by type STRAPI_SPEAKER_DESCRIPTION_TEXTNODE */
  readonly childrenStrapiSpeakerDescriptionTextnode: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>>>;
  /** Returns the first child node of type STRAPI_SPEAKER_DESCRIPTION_TEXTNODE or null if there are no children of given type on this node */
  readonly childStrapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
};


type STRAPI_SPEAKER_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKER_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKER_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERDescription = {
  readonly data: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
};

type STRAPI_POST_CONTENT_TEXTNODE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Content: Maybe<Scalars['String']>;
};

type STRAPI_POST = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Title: Maybe<Scalars['String']>;
  readonly Content: Maybe<STRAPI_POSTContent>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly Slug: Maybe<Scalars['String']>;
  readonly ShortDescription: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly Thumbnail: Maybe<STRAPI__MEDIA>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type STRAPI_POST_CONTENT_TEXTNODE */
  readonly childrenStrapiPostContentTextnode: Maybe<ReadonlyArray<Maybe<STRAPI_POST_CONTENT_TEXTNODE>>>;
  /** Returns the first child node of type STRAPI_POST_CONTENT_TEXTNODE or null if there are no children of given type on this node */
  readonly childStrapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODE>;
};


type STRAPI_POST_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_POST_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_POST_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type STRAPI_POSTContent = {
  readonly data: Maybe<STRAPI_POST_CONTENT_TEXTNODE>;
};

type STRAPI_PARTNER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Name: Maybe<Scalars['String']>;
  readonly WebsiteURL: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly Logo: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_PARTNER_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_PARTNER_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly strapiMedia: Maybe<STRAPI__MEDIA>;
  readonly allStrapiMedia: STRAPI__MEDIAConnection;
  readonly strapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
  readonly allStrapiSpeakerDescriptionTextnode: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection;
  readonly strapiSpeaker: Maybe<STRAPI_SPEAKER>;
  readonly allStrapiSpeaker: STRAPI_SPEAKERConnection;
  readonly strapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODE>;
  readonly allStrapiPostContentTextnode: STRAPI_POST_CONTENT_TEXTNODEConnection;
  readonly strapiPost: Maybe<STRAPI_POST>;
  readonly allStrapiPost: STRAPI_POSTConnection;
  readonly strapiPartner: Maybe<STRAPI_PARTNER>;
  readonly allStrapiPartner: STRAPI_PARTNERConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  trailingSlash: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiMediaArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  alternativeText: Maybe<StringQueryOperatorInput>;
  caption: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  formats: Maybe<STRAPI__MEDIAFormatsFilterInput>;
  hash: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  mime: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  localFile: Maybe<FileFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiMediaArgs = {
  filter: Maybe<STRAPI__MEDIAFilterInput>;
  sort: Maybe<STRAPI__MEDIASortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiSpeakerDescriptionTextnodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  Description: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiSpeakerDescriptionTextnodeArgs = {
  filter: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput>;
  sort: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiSpeakerArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  FirstName: Maybe<StringQueryOperatorInput>;
  LastName: Maybe<StringQueryOperatorInput>;
  Title: Maybe<StringQueryOperatorInput>;
  Description: Maybe<STRAPI_SPEAKERDescriptionFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  Photo: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
  childrenStrapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterListInput>;
  childStrapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput>;
};


type Query_allStrapiSpeakerArgs = {
  filter: Maybe<STRAPI_SPEAKERFilterInput>;
  sort: Maybe<STRAPI_SPEAKERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPostContentTextnodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  Content: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiPostContentTextnodeArgs = {
  filter: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterInput>;
  sort: Maybe<STRAPI_POST_CONTENT_TEXTNODESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPostArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  Title: Maybe<StringQueryOperatorInput>;
  Content: Maybe<STRAPI_POSTContentFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  Slug: Maybe<StringQueryOperatorInput>;
  ShortDescription: Maybe<StringQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
  Thumbnail: Maybe<STRAPI__MEDIAFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  childrenStrapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterListInput>;
  childStrapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterInput>;
};


type Query_allStrapiPostArgs = {
  filter: Maybe<STRAPI_POSTFilterInput>;
  sort: Maybe<STRAPI_POSTSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPartnerArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  Name: Maybe<StringQueryOperatorInput>;
  WebsiteURL: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  Logo: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiPartnerArgs = {
  filter: Maybe<STRAPI_PARTNERFilterInput>;
  sort: Maybe<STRAPI_PARTNERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly trailingSlash: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI__MEDIAFormatsFilterInput = {
  readonly small: Maybe<STRAPI__MEDIAFormatsSmallFilterInput>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnailFilterInput>;
  readonly large: Maybe<STRAPI__MEDIAFormatsLargeFilterInput>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMediumFilterInput>;
};

type STRAPI__MEDIAFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsSmallProvider_metadataFilterInput>;
};

type STRAPI__MEDIAFormatsSmallProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsThumbnailProvider_metadataFilterInput>;
};

type STRAPI__MEDIAFormatsThumbnailProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsLargeProvider_metadataFilterInput>;
};

type STRAPI__MEDIAFormatsLargeProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI__MEDIAFormatsMediumProvider_metadataFilterInput>;
};

type STRAPI__MEDIAFormatsMediumProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__MEDIAConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
};


type STRAPI__MEDIAConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAConnection_maxArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAConnection_minArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAConnection_sumArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__MEDIAFieldsEnum;
};

type STRAPI__MEDIAEdge = {
  readonly next: Maybe<STRAPI__MEDIA>;
  readonly node: STRAPI__MEDIA;
  readonly previous: Maybe<STRAPI__MEDIA>;
};

type STRAPI__MEDIAFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'alternativeText'
  | 'caption'
  | 'width'
  | 'height'
  | 'formats.small.ext'
  | 'formats.small.url'
  | 'formats.small.hash'
  | 'formats.small.mime'
  | 'formats.small.name'
  | 'formats.small.size'
  | 'formats.small.width'
  | 'formats.small.height'
  | 'formats.small.provider_metadata.public_id'
  | 'formats.small.provider_metadata.resource_type'
  | 'formats.thumbnail.ext'
  | 'formats.thumbnail.url'
  | 'formats.thumbnail.hash'
  | 'formats.thumbnail.mime'
  | 'formats.thumbnail.name'
  | 'formats.thumbnail.size'
  | 'formats.thumbnail.width'
  | 'formats.thumbnail.height'
  | 'formats.thumbnail.provider_metadata.public_id'
  | 'formats.thumbnail.provider_metadata.resource_type'
  | 'formats.large.ext'
  | 'formats.large.url'
  | 'formats.large.hash'
  | 'formats.large.mime'
  | 'formats.large.name'
  | 'formats.large.size'
  | 'formats.large.width'
  | 'formats.large.height'
  | 'formats.large.provider_metadata.public_id'
  | 'formats.large.provider_metadata.resource_type'
  | 'formats.medium.ext'
  | 'formats.medium.url'
  | 'formats.medium.hash'
  | 'formats.medium.mime'
  | 'formats.medium.name'
  | 'formats.medium.size'
  | 'formats.medium.width'
  | 'formats.medium.height'
  | 'formats.medium.provider_metadata.public_id'
  | 'formats.medium.provider_metadata.resource_type'
  | 'hash'
  | 'ext'
  | 'mime'
  | 'size'
  | 'url'
  | 'createdAt'
  | 'updatedAt'
  | 'localFile.sourceInstanceName'
  | 'localFile.absolutePath'
  | 'localFile.relativePath'
  | 'localFile.extension'
  | 'localFile.size'
  | 'localFile.prettySize'
  | 'localFile.modifiedTime'
  | 'localFile.accessTime'
  | 'localFile.changeTime'
  | 'localFile.birthTime'
  | 'localFile.root'
  | 'localFile.dir'
  | 'localFile.base'
  | 'localFile.ext'
  | 'localFile.name'
  | 'localFile.relativeDirectory'
  | 'localFile.dev'
  | 'localFile.mode'
  | 'localFile.nlink'
  | 'localFile.uid'
  | 'localFile.gid'
  | 'localFile.rdev'
  | 'localFile.ino'
  | 'localFile.atimeMs'
  | 'localFile.mtimeMs'
  | 'localFile.ctimeMs'
  | 'localFile.atime'
  | 'localFile.mtime'
  | 'localFile.ctime'
  | 'localFile.birthtime'
  | 'localFile.birthtimeMs'
  | 'localFile.blksize'
  | 'localFile.blocks'
  | 'localFile.url'
  | 'localFile.id'
  | 'localFile.parent.id'
  | 'localFile.parent.parent.id'
  | 'localFile.parent.parent.children'
  | 'localFile.parent.children'
  | 'localFile.parent.children.id'
  | 'localFile.parent.children.children'
  | 'localFile.parent.internal.content'
  | 'localFile.parent.internal.contentDigest'
  | 'localFile.parent.internal.description'
  | 'localFile.parent.internal.fieldOwners'
  | 'localFile.parent.internal.ignoreType'
  | 'localFile.parent.internal.mediaType'
  | 'localFile.parent.internal.owner'
  | 'localFile.parent.internal.type'
  | 'localFile.children'
  | 'localFile.children.id'
  | 'localFile.children.parent.id'
  | 'localFile.children.parent.children'
  | 'localFile.children.children'
  | 'localFile.children.children.id'
  | 'localFile.children.children.children'
  | 'localFile.children.internal.content'
  | 'localFile.children.internal.contentDigest'
  | 'localFile.children.internal.description'
  | 'localFile.children.internal.fieldOwners'
  | 'localFile.children.internal.ignoreType'
  | 'localFile.children.internal.mediaType'
  | 'localFile.children.internal.owner'
  | 'localFile.children.internal.type'
  | 'localFile.internal.content'
  | 'localFile.internal.contentDigest'
  | 'localFile.internal.description'
  | 'localFile.internal.fieldOwners'
  | 'localFile.internal.ignoreType'
  | 'localFile.internal.mediaType'
  | 'localFile.internal.owner'
  | 'localFile.internal.type'
  | 'strapi_id';

type STRAPI__MEDIAGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__MEDIAGroupConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAGroupConnection_maxArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAGroupConnection_minArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAGroupConnection_sumArgs = {
  field: STRAPI__MEDIAFieldsEnum;
};


type STRAPI__MEDIAGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__MEDIAFieldsEnum;
};

type STRAPI__MEDIAFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI__MEDIAFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIASortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIAFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection>;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection_maxArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection_minArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection_sumArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
  readonly node: STRAPI_SPEAKER_DESCRIPTION_TEXTNODE;
  readonly previous: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'Description';

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};


type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly Description: Maybe<StringQueryOperatorInput>;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_SPEAKERDescriptionFilterInput = {
  readonly data: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput>;
};

type STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput>;
};

type STRAPI_SPEAKERConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SPEAKEREdge>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SPEAKERGroupConnection>;
};


type STRAPI_SPEAKERConnection_distinctArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERConnection_maxArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERConnection_minArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERConnection_sumArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SPEAKERFieldsEnum;
};

type STRAPI_SPEAKEREdge = {
  readonly next: Maybe<STRAPI_SPEAKER>;
  readonly node: STRAPI_SPEAKER;
  readonly previous: Maybe<STRAPI_SPEAKER>;
};

type STRAPI_SPEAKERFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'FirstName'
  | 'LastName'
  | 'Title'
  | 'Description.data.id'
  | 'Description.data.parent.id'
  | 'Description.data.parent.children'
  | 'Description.data.children'
  | 'Description.data.children.id'
  | 'Description.data.children.children'
  | 'Description.data.internal.content'
  | 'Description.data.internal.contentDigest'
  | 'Description.data.internal.description'
  | 'Description.data.internal.fieldOwners'
  | 'Description.data.internal.ignoreType'
  | 'Description.data.internal.mediaType'
  | 'Description.data.internal.owner'
  | 'Description.data.internal.type'
  | 'Description.data.Description'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'Photo.id'
  | 'Photo.parent.id'
  | 'Photo.parent.parent.id'
  | 'Photo.parent.parent.children'
  | 'Photo.parent.children'
  | 'Photo.parent.children.id'
  | 'Photo.parent.children.children'
  | 'Photo.parent.internal.content'
  | 'Photo.parent.internal.contentDigest'
  | 'Photo.parent.internal.description'
  | 'Photo.parent.internal.fieldOwners'
  | 'Photo.parent.internal.ignoreType'
  | 'Photo.parent.internal.mediaType'
  | 'Photo.parent.internal.owner'
  | 'Photo.parent.internal.type'
  | 'Photo.children'
  | 'Photo.children.id'
  | 'Photo.children.parent.id'
  | 'Photo.children.parent.children'
  | 'Photo.children.children'
  | 'Photo.children.children.id'
  | 'Photo.children.children.children'
  | 'Photo.children.internal.content'
  | 'Photo.children.internal.contentDigest'
  | 'Photo.children.internal.description'
  | 'Photo.children.internal.fieldOwners'
  | 'Photo.children.internal.ignoreType'
  | 'Photo.children.internal.mediaType'
  | 'Photo.children.internal.owner'
  | 'Photo.children.internal.type'
  | 'Photo.internal.content'
  | 'Photo.internal.contentDigest'
  | 'Photo.internal.description'
  | 'Photo.internal.fieldOwners'
  | 'Photo.internal.ignoreType'
  | 'Photo.internal.mediaType'
  | 'Photo.internal.owner'
  | 'Photo.internal.type'
  | 'Photo.name'
  | 'Photo.alternativeText'
  | 'Photo.caption'
  | 'Photo.width'
  | 'Photo.height'
  | 'Photo.formats.small.ext'
  | 'Photo.formats.small.url'
  | 'Photo.formats.small.hash'
  | 'Photo.formats.small.mime'
  | 'Photo.formats.small.name'
  | 'Photo.formats.small.size'
  | 'Photo.formats.small.width'
  | 'Photo.formats.small.height'
  | 'Photo.formats.thumbnail.ext'
  | 'Photo.formats.thumbnail.url'
  | 'Photo.formats.thumbnail.hash'
  | 'Photo.formats.thumbnail.mime'
  | 'Photo.formats.thumbnail.name'
  | 'Photo.formats.thumbnail.size'
  | 'Photo.formats.thumbnail.width'
  | 'Photo.formats.thumbnail.height'
  | 'Photo.formats.large.ext'
  | 'Photo.formats.large.url'
  | 'Photo.formats.large.hash'
  | 'Photo.formats.large.mime'
  | 'Photo.formats.large.name'
  | 'Photo.formats.large.size'
  | 'Photo.formats.large.width'
  | 'Photo.formats.large.height'
  | 'Photo.formats.medium.ext'
  | 'Photo.formats.medium.url'
  | 'Photo.formats.medium.hash'
  | 'Photo.formats.medium.mime'
  | 'Photo.formats.medium.name'
  | 'Photo.formats.medium.size'
  | 'Photo.formats.medium.width'
  | 'Photo.formats.medium.height'
  | 'Photo.hash'
  | 'Photo.ext'
  | 'Photo.mime'
  | 'Photo.size'
  | 'Photo.url'
  | 'Photo.createdAt'
  | 'Photo.updatedAt'
  | 'Photo.localFile.sourceInstanceName'
  | 'Photo.localFile.absolutePath'
  | 'Photo.localFile.relativePath'
  | 'Photo.localFile.extension'
  | 'Photo.localFile.size'
  | 'Photo.localFile.prettySize'
  | 'Photo.localFile.modifiedTime'
  | 'Photo.localFile.accessTime'
  | 'Photo.localFile.changeTime'
  | 'Photo.localFile.birthTime'
  | 'Photo.localFile.root'
  | 'Photo.localFile.dir'
  | 'Photo.localFile.base'
  | 'Photo.localFile.ext'
  | 'Photo.localFile.name'
  | 'Photo.localFile.relativeDirectory'
  | 'Photo.localFile.dev'
  | 'Photo.localFile.mode'
  | 'Photo.localFile.nlink'
  | 'Photo.localFile.uid'
  | 'Photo.localFile.gid'
  | 'Photo.localFile.rdev'
  | 'Photo.localFile.ino'
  | 'Photo.localFile.atimeMs'
  | 'Photo.localFile.mtimeMs'
  | 'Photo.localFile.ctimeMs'
  | 'Photo.localFile.atime'
  | 'Photo.localFile.mtime'
  | 'Photo.localFile.ctime'
  | 'Photo.localFile.birthtime'
  | 'Photo.localFile.birthtimeMs'
  | 'Photo.localFile.blksize'
  | 'Photo.localFile.blocks'
  | 'Photo.localFile.url'
  | 'Photo.localFile.id'
  | 'Photo.localFile.parent.id'
  | 'Photo.localFile.parent.children'
  | 'Photo.localFile.children'
  | 'Photo.localFile.children.id'
  | 'Photo.localFile.children.children'
  | 'Photo.localFile.internal.content'
  | 'Photo.localFile.internal.contentDigest'
  | 'Photo.localFile.internal.description'
  | 'Photo.localFile.internal.fieldOwners'
  | 'Photo.localFile.internal.ignoreType'
  | 'Photo.localFile.internal.mediaType'
  | 'Photo.localFile.internal.owner'
  | 'Photo.localFile.internal.type'
  | 'Photo.strapi_id'
  | 'strapi_id'
  | 'childrenStrapiSpeakerDescriptionTextnode'
  | 'childrenStrapiSpeakerDescriptionTextnode.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.parent.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.parent.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.children.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.children.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.content'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.contentDigest'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.description'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.fieldOwners'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.ignoreType'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.mediaType'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.owner'
  | 'childrenStrapiSpeakerDescriptionTextnode.parent.internal.type'
  | 'childrenStrapiSpeakerDescriptionTextnode.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.parent.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.parent.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.children.id'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.children.children'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.content'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.contentDigest'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.description'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.fieldOwners'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.ignoreType'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.mediaType'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.owner'
  | 'childrenStrapiSpeakerDescriptionTextnode.children.internal.type'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.content'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.contentDigest'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.description'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.fieldOwners'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.ignoreType'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.mediaType'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.owner'
  | 'childrenStrapiSpeakerDescriptionTextnode.internal.type'
  | 'childrenStrapiSpeakerDescriptionTextnode.Description'
  | 'childStrapiSpeakerDescriptionTextnode.id'
  | 'childStrapiSpeakerDescriptionTextnode.parent.id'
  | 'childStrapiSpeakerDescriptionTextnode.parent.parent.id'
  | 'childStrapiSpeakerDescriptionTextnode.parent.parent.children'
  | 'childStrapiSpeakerDescriptionTextnode.parent.children'
  | 'childStrapiSpeakerDescriptionTextnode.parent.children.id'
  | 'childStrapiSpeakerDescriptionTextnode.parent.children.children'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.content'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.contentDigest'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.description'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.fieldOwners'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.ignoreType'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.mediaType'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.owner'
  | 'childStrapiSpeakerDescriptionTextnode.parent.internal.type'
  | 'childStrapiSpeakerDescriptionTextnode.children'
  | 'childStrapiSpeakerDescriptionTextnode.children.id'
  | 'childStrapiSpeakerDescriptionTextnode.children.parent.id'
  | 'childStrapiSpeakerDescriptionTextnode.children.parent.children'
  | 'childStrapiSpeakerDescriptionTextnode.children.children'
  | 'childStrapiSpeakerDescriptionTextnode.children.children.id'
  | 'childStrapiSpeakerDescriptionTextnode.children.children.children'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.content'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.contentDigest'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.description'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.fieldOwners'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.ignoreType'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.mediaType'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.owner'
  | 'childStrapiSpeakerDescriptionTextnode.children.internal.type'
  | 'childStrapiSpeakerDescriptionTextnode.internal.content'
  | 'childStrapiSpeakerDescriptionTextnode.internal.contentDigest'
  | 'childStrapiSpeakerDescriptionTextnode.internal.description'
  | 'childStrapiSpeakerDescriptionTextnode.internal.fieldOwners'
  | 'childStrapiSpeakerDescriptionTextnode.internal.ignoreType'
  | 'childStrapiSpeakerDescriptionTextnode.internal.mediaType'
  | 'childStrapiSpeakerDescriptionTextnode.internal.owner'
  | 'childStrapiSpeakerDescriptionTextnode.internal.type'
  | 'childStrapiSpeakerDescriptionTextnode.Description';

type STRAPI_SPEAKERGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SPEAKEREdge>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SPEAKERGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKERGroupConnection_distinctArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERGroupConnection_maxArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERGroupConnection_minArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERGroupConnection_sumArgs = {
  field: STRAPI_SPEAKERFieldsEnum;
};


type STRAPI_SPEAKERGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SPEAKERFieldsEnum;
};

type STRAPI_SPEAKERFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly FirstName: Maybe<StringQueryOperatorInput>;
  readonly LastName: Maybe<StringQueryOperatorInput>;
  readonly Title: Maybe<StringQueryOperatorInput>;
  readonly Description: Maybe<STRAPI_SPEAKERDescriptionFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly Photo: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
  readonly childrenStrapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterListInput>;
  readonly childStrapiSpeakerDescriptionTextnode: Maybe<STRAPI_SPEAKER_DESCRIPTION_TEXTNODEFilterInput>;
};

type STRAPI_SPEAKERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_POST_CONTENT_TEXTNODEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODEGroupConnection>;
};


type STRAPI_POST_CONTENT_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEConnection_maxArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEConnection_minArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEConnection_sumArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};

type STRAPI_POST_CONTENT_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_POST_CONTENT_TEXTNODE>;
  readonly node: STRAPI_POST_CONTENT_TEXTNODE;
  readonly previous: Maybe<STRAPI_POST_CONTENT_TEXTNODE>;
};

type STRAPI_POST_CONTENT_TEXTNODEFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'Content';

type STRAPI_POST_CONTENT_TEXTNODEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_POST_CONTENT_TEXTNODEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_POST_CONTENT_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};


type STRAPI_POST_CONTENT_TEXTNODEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_POST_CONTENT_TEXTNODEFieldsEnum;
};

type STRAPI_POST_CONTENT_TEXTNODEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly Content: Maybe<StringQueryOperatorInput>;
};

type STRAPI_POST_CONTENT_TEXTNODESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_POST_CONTENT_TEXTNODEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_POSTContentFilterInput = {
  readonly data: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterInput>;
};

type STRAPI_POST_CONTENT_TEXTNODEFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterInput>;
};

type STRAPI_POSTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_POSTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_POST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_POSTGroupConnection>;
};


type STRAPI_POSTConnection_distinctArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTConnection_maxArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTConnection_minArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTConnection_sumArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_POSTFieldsEnum;
};

type STRAPI_POSTEdge = {
  readonly next: Maybe<STRAPI_POST>;
  readonly node: STRAPI_POST;
  readonly previous: Maybe<STRAPI_POST>;
};

type STRAPI_POSTFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'Title'
  | 'Content.data.id'
  | 'Content.data.parent.id'
  | 'Content.data.parent.children'
  | 'Content.data.children'
  | 'Content.data.children.id'
  | 'Content.data.children.children'
  | 'Content.data.internal.content'
  | 'Content.data.internal.contentDigest'
  | 'Content.data.internal.description'
  | 'Content.data.internal.fieldOwners'
  | 'Content.data.internal.ignoreType'
  | 'Content.data.internal.mediaType'
  | 'Content.data.internal.owner'
  | 'Content.data.internal.type'
  | 'Content.data.Content'
  | 'createdAt'
  | 'updatedAt'
  | 'Slug'
  | 'ShortDescription'
  | 'strapi_id'
  | 'Thumbnail.id'
  | 'Thumbnail.parent.id'
  | 'Thumbnail.parent.parent.id'
  | 'Thumbnail.parent.parent.children'
  | 'Thumbnail.parent.children'
  | 'Thumbnail.parent.children.id'
  | 'Thumbnail.parent.children.children'
  | 'Thumbnail.parent.internal.content'
  | 'Thumbnail.parent.internal.contentDigest'
  | 'Thumbnail.parent.internal.description'
  | 'Thumbnail.parent.internal.fieldOwners'
  | 'Thumbnail.parent.internal.ignoreType'
  | 'Thumbnail.parent.internal.mediaType'
  | 'Thumbnail.parent.internal.owner'
  | 'Thumbnail.parent.internal.type'
  | 'Thumbnail.children'
  | 'Thumbnail.children.id'
  | 'Thumbnail.children.parent.id'
  | 'Thumbnail.children.parent.children'
  | 'Thumbnail.children.children'
  | 'Thumbnail.children.children.id'
  | 'Thumbnail.children.children.children'
  | 'Thumbnail.children.internal.content'
  | 'Thumbnail.children.internal.contentDigest'
  | 'Thumbnail.children.internal.description'
  | 'Thumbnail.children.internal.fieldOwners'
  | 'Thumbnail.children.internal.ignoreType'
  | 'Thumbnail.children.internal.mediaType'
  | 'Thumbnail.children.internal.owner'
  | 'Thumbnail.children.internal.type'
  | 'Thumbnail.internal.content'
  | 'Thumbnail.internal.contentDigest'
  | 'Thumbnail.internal.description'
  | 'Thumbnail.internal.fieldOwners'
  | 'Thumbnail.internal.ignoreType'
  | 'Thumbnail.internal.mediaType'
  | 'Thumbnail.internal.owner'
  | 'Thumbnail.internal.type'
  | 'Thumbnail.name'
  | 'Thumbnail.alternativeText'
  | 'Thumbnail.caption'
  | 'Thumbnail.width'
  | 'Thumbnail.height'
  | 'Thumbnail.formats.small.ext'
  | 'Thumbnail.formats.small.url'
  | 'Thumbnail.formats.small.hash'
  | 'Thumbnail.formats.small.mime'
  | 'Thumbnail.formats.small.name'
  | 'Thumbnail.formats.small.size'
  | 'Thumbnail.formats.small.width'
  | 'Thumbnail.formats.small.height'
  | 'Thumbnail.formats.thumbnail.ext'
  | 'Thumbnail.formats.thumbnail.url'
  | 'Thumbnail.formats.thumbnail.hash'
  | 'Thumbnail.formats.thumbnail.mime'
  | 'Thumbnail.formats.thumbnail.name'
  | 'Thumbnail.formats.thumbnail.size'
  | 'Thumbnail.formats.thumbnail.width'
  | 'Thumbnail.formats.thumbnail.height'
  | 'Thumbnail.formats.large.ext'
  | 'Thumbnail.formats.large.url'
  | 'Thumbnail.formats.large.hash'
  | 'Thumbnail.formats.large.mime'
  | 'Thumbnail.formats.large.name'
  | 'Thumbnail.formats.large.size'
  | 'Thumbnail.formats.large.width'
  | 'Thumbnail.formats.large.height'
  | 'Thumbnail.formats.medium.ext'
  | 'Thumbnail.formats.medium.url'
  | 'Thumbnail.formats.medium.hash'
  | 'Thumbnail.formats.medium.mime'
  | 'Thumbnail.formats.medium.name'
  | 'Thumbnail.formats.medium.size'
  | 'Thumbnail.formats.medium.width'
  | 'Thumbnail.formats.medium.height'
  | 'Thumbnail.hash'
  | 'Thumbnail.ext'
  | 'Thumbnail.mime'
  | 'Thumbnail.size'
  | 'Thumbnail.url'
  | 'Thumbnail.createdAt'
  | 'Thumbnail.updatedAt'
  | 'Thumbnail.localFile.sourceInstanceName'
  | 'Thumbnail.localFile.absolutePath'
  | 'Thumbnail.localFile.relativePath'
  | 'Thumbnail.localFile.extension'
  | 'Thumbnail.localFile.size'
  | 'Thumbnail.localFile.prettySize'
  | 'Thumbnail.localFile.modifiedTime'
  | 'Thumbnail.localFile.accessTime'
  | 'Thumbnail.localFile.changeTime'
  | 'Thumbnail.localFile.birthTime'
  | 'Thumbnail.localFile.root'
  | 'Thumbnail.localFile.dir'
  | 'Thumbnail.localFile.base'
  | 'Thumbnail.localFile.ext'
  | 'Thumbnail.localFile.name'
  | 'Thumbnail.localFile.relativeDirectory'
  | 'Thumbnail.localFile.dev'
  | 'Thumbnail.localFile.mode'
  | 'Thumbnail.localFile.nlink'
  | 'Thumbnail.localFile.uid'
  | 'Thumbnail.localFile.gid'
  | 'Thumbnail.localFile.rdev'
  | 'Thumbnail.localFile.ino'
  | 'Thumbnail.localFile.atimeMs'
  | 'Thumbnail.localFile.mtimeMs'
  | 'Thumbnail.localFile.ctimeMs'
  | 'Thumbnail.localFile.atime'
  | 'Thumbnail.localFile.mtime'
  | 'Thumbnail.localFile.ctime'
  | 'Thumbnail.localFile.birthtime'
  | 'Thumbnail.localFile.birthtimeMs'
  | 'Thumbnail.localFile.blksize'
  | 'Thumbnail.localFile.blocks'
  | 'Thumbnail.localFile.url'
  | 'Thumbnail.localFile.id'
  | 'Thumbnail.localFile.parent.id'
  | 'Thumbnail.localFile.parent.children'
  | 'Thumbnail.localFile.children'
  | 'Thumbnail.localFile.children.id'
  | 'Thumbnail.localFile.children.children'
  | 'Thumbnail.localFile.internal.content'
  | 'Thumbnail.localFile.internal.contentDigest'
  | 'Thumbnail.localFile.internal.description'
  | 'Thumbnail.localFile.internal.fieldOwners'
  | 'Thumbnail.localFile.internal.ignoreType'
  | 'Thumbnail.localFile.internal.mediaType'
  | 'Thumbnail.localFile.internal.owner'
  | 'Thumbnail.localFile.internal.type'
  | 'Thumbnail.strapi_id'
  | 'gatsbyPath'
  | 'childrenStrapiPostContentTextnode'
  | 'childrenStrapiPostContentTextnode.id'
  | 'childrenStrapiPostContentTextnode.parent.id'
  | 'childrenStrapiPostContentTextnode.parent.parent.id'
  | 'childrenStrapiPostContentTextnode.parent.parent.children'
  | 'childrenStrapiPostContentTextnode.parent.children'
  | 'childrenStrapiPostContentTextnode.parent.children.id'
  | 'childrenStrapiPostContentTextnode.parent.children.children'
  | 'childrenStrapiPostContentTextnode.parent.internal.content'
  | 'childrenStrapiPostContentTextnode.parent.internal.contentDigest'
  | 'childrenStrapiPostContentTextnode.parent.internal.description'
  | 'childrenStrapiPostContentTextnode.parent.internal.fieldOwners'
  | 'childrenStrapiPostContentTextnode.parent.internal.ignoreType'
  | 'childrenStrapiPostContentTextnode.parent.internal.mediaType'
  | 'childrenStrapiPostContentTextnode.parent.internal.owner'
  | 'childrenStrapiPostContentTextnode.parent.internal.type'
  | 'childrenStrapiPostContentTextnode.children'
  | 'childrenStrapiPostContentTextnode.children.id'
  | 'childrenStrapiPostContentTextnode.children.parent.id'
  | 'childrenStrapiPostContentTextnode.children.parent.children'
  | 'childrenStrapiPostContentTextnode.children.children'
  | 'childrenStrapiPostContentTextnode.children.children.id'
  | 'childrenStrapiPostContentTextnode.children.children.children'
  | 'childrenStrapiPostContentTextnode.children.internal.content'
  | 'childrenStrapiPostContentTextnode.children.internal.contentDigest'
  | 'childrenStrapiPostContentTextnode.children.internal.description'
  | 'childrenStrapiPostContentTextnode.children.internal.fieldOwners'
  | 'childrenStrapiPostContentTextnode.children.internal.ignoreType'
  | 'childrenStrapiPostContentTextnode.children.internal.mediaType'
  | 'childrenStrapiPostContentTextnode.children.internal.owner'
  | 'childrenStrapiPostContentTextnode.children.internal.type'
  | 'childrenStrapiPostContentTextnode.internal.content'
  | 'childrenStrapiPostContentTextnode.internal.contentDigest'
  | 'childrenStrapiPostContentTextnode.internal.description'
  | 'childrenStrapiPostContentTextnode.internal.fieldOwners'
  | 'childrenStrapiPostContentTextnode.internal.ignoreType'
  | 'childrenStrapiPostContentTextnode.internal.mediaType'
  | 'childrenStrapiPostContentTextnode.internal.owner'
  | 'childrenStrapiPostContentTextnode.internal.type'
  | 'childrenStrapiPostContentTextnode.Content'
  | 'childStrapiPostContentTextnode.id'
  | 'childStrapiPostContentTextnode.parent.id'
  | 'childStrapiPostContentTextnode.parent.parent.id'
  | 'childStrapiPostContentTextnode.parent.parent.children'
  | 'childStrapiPostContentTextnode.parent.children'
  | 'childStrapiPostContentTextnode.parent.children.id'
  | 'childStrapiPostContentTextnode.parent.children.children'
  | 'childStrapiPostContentTextnode.parent.internal.content'
  | 'childStrapiPostContentTextnode.parent.internal.contentDigest'
  | 'childStrapiPostContentTextnode.parent.internal.description'
  | 'childStrapiPostContentTextnode.parent.internal.fieldOwners'
  | 'childStrapiPostContentTextnode.parent.internal.ignoreType'
  | 'childStrapiPostContentTextnode.parent.internal.mediaType'
  | 'childStrapiPostContentTextnode.parent.internal.owner'
  | 'childStrapiPostContentTextnode.parent.internal.type'
  | 'childStrapiPostContentTextnode.children'
  | 'childStrapiPostContentTextnode.children.id'
  | 'childStrapiPostContentTextnode.children.parent.id'
  | 'childStrapiPostContentTextnode.children.parent.children'
  | 'childStrapiPostContentTextnode.children.children'
  | 'childStrapiPostContentTextnode.children.children.id'
  | 'childStrapiPostContentTextnode.children.children.children'
  | 'childStrapiPostContentTextnode.children.internal.content'
  | 'childStrapiPostContentTextnode.children.internal.contentDigest'
  | 'childStrapiPostContentTextnode.children.internal.description'
  | 'childStrapiPostContentTextnode.children.internal.fieldOwners'
  | 'childStrapiPostContentTextnode.children.internal.ignoreType'
  | 'childStrapiPostContentTextnode.children.internal.mediaType'
  | 'childStrapiPostContentTextnode.children.internal.owner'
  | 'childStrapiPostContentTextnode.children.internal.type'
  | 'childStrapiPostContentTextnode.internal.content'
  | 'childStrapiPostContentTextnode.internal.contentDigest'
  | 'childStrapiPostContentTextnode.internal.description'
  | 'childStrapiPostContentTextnode.internal.fieldOwners'
  | 'childStrapiPostContentTextnode.internal.ignoreType'
  | 'childStrapiPostContentTextnode.internal.mediaType'
  | 'childStrapiPostContentTextnode.internal.owner'
  | 'childStrapiPostContentTextnode.internal.type'
  | 'childStrapiPostContentTextnode.Content';

type STRAPI_POSTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_POSTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_POST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_POSTGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_POSTGroupConnection_distinctArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTGroupConnection_maxArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTGroupConnection_minArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTGroupConnection_sumArgs = {
  field: STRAPI_POSTFieldsEnum;
};


type STRAPI_POSTGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_POSTFieldsEnum;
};

type STRAPI_POSTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly Title: Maybe<StringQueryOperatorInput>;
  readonly Content: Maybe<STRAPI_POSTContentFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly Slug: Maybe<StringQueryOperatorInput>;
  readonly ShortDescription: Maybe<StringQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
  readonly Thumbnail: Maybe<STRAPI__MEDIAFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly childrenStrapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterListInput>;
  readonly childStrapiPostContentTextnode: Maybe<STRAPI_POST_CONTENT_TEXTNODEFilterInput>;
};

type STRAPI_POSTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_POSTFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_PARTNERConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PARTNEREdge>;
  readonly nodes: ReadonlyArray<STRAPI_PARTNER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PARTNERGroupConnection>;
};


type STRAPI_PARTNERConnection_distinctArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERConnection_maxArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERConnection_minArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERConnection_sumArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PARTNERFieldsEnum;
};

type STRAPI_PARTNEREdge = {
  readonly next: Maybe<STRAPI_PARTNER>;
  readonly node: STRAPI_PARTNER;
  readonly previous: Maybe<STRAPI_PARTNER>;
};

type STRAPI_PARTNERFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'Name'
  | 'WebsiteURL'
  | 'createdAt'
  | 'updatedAt'
  | 'Logo.id'
  | 'Logo.parent.id'
  | 'Logo.parent.parent.id'
  | 'Logo.parent.parent.children'
  | 'Logo.parent.children'
  | 'Logo.parent.children.id'
  | 'Logo.parent.children.children'
  | 'Logo.parent.internal.content'
  | 'Logo.parent.internal.contentDigest'
  | 'Logo.parent.internal.description'
  | 'Logo.parent.internal.fieldOwners'
  | 'Logo.parent.internal.ignoreType'
  | 'Logo.parent.internal.mediaType'
  | 'Logo.parent.internal.owner'
  | 'Logo.parent.internal.type'
  | 'Logo.children'
  | 'Logo.children.id'
  | 'Logo.children.parent.id'
  | 'Logo.children.parent.children'
  | 'Logo.children.children'
  | 'Logo.children.children.id'
  | 'Logo.children.children.children'
  | 'Logo.children.internal.content'
  | 'Logo.children.internal.contentDigest'
  | 'Logo.children.internal.description'
  | 'Logo.children.internal.fieldOwners'
  | 'Logo.children.internal.ignoreType'
  | 'Logo.children.internal.mediaType'
  | 'Logo.children.internal.owner'
  | 'Logo.children.internal.type'
  | 'Logo.internal.content'
  | 'Logo.internal.contentDigest'
  | 'Logo.internal.description'
  | 'Logo.internal.fieldOwners'
  | 'Logo.internal.ignoreType'
  | 'Logo.internal.mediaType'
  | 'Logo.internal.owner'
  | 'Logo.internal.type'
  | 'Logo.name'
  | 'Logo.alternativeText'
  | 'Logo.caption'
  | 'Logo.width'
  | 'Logo.height'
  | 'Logo.formats.small.ext'
  | 'Logo.formats.small.url'
  | 'Logo.formats.small.hash'
  | 'Logo.formats.small.mime'
  | 'Logo.formats.small.name'
  | 'Logo.formats.small.size'
  | 'Logo.formats.small.width'
  | 'Logo.formats.small.height'
  | 'Logo.formats.thumbnail.ext'
  | 'Logo.formats.thumbnail.url'
  | 'Logo.formats.thumbnail.hash'
  | 'Logo.formats.thumbnail.mime'
  | 'Logo.formats.thumbnail.name'
  | 'Logo.formats.thumbnail.size'
  | 'Logo.formats.thumbnail.width'
  | 'Logo.formats.thumbnail.height'
  | 'Logo.formats.large.ext'
  | 'Logo.formats.large.url'
  | 'Logo.formats.large.hash'
  | 'Logo.formats.large.mime'
  | 'Logo.formats.large.name'
  | 'Logo.formats.large.size'
  | 'Logo.formats.large.width'
  | 'Logo.formats.large.height'
  | 'Logo.formats.medium.ext'
  | 'Logo.formats.medium.url'
  | 'Logo.formats.medium.hash'
  | 'Logo.formats.medium.mime'
  | 'Logo.formats.medium.name'
  | 'Logo.formats.medium.size'
  | 'Logo.formats.medium.width'
  | 'Logo.formats.medium.height'
  | 'Logo.hash'
  | 'Logo.ext'
  | 'Logo.mime'
  | 'Logo.size'
  | 'Logo.url'
  | 'Logo.createdAt'
  | 'Logo.updatedAt'
  | 'Logo.localFile.sourceInstanceName'
  | 'Logo.localFile.absolutePath'
  | 'Logo.localFile.relativePath'
  | 'Logo.localFile.extension'
  | 'Logo.localFile.size'
  | 'Logo.localFile.prettySize'
  | 'Logo.localFile.modifiedTime'
  | 'Logo.localFile.accessTime'
  | 'Logo.localFile.changeTime'
  | 'Logo.localFile.birthTime'
  | 'Logo.localFile.root'
  | 'Logo.localFile.dir'
  | 'Logo.localFile.base'
  | 'Logo.localFile.ext'
  | 'Logo.localFile.name'
  | 'Logo.localFile.relativeDirectory'
  | 'Logo.localFile.dev'
  | 'Logo.localFile.mode'
  | 'Logo.localFile.nlink'
  | 'Logo.localFile.uid'
  | 'Logo.localFile.gid'
  | 'Logo.localFile.rdev'
  | 'Logo.localFile.ino'
  | 'Logo.localFile.atimeMs'
  | 'Logo.localFile.mtimeMs'
  | 'Logo.localFile.ctimeMs'
  | 'Logo.localFile.atime'
  | 'Logo.localFile.mtime'
  | 'Logo.localFile.ctime'
  | 'Logo.localFile.birthtime'
  | 'Logo.localFile.birthtimeMs'
  | 'Logo.localFile.blksize'
  | 'Logo.localFile.blocks'
  | 'Logo.localFile.url'
  | 'Logo.localFile.id'
  | 'Logo.localFile.parent.id'
  | 'Logo.localFile.parent.children'
  | 'Logo.localFile.children'
  | 'Logo.localFile.children.id'
  | 'Logo.localFile.children.children'
  | 'Logo.localFile.internal.content'
  | 'Logo.localFile.internal.contentDigest'
  | 'Logo.localFile.internal.description'
  | 'Logo.localFile.internal.fieldOwners'
  | 'Logo.localFile.internal.ignoreType'
  | 'Logo.localFile.internal.mediaType'
  | 'Logo.localFile.internal.owner'
  | 'Logo.localFile.internal.type'
  | 'Logo.strapi_id'
  | 'strapi_id';

type STRAPI_PARTNERGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PARTNEREdge>;
  readonly nodes: ReadonlyArray<STRAPI_PARTNER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PARTNERGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_PARTNERGroupConnection_distinctArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERGroupConnection_maxArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERGroupConnection_minArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERGroupConnection_sumArgs = {
  field: STRAPI_PARTNERFieldsEnum;
};


type STRAPI_PARTNERGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PARTNERFieldsEnum;
};

type STRAPI_PARTNERFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly Name: Maybe<StringQueryOperatorInput>;
  readonly WebsiteURL: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly Logo: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_PARTNERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagespartnersTsx1325343992QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagespartnersTsx1325343992Query = { readonly allStrapiPartner: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<STRAPI_PARTNER, 'Name' | 'WebsiteURL'>
        & { readonly Logo: Maybe<Pick<STRAPI__MEDIA, 'url'>> }
      ) }> } };

type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagespostsTsx3904718485QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagespostsTsx3904718485Query = { readonly allStrapiPost: { readonly edges: ReadonlyArray<{ readonly node: Pick<STRAPI_POST, 'Slug' | 'Title' | 'ShortDescription'> }> } };

type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagesspeakersTsx3813000303QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdadiiWebstormProjectsbbdaysbbdaysWebsitesrcpagesspeakersTsx3813000303Query = { readonly allStrapiSpeaker: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<STRAPI_SPEAKER, 'FirstName' | 'LastName'>
        & { readonly Photo: Maybe<Pick<STRAPI__MEDIA, 'url'>> }
      ) }> } };

type postDataQueryVariables = Exact<{
  Slug: Maybe<Scalars['String']>;
}>;


type postDataQuery = { readonly strapiPost: Maybe<(
    Pick<STRAPI_POST, 'Title'>
    & { readonly Content: Maybe<{ readonly data: Maybe<Pick<STRAPI_POST_CONTENT_TEXTNODE, 'Content'>> }> }
  )> };

}