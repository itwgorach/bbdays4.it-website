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
  readonly large: Maybe<STRAPI__MEDIAFormatsLarge>;
  readonly small: Maybe<STRAPI__MEDIAFormatsSmall>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnail>;
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

type STRAPI__COMPONENT_BASE_SPEAKERS_GRID = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SCHEDULE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly scheduleTitle: Maybe<Scalars['String']>;
  readonly events: Maybe<ReadonlyArray<Maybe<STRAPI_EVENT>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly partners: Maybe<ReadonlyArray<Maybe<STRAPI_PARTNER>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_HERO = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly subtitlePos: Maybe<Scalars['String']>;
  readonly backgroundImage: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['String']>;
  readonly photo: Maybe<STRAPI_SPEAKERPhoto>;
  readonly strapi_id: Maybe<Scalars['Int']>;
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

type STRAPI_SPEAKERPhoto = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_SPEAKERPhotoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_SPEAKERPhoto_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKERPhoto_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFormats = {
  readonly small: Maybe<STRAPI_SPEAKERPhotoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnail>;
  readonly large: Maybe<STRAPI_SPEAKERPhotoFormatsLarge>;
  readonly medium: Maybe<STRAPI_SPEAKERPhotoFormatsMedium>;
};

type STRAPI_SPEAKERPhotoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsSmallProvider_metadata>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStream>;
};

type STRAPI_SPEAKERPhotoFormatsSmallProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStream = {
  readonly mode: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly flags: Maybe<Scalars['String']>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly bytesRead: Maybe<Scalars['Int']>;
  readonly _eventsCount: Maybe<Scalars['Int']>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStream_readableState>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStream_readableState = {
  readonly sync: Maybe<Scalars['Boolean']>;
  readonly ended: Maybe<Scalars['Boolean']>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateBuffer>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly length: Maybe<Scalars['Int']>;
  readonly flowing: Maybe<Scalars['Boolean']>;
  readonly reading: Maybe<Scalars['Boolean']>;
  readonly destroyed: Maybe<Scalars['Boolean']>;
  readonly emitClose: Maybe<Scalars['Boolean']>;
  readonly endEmitted: Maybe<Scalars['Boolean']>;
  readonly objectMode: Maybe<Scalars['Boolean']>;
  readonly autoDestroy: Maybe<Scalars['Boolean']>;
  readonly constructed: Maybe<Scalars['Boolean']>;
  readonly dataEmitted: Maybe<Scalars['Boolean']>;
  readonly readingMore: Maybe<Scalars['Boolean']>;
  readonly closeEmitted: Maybe<Scalars['Boolean']>;
  readonly errorEmitted: Maybe<Scalars['Boolean']>;
  readonly needReadable: Maybe<Scalars['Boolean']>;
  readonly highWaterMark: Maybe<Scalars['Int']>;
  readonly defaultEncoding: Maybe<Scalars['String']>;
  readonly emittedReadable: Maybe<Scalars['Boolean']>;
  readonly multiAwaitDrain: Maybe<Scalars['Boolean']>;
  readonly resumeScheduled: Maybe<Scalars['Boolean']>;
  readonly readableListening: Maybe<Scalars['Boolean']>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateBuffer = {
  readonly length: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailProvider_metadata>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStream>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStream = {
  readonly mode: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly flags: Maybe<Scalars['String']>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly bytesRead: Maybe<Scalars['Int']>;
  readonly _eventsCount: Maybe<Scalars['Int']>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableState>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableState = {
  readonly sync: Maybe<Scalars['Boolean']>;
  readonly ended: Maybe<Scalars['Boolean']>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateBuffer>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly length: Maybe<Scalars['Int']>;
  readonly flowing: Maybe<Scalars['Boolean']>;
  readonly reading: Maybe<Scalars['Boolean']>;
  readonly destroyed: Maybe<Scalars['Boolean']>;
  readonly emitClose: Maybe<Scalars['Boolean']>;
  readonly endEmitted: Maybe<Scalars['Boolean']>;
  readonly objectMode: Maybe<Scalars['Boolean']>;
  readonly autoDestroy: Maybe<Scalars['Boolean']>;
  readonly constructed: Maybe<Scalars['Boolean']>;
  readonly dataEmitted: Maybe<Scalars['Boolean']>;
  readonly readingMore: Maybe<Scalars['Boolean']>;
  readonly closeEmitted: Maybe<Scalars['Boolean']>;
  readonly errorEmitted: Maybe<Scalars['Boolean']>;
  readonly needReadable: Maybe<Scalars['Boolean']>;
  readonly highWaterMark: Maybe<Scalars['Int']>;
  readonly defaultEncoding: Maybe<Scalars['String']>;
  readonly emittedReadable: Maybe<Scalars['Boolean']>;
  readonly multiAwaitDrain: Maybe<Scalars['Boolean']>;
  readonly resumeScheduled: Maybe<Scalars['Boolean']>;
  readonly readableListening: Maybe<Scalars['Boolean']>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateBuffer = {
  readonly length: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsLargeProvider_metadata>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStream>;
};

type STRAPI_SPEAKERPhotoFormatsLargeProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStream = {
  readonly mode: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly flags: Maybe<Scalars['String']>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly bytesRead: Maybe<Scalars['Int']>;
  readonly _eventsCount: Maybe<Scalars['Int']>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStream_readableState>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStream_readableState = {
  readonly sync: Maybe<Scalars['Boolean']>;
  readonly ended: Maybe<Scalars['Boolean']>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateBuffer>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly length: Maybe<Scalars['Int']>;
  readonly flowing: Maybe<Scalars['Boolean']>;
  readonly reading: Maybe<Scalars['Boolean']>;
  readonly destroyed: Maybe<Scalars['Boolean']>;
  readonly emitClose: Maybe<Scalars['Boolean']>;
  readonly endEmitted: Maybe<Scalars['Boolean']>;
  readonly objectMode: Maybe<Scalars['Boolean']>;
  readonly autoDestroy: Maybe<Scalars['Boolean']>;
  readonly constructed: Maybe<Scalars['Boolean']>;
  readonly dataEmitted: Maybe<Scalars['Boolean']>;
  readonly readingMore: Maybe<Scalars['Boolean']>;
  readonly closeEmitted: Maybe<Scalars['Boolean']>;
  readonly errorEmitted: Maybe<Scalars['Boolean']>;
  readonly needReadable: Maybe<Scalars['Boolean']>;
  readonly highWaterMark: Maybe<Scalars['Int']>;
  readonly defaultEncoding: Maybe<Scalars['String']>;
  readonly emittedReadable: Maybe<Scalars['Boolean']>;
  readonly multiAwaitDrain: Maybe<Scalars['Boolean']>;
  readonly resumeScheduled: Maybe<Scalars['Boolean']>;
  readonly readableListening: Maybe<Scalars['Boolean']>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateBuffer = {
  readonly length: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsMediumProvider_metadata>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStream>;
};

type STRAPI_SPEAKERPhotoFormatsMediumProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStream = {
  readonly mode: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly flags: Maybe<Scalars['String']>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly bytesRead: Maybe<Scalars['Int']>;
  readonly _eventsCount: Maybe<Scalars['Int']>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStream_readableState>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStream_readableState = {
  readonly sync: Maybe<Scalars['Boolean']>;
  readonly ended: Maybe<Scalars['Boolean']>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateBuffer>;
  readonly closed: Maybe<Scalars['Boolean']>;
  readonly length: Maybe<Scalars['Int']>;
  readonly flowing: Maybe<Scalars['Boolean']>;
  readonly reading: Maybe<Scalars['Boolean']>;
  readonly destroyed: Maybe<Scalars['Boolean']>;
  readonly emitClose: Maybe<Scalars['Boolean']>;
  readonly endEmitted: Maybe<Scalars['Boolean']>;
  readonly objectMode: Maybe<Scalars['Boolean']>;
  readonly autoDestroy: Maybe<Scalars['Boolean']>;
  readonly constructed: Maybe<Scalars['Boolean']>;
  readonly dataEmitted: Maybe<Scalars['Boolean']>;
  readonly readingMore: Maybe<Scalars['Boolean']>;
  readonly closeEmitted: Maybe<Scalars['Boolean']>;
  readonly errorEmitted: Maybe<Scalars['Boolean']>;
  readonly needReadable: Maybe<Scalars['Boolean']>;
  readonly highWaterMark: Maybe<Scalars['Int']>;
  readonly defaultEncoding: Maybe<Scalars['String']>;
  readonly emittedReadable: Maybe<Scalars['Boolean']>;
  readonly multiAwaitDrain: Maybe<Scalars['Boolean']>;
  readonly resumeScheduled: Maybe<Scalars['Boolean']>;
  readonly readableListening: Maybe<Scalars['Boolean']>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateBuffer = {
  readonly length: Maybe<Scalars['Int']>;
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
  readonly Logo: Maybe<STRAPI_PARTNERLogo>;
  readonly whiteLogo: Maybe<STRAPI_PARTNERWhiteLogo>;
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

type STRAPI_PARTNERLogo = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_PARTNERLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_PARTNERLogo_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_PARTNERLogo_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERLogoFormats = {
  readonly thumbnail: Maybe<STRAPI_PARTNERLogoFormatsThumbnail>;
};

type STRAPI_PARTNERLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERLogoFormatsThumbnailProvider_metadata>;
};

type STRAPI_PARTNERLogoFormatsThumbnailProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogo = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_PARTNERWhiteLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_PARTNERWhiteLogo_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_PARTNERWhiteLogo_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogoFormats = {
  readonly thumbnail: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnail>;
  readonly small: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmall>;
  readonly medium: Maybe<STRAPI_PARTNERWhiteLogoFormatsMedium>;
  readonly large: Maybe<STRAPI_PARTNERWhiteLogoFormatsLarge>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailProvider_metadata>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmallProvider_metadata>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsMediumProvider_metadata>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsLargeProvider_metadata>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_HOMEPAGE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly homepage: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SPEAKERS_GRIDUnion>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_HOMEPAGE_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_HOMEPAGE_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SPEAKERS_GRIDUnion = STRAPI__COMPONENT_BASE_GALERY_SLIDER | STRAPI__COMPONENT_BASE_HERO | STRAPI__COMPONENT_BASE_PARTNERS_SLIDER | STRAPI__COMPONENT_BASE_SCHEDULE | STRAPI__COMPONENT_BASE_SPEAKERS_GRID;

type STRAPI_EVENT = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly startHour: Maybe<Scalars['String']>;
  readonly endHour: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly displayTitleOnDesktop: Maybe<Scalars['Boolean']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly logo: Maybe<STRAPI_EVENTLogo>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_EVENT_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_EVENT_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_EVENTLogo = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_EVENTLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_EVENTLogo_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_EVENTLogo_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_EVENTLogoFormats = {
  readonly large: Maybe<STRAPI_EVENTLogoFormatsLarge>;
  readonly small: Maybe<STRAPI_EVENTLogoFormatsSmall>;
  readonly medium: Maybe<STRAPI_EVENTLogoFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI_EVENTLogoFormatsThumbnail>;
};

type STRAPI_EVENTLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsLargeProvider_metadata>;
};

type STRAPI_EVENTLogoFormatsLargeProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_EVENTLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsSmallProvider_metadata>;
};

type STRAPI_EVENTLogoFormatsSmallProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_EVENTLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsMediumProvider_metadata>;
};

type STRAPI_EVENTLogoFormatsMediumProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
};

type STRAPI_EVENTLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsThumbnailProvider_metadata>;
};

type STRAPI_EVENTLogoFormatsThumbnailProvider_metadata = {
  readonly public_id: Maybe<Scalars['String']>;
  readonly resource_type: Maybe<Scalars['String']>;
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
  readonly strapiComponentBaseSpeakersGrid: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly allStrapiComponentBaseSpeakersGrid: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection;
  readonly strapiComponentBaseSchedule: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly allStrapiComponentBaseSchedule: STRAPI__COMPONENT_BASE_SCHEDULEConnection;
  readonly strapiComponentBasePartnersSlider: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly allStrapiComponentBasePartnersSlider: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection;
  readonly strapiComponentBaseHero: Maybe<STRAPI__COMPONENT_BASE_HERO>;
  readonly allStrapiComponentBaseHero: STRAPI__COMPONENT_BASE_HEROConnection;
  readonly strapiComponentBaseGalerySlider: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly allStrapiComponentBaseGalerySlider: STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection;
  readonly strapiSpeaker: Maybe<STRAPI_SPEAKER>;
  readonly allStrapiSpeaker: STRAPI_SPEAKERConnection;
  readonly strapiPartner: Maybe<STRAPI_PARTNER>;
  readonly allStrapiPartner: STRAPI_PARTNERConnection;
  readonly strapiHomepage: Maybe<STRAPI_HOMEPAGE>;
  readonly allStrapiHomepage: STRAPI_HOMEPAGEConnection;
  readonly strapiEvent: Maybe<STRAPI_EVENT>;
  readonly allStrapiEvent: STRAPI_EVENTConnection;
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


type Query_strapiComponentBaseSpeakersGridArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  sectionTitle: Maybe<StringQueryOperatorInput>;
  speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseSpeakersGridArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseScheduleArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  scheduleTitle: Maybe<StringQueryOperatorInput>;
  events: Maybe<STRAPI_EVENTFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseScheduleArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_SCHEDULEFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_SCHEDULESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBasePartnersSliderArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  sectionTitle: Maybe<StringQueryOperatorInput>;
  partners: Maybe<STRAPI_PARTNERFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBasePartnersSliderArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseHeroArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  buttonText: Maybe<StringQueryOperatorInput>;
  buttonUrl: Maybe<StringQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  subtitlePos: Maybe<StringQueryOperatorInput>;
  backgroundImage: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseHeroArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_HEROFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_HEROSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseGalerySliderArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  images: Maybe<STRAPI__MEDIAFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseGalerySliderArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiSpeakerArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  firstName: Maybe<StringQueryOperatorInput>;
  lastName: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  position: Maybe<StringQueryOperatorInput>;
  photo: Maybe<STRAPI_SPEAKERPhotoFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiSpeakerArgs = {
  filter: Maybe<STRAPI_SPEAKERFilterInput>;
  sort: Maybe<STRAPI_SPEAKERSortInput>;
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
  Logo: Maybe<STRAPI_PARTNERLogoFilterInput>;
  whiteLogo: Maybe<STRAPI_PARTNERWhiteLogoFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiPartnerArgs = {
  filter: Maybe<STRAPI_PARTNERFilterInput>;
  sort: Maybe<STRAPI_PARTNERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiHomepageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiHomepageArgs = {
  filter: Maybe<STRAPI_HOMEPAGEFilterInput>;
  sort: Maybe<STRAPI_HOMEPAGESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiEventArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  startHour: Maybe<StringQueryOperatorInput>;
  endHour: Maybe<StringQueryOperatorInput>;
  date: Maybe<StringQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  displayTitleOnDesktop: Maybe<BooleanQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  logo: Maybe<STRAPI_EVENTLogoFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiEventArgs = {
  filter: Maybe<STRAPI_EVENTFilterInput>;
  sort: Maybe<STRAPI_EVENTSortInput>;
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
  readonly large: Maybe<STRAPI__MEDIAFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI__MEDIAFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnailFilterInput>;
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

type STRAPI_SPEAKERFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_SPEAKERFilterInput>;
};

type STRAPI_SPEAKERFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly firstName: Maybe<StringQueryOperatorInput>;
  readonly lastName: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly position: Maybe<StringQueryOperatorInput>;
  readonly photo: Maybe<STRAPI_SPEAKERPhotoFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_SPEAKERPhotoFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsFilterInput = {
  readonly small: Maybe<STRAPI_SPEAKERPhotoFormatsSmallFilterInput>;
  readonly thumbnail: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailFilterInput>;
  readonly large: Maybe<STRAPI_SPEAKERPhotoFormatsLargeFilterInput>;
  readonly medium: Maybe<STRAPI_SPEAKERPhotoFormatsMediumFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsSmallProvider_metadataFilterInput>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStreamFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStreamFilterInput = {
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<StringQueryOperatorInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly bytesRead: Maybe<IntQueryOperatorInput>;
  readonly _eventsCount: Maybe<IntQueryOperatorInput>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateFilterInput = {
  readonly sync: Maybe<BooleanQueryOperatorInput>;
  readonly ended: Maybe<BooleanQueryOperatorInput>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateBufferFilterInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly length: Maybe<IntQueryOperatorInput>;
  readonly flowing: Maybe<BooleanQueryOperatorInput>;
  readonly reading: Maybe<BooleanQueryOperatorInput>;
  readonly destroyed: Maybe<BooleanQueryOperatorInput>;
  readonly emitClose: Maybe<BooleanQueryOperatorInput>;
  readonly endEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly objectMode: Maybe<BooleanQueryOperatorInput>;
  readonly autoDestroy: Maybe<BooleanQueryOperatorInput>;
  readonly constructed: Maybe<BooleanQueryOperatorInput>;
  readonly dataEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly readingMore: Maybe<BooleanQueryOperatorInput>;
  readonly closeEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly errorEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly needReadable: Maybe<BooleanQueryOperatorInput>;
  readonly highWaterMark: Maybe<IntQueryOperatorInput>;
  readonly defaultEncoding: Maybe<StringQueryOperatorInput>;
  readonly emittedReadable: Maybe<BooleanQueryOperatorInput>;
  readonly multiAwaitDrain: Maybe<BooleanQueryOperatorInput>;
  readonly resumeScheduled: Maybe<BooleanQueryOperatorInput>;
  readonly readableListening: Maybe<BooleanQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallStream_readableStateBufferFilterInput = {
  readonly length: Maybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailProvider_metadataFilterInput>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStreamFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStreamFilterInput = {
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<StringQueryOperatorInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly bytesRead: Maybe<IntQueryOperatorInput>;
  readonly _eventsCount: Maybe<IntQueryOperatorInput>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateFilterInput = {
  readonly sync: Maybe<BooleanQueryOperatorInput>;
  readonly ended: Maybe<BooleanQueryOperatorInput>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateBufferFilterInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly length: Maybe<IntQueryOperatorInput>;
  readonly flowing: Maybe<BooleanQueryOperatorInput>;
  readonly reading: Maybe<BooleanQueryOperatorInput>;
  readonly destroyed: Maybe<BooleanQueryOperatorInput>;
  readonly emitClose: Maybe<BooleanQueryOperatorInput>;
  readonly endEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly objectMode: Maybe<BooleanQueryOperatorInput>;
  readonly autoDestroy: Maybe<BooleanQueryOperatorInput>;
  readonly constructed: Maybe<BooleanQueryOperatorInput>;
  readonly dataEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly readingMore: Maybe<BooleanQueryOperatorInput>;
  readonly closeEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly errorEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly needReadable: Maybe<BooleanQueryOperatorInput>;
  readonly highWaterMark: Maybe<IntQueryOperatorInput>;
  readonly defaultEncoding: Maybe<StringQueryOperatorInput>;
  readonly emittedReadable: Maybe<BooleanQueryOperatorInput>;
  readonly multiAwaitDrain: Maybe<BooleanQueryOperatorInput>;
  readonly resumeScheduled: Maybe<BooleanQueryOperatorInput>;
  readonly readableListening: Maybe<BooleanQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailStream_readableStateBufferFilterInput = {
  readonly length: Maybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsLargeProvider_metadataFilterInput>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStreamFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStreamFilterInput = {
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<StringQueryOperatorInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly bytesRead: Maybe<IntQueryOperatorInput>;
  readonly _eventsCount: Maybe<IntQueryOperatorInput>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateFilterInput = {
  readonly sync: Maybe<BooleanQueryOperatorInput>;
  readonly ended: Maybe<BooleanQueryOperatorInput>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateBufferFilterInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly length: Maybe<IntQueryOperatorInput>;
  readonly flowing: Maybe<BooleanQueryOperatorInput>;
  readonly reading: Maybe<BooleanQueryOperatorInput>;
  readonly destroyed: Maybe<BooleanQueryOperatorInput>;
  readonly emitClose: Maybe<BooleanQueryOperatorInput>;
  readonly endEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly objectMode: Maybe<BooleanQueryOperatorInput>;
  readonly autoDestroy: Maybe<BooleanQueryOperatorInput>;
  readonly constructed: Maybe<BooleanQueryOperatorInput>;
  readonly dataEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly readingMore: Maybe<BooleanQueryOperatorInput>;
  readonly closeEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly errorEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly needReadable: Maybe<BooleanQueryOperatorInput>;
  readonly highWaterMark: Maybe<IntQueryOperatorInput>;
  readonly defaultEncoding: Maybe<StringQueryOperatorInput>;
  readonly emittedReadable: Maybe<BooleanQueryOperatorInput>;
  readonly multiAwaitDrain: Maybe<BooleanQueryOperatorInput>;
  readonly resumeScheduled: Maybe<BooleanQueryOperatorInput>;
  readonly readableListening: Maybe<BooleanQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeStream_readableStateBufferFilterInput = {
  readonly length: Maybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_SPEAKERPhotoFormatsMediumProvider_metadataFilterInput>;
  readonly stream: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStreamFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStreamFilterInput = {
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<StringQueryOperatorInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly bytesRead: Maybe<IntQueryOperatorInput>;
  readonly _eventsCount: Maybe<IntQueryOperatorInput>;
  readonly _readableState: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateFilterInput = {
  readonly sync: Maybe<BooleanQueryOperatorInput>;
  readonly ended: Maybe<BooleanQueryOperatorInput>;
  readonly buffer: Maybe<STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateBufferFilterInput>;
  readonly closed: Maybe<BooleanQueryOperatorInput>;
  readonly length: Maybe<IntQueryOperatorInput>;
  readonly flowing: Maybe<BooleanQueryOperatorInput>;
  readonly reading: Maybe<BooleanQueryOperatorInput>;
  readonly destroyed: Maybe<BooleanQueryOperatorInput>;
  readonly emitClose: Maybe<BooleanQueryOperatorInput>;
  readonly endEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly objectMode: Maybe<BooleanQueryOperatorInput>;
  readonly autoDestroy: Maybe<BooleanQueryOperatorInput>;
  readonly constructed: Maybe<BooleanQueryOperatorInput>;
  readonly dataEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly readingMore: Maybe<BooleanQueryOperatorInput>;
  readonly closeEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly errorEmitted: Maybe<BooleanQueryOperatorInput>;
  readonly needReadable: Maybe<BooleanQueryOperatorInput>;
  readonly highWaterMark: Maybe<IntQueryOperatorInput>;
  readonly defaultEncoding: Maybe<StringQueryOperatorInput>;
  readonly emittedReadable: Maybe<BooleanQueryOperatorInput>;
  readonly multiAwaitDrain: Maybe<BooleanQueryOperatorInput>;
  readonly resumeScheduled: Maybe<BooleanQueryOperatorInput>;
  readonly readableListening: Maybe<BooleanQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumStream_readableStateBufferFilterInput = {
  readonly length: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection>;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly node: STRAPI__COMPONENT_BASE_SPEAKERS_GRID;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum =
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
  | 'strapi_component'
  | 'sectionTitle'
  | 'speakers'
  | 'speakers.id'
  | 'speakers.parent.id'
  | 'speakers.parent.parent.id'
  | 'speakers.parent.parent.children'
  | 'speakers.parent.children'
  | 'speakers.parent.children.id'
  | 'speakers.parent.children.children'
  | 'speakers.parent.internal.content'
  | 'speakers.parent.internal.contentDigest'
  | 'speakers.parent.internal.description'
  | 'speakers.parent.internal.fieldOwners'
  | 'speakers.parent.internal.ignoreType'
  | 'speakers.parent.internal.mediaType'
  | 'speakers.parent.internal.owner'
  | 'speakers.parent.internal.type'
  | 'speakers.children'
  | 'speakers.children.id'
  | 'speakers.children.parent.id'
  | 'speakers.children.parent.children'
  | 'speakers.children.children'
  | 'speakers.children.children.id'
  | 'speakers.children.children.children'
  | 'speakers.children.internal.content'
  | 'speakers.children.internal.contentDigest'
  | 'speakers.children.internal.description'
  | 'speakers.children.internal.fieldOwners'
  | 'speakers.children.internal.ignoreType'
  | 'speakers.children.internal.mediaType'
  | 'speakers.children.internal.owner'
  | 'speakers.children.internal.type'
  | 'speakers.internal.content'
  | 'speakers.internal.contentDigest'
  | 'speakers.internal.description'
  | 'speakers.internal.fieldOwners'
  | 'speakers.internal.ignoreType'
  | 'speakers.internal.mediaType'
  | 'speakers.internal.owner'
  | 'speakers.internal.type'
  | 'speakers.createdAt'
  | 'speakers.updatedAt'
  | 'speakers.firstName'
  | 'speakers.lastName'
  | 'speakers.title'
  | 'speakers.description'
  | 'speakers.position'
  | 'speakers.photo.id'
  | 'speakers.photo.name'
  | 'speakers.photo.alternativeText'
  | 'speakers.photo.caption'
  | 'speakers.photo.width'
  | 'speakers.photo.height'
  | 'speakers.photo.hash'
  | 'speakers.photo.ext'
  | 'speakers.photo.mime'
  | 'speakers.photo.size'
  | 'speakers.photo.url'
  | 'speakers.photo.createdAt'
  | 'speakers.photo.updatedAt'
  | 'speakers.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly sectionTitle: Maybe<StringQueryOperatorInput>;
  readonly speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_EVENTFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_EVENTFilterInput>;
};

type STRAPI_EVENTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly startHour: Maybe<StringQueryOperatorInput>;
  readonly endHour: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly displayTitleOnDesktop: Maybe<BooleanQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly logo: Maybe<STRAPI_EVENTLogoFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_EVENTLogoFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsFilterInput = {
  readonly large: Maybe<STRAPI_EVENTLogoFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI_EVENTLogoFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_EVENTLogoFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI_EVENTLogoFormatsThumbnailFilterInput>;
};

type STRAPI_EVENTLogoFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsLargeProvider_metadataFilterInput>;
};

type STRAPI_EVENTLogoFormatsLargeProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsSmallProvider_metadataFilterInput>;
};

type STRAPI_EVENTLogoFormatsSmallProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsMediumProvider_metadataFilterInput>;
};

type STRAPI_EVENTLogoFormatsMediumProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_EVENTLogoFormatsThumbnailProvider_metadataFilterInput>;
};

type STRAPI_EVENTLogoFormatsThumbnailProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection>;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SCHEDULEEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly node: STRAPI__COMPONENT_BASE_SCHEDULE;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum =
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
  | 'strapi_component'
  | 'scheduleTitle'
  | 'events'
  | 'events.id'
  | 'events.parent.id'
  | 'events.parent.parent.id'
  | 'events.parent.parent.children'
  | 'events.parent.children'
  | 'events.parent.children.id'
  | 'events.parent.children.children'
  | 'events.parent.internal.content'
  | 'events.parent.internal.contentDigest'
  | 'events.parent.internal.description'
  | 'events.parent.internal.fieldOwners'
  | 'events.parent.internal.ignoreType'
  | 'events.parent.internal.mediaType'
  | 'events.parent.internal.owner'
  | 'events.parent.internal.type'
  | 'events.children'
  | 'events.children.id'
  | 'events.children.parent.id'
  | 'events.children.parent.children'
  | 'events.children.children'
  | 'events.children.children.id'
  | 'events.children.children.children'
  | 'events.children.internal.content'
  | 'events.children.internal.contentDigest'
  | 'events.children.internal.description'
  | 'events.children.internal.fieldOwners'
  | 'events.children.internal.ignoreType'
  | 'events.children.internal.mediaType'
  | 'events.children.internal.owner'
  | 'events.children.internal.type'
  | 'events.internal.content'
  | 'events.internal.contentDigest'
  | 'events.internal.description'
  | 'events.internal.fieldOwners'
  | 'events.internal.ignoreType'
  | 'events.internal.mediaType'
  | 'events.internal.owner'
  | 'events.internal.type'
  | 'events.startHour'
  | 'events.endHour'
  | 'events.date'
  | 'events.backgroundColor'
  | 'events.title'
  | 'events.displayTitleOnDesktop'
  | 'events.createdAt'
  | 'events.updatedAt'
  | 'events.logo.id'
  | 'events.logo.name'
  | 'events.logo.alternativeText'
  | 'events.logo.caption'
  | 'events.logo.width'
  | 'events.logo.height'
  | 'events.logo.hash'
  | 'events.logo.ext'
  | 'events.logo.mime'
  | 'events.logo.size'
  | 'events.logo.url'
  | 'events.logo.createdAt'
  | 'events.logo.updatedAt'
  | 'events.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SCHEDULEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly scheduleTitle: Maybe<StringQueryOperatorInput>;
  readonly events: Maybe<STRAPI_EVENTFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SCHEDULESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_SCHEDULEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_PARTNERFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_PARTNERFilterInput>;
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
  readonly Logo: Maybe<STRAPI_PARTNERLogoFilterInput>;
  readonly whiteLogo: Maybe<STRAPI_PARTNERWhiteLogoFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_PARTNERLogoFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsFilterInput = {
  readonly thumbnail: Maybe<STRAPI_PARTNERLogoFormatsThumbnailFilterInput>;
};

type STRAPI_PARTNERLogoFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERLogoFormatsThumbnailProvider_metadataFilterInput>;
};

type STRAPI_PARTNERLogoFormatsThumbnailProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_PARTNERWhiteLogoFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsFilterInput = {
  readonly thumbnail: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailFilterInput>;
  readonly small: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_PARTNERWhiteLogoFormatsMediumFilterInput>;
  readonly large: Maybe<STRAPI_PARTNERWhiteLogoFormatsLargeFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailProvider_metadataFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmallProvider_metadataFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsMediumProvider_metadataFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly provider_metadata: Maybe<STRAPI_PARTNERWhiteLogoFormatsLargeProvider_metadataFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeProvider_metadataFilterInput = {
  readonly public_id: Maybe<StringQueryOperatorInput>;
  readonly resource_type: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection>;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly node: STRAPI__COMPONENT_BASE_PARTNERS_SLIDER;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum =
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
  | 'strapi_component'
  | 'sectionTitle'
  | 'partners'
  | 'partners.id'
  | 'partners.parent.id'
  | 'partners.parent.parent.id'
  | 'partners.parent.parent.children'
  | 'partners.parent.children'
  | 'partners.parent.children.id'
  | 'partners.parent.children.children'
  | 'partners.parent.internal.content'
  | 'partners.parent.internal.contentDigest'
  | 'partners.parent.internal.description'
  | 'partners.parent.internal.fieldOwners'
  | 'partners.parent.internal.ignoreType'
  | 'partners.parent.internal.mediaType'
  | 'partners.parent.internal.owner'
  | 'partners.parent.internal.type'
  | 'partners.children'
  | 'partners.children.id'
  | 'partners.children.parent.id'
  | 'partners.children.parent.children'
  | 'partners.children.children'
  | 'partners.children.children.id'
  | 'partners.children.children.children'
  | 'partners.children.internal.content'
  | 'partners.children.internal.contentDigest'
  | 'partners.children.internal.description'
  | 'partners.children.internal.fieldOwners'
  | 'partners.children.internal.ignoreType'
  | 'partners.children.internal.mediaType'
  | 'partners.children.internal.owner'
  | 'partners.children.internal.type'
  | 'partners.internal.content'
  | 'partners.internal.contentDigest'
  | 'partners.internal.description'
  | 'partners.internal.fieldOwners'
  | 'partners.internal.ignoreType'
  | 'partners.internal.mediaType'
  | 'partners.internal.owner'
  | 'partners.internal.type'
  | 'partners.Name'
  | 'partners.WebsiteURL'
  | 'partners.createdAt'
  | 'partners.updatedAt'
  | 'partners.Logo.id'
  | 'partners.Logo.name'
  | 'partners.Logo.alternativeText'
  | 'partners.Logo.caption'
  | 'partners.Logo.width'
  | 'partners.Logo.height'
  | 'partners.Logo.hash'
  | 'partners.Logo.ext'
  | 'partners.Logo.mime'
  | 'partners.Logo.size'
  | 'partners.Logo.url'
  | 'partners.Logo.createdAt'
  | 'partners.Logo.updatedAt'
  | 'partners.whiteLogo.id'
  | 'partners.whiteLogo.name'
  | 'partners.whiteLogo.alternativeText'
  | 'partners.whiteLogo.caption'
  | 'partners.whiteLogo.width'
  | 'partners.whiteLogo.height'
  | 'partners.whiteLogo.hash'
  | 'partners.whiteLogo.ext'
  | 'partners.whiteLogo.mime'
  | 'partners.whiteLogo.size'
  | 'partners.whiteLogo.url'
  | 'partners.whiteLogo.createdAt'
  | 'partners.whiteLogo.updatedAt'
  | 'partners.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly sectionTitle: Maybe<StringQueryOperatorInput>;
  readonly partners: Maybe<STRAPI_PARTNERFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI__COMPONENT_BASE_HEROConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_HERO>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROGroupConnection>;
};


type STRAPI__COMPONENT_BASE_HEROConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};

type STRAPI__COMPONENT_BASE_HEROEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_HERO>;
  readonly node: STRAPI__COMPONENT_BASE_HERO;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_HERO>;
};

type STRAPI__COMPONENT_BASE_HEROFieldsEnum =
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
  | 'strapi_component'
  | 'title'
  | 'subtitle'
  | 'buttonText'
  | 'buttonUrl'
  | 'backgroundColor'
  | 'subtitlePos'
  | 'backgroundImage.id'
  | 'backgroundImage.parent.id'
  | 'backgroundImage.parent.parent.id'
  | 'backgroundImage.parent.parent.children'
  | 'backgroundImage.parent.children'
  | 'backgroundImage.parent.children.id'
  | 'backgroundImage.parent.children.children'
  | 'backgroundImage.parent.internal.content'
  | 'backgroundImage.parent.internal.contentDigest'
  | 'backgroundImage.parent.internal.description'
  | 'backgroundImage.parent.internal.fieldOwners'
  | 'backgroundImage.parent.internal.ignoreType'
  | 'backgroundImage.parent.internal.mediaType'
  | 'backgroundImage.parent.internal.owner'
  | 'backgroundImage.parent.internal.type'
  | 'backgroundImage.children'
  | 'backgroundImage.children.id'
  | 'backgroundImage.children.parent.id'
  | 'backgroundImage.children.parent.children'
  | 'backgroundImage.children.children'
  | 'backgroundImage.children.children.id'
  | 'backgroundImage.children.children.children'
  | 'backgroundImage.children.internal.content'
  | 'backgroundImage.children.internal.contentDigest'
  | 'backgroundImage.children.internal.description'
  | 'backgroundImage.children.internal.fieldOwners'
  | 'backgroundImage.children.internal.ignoreType'
  | 'backgroundImage.children.internal.mediaType'
  | 'backgroundImage.children.internal.owner'
  | 'backgroundImage.children.internal.type'
  | 'backgroundImage.internal.content'
  | 'backgroundImage.internal.contentDigest'
  | 'backgroundImage.internal.description'
  | 'backgroundImage.internal.fieldOwners'
  | 'backgroundImage.internal.ignoreType'
  | 'backgroundImage.internal.mediaType'
  | 'backgroundImage.internal.owner'
  | 'backgroundImage.internal.type'
  | 'backgroundImage.name'
  | 'backgroundImage.alternativeText'
  | 'backgroundImage.caption'
  | 'backgroundImage.width'
  | 'backgroundImage.height'
  | 'backgroundImage.formats.large.ext'
  | 'backgroundImage.formats.large.url'
  | 'backgroundImage.formats.large.hash'
  | 'backgroundImage.formats.large.mime'
  | 'backgroundImage.formats.large.name'
  | 'backgroundImage.formats.large.size'
  | 'backgroundImage.formats.large.width'
  | 'backgroundImage.formats.large.height'
  | 'backgroundImage.formats.small.ext'
  | 'backgroundImage.formats.small.url'
  | 'backgroundImage.formats.small.hash'
  | 'backgroundImage.formats.small.mime'
  | 'backgroundImage.formats.small.name'
  | 'backgroundImage.formats.small.size'
  | 'backgroundImage.formats.small.width'
  | 'backgroundImage.formats.small.height'
  | 'backgroundImage.formats.medium.ext'
  | 'backgroundImage.formats.medium.url'
  | 'backgroundImage.formats.medium.hash'
  | 'backgroundImage.formats.medium.mime'
  | 'backgroundImage.formats.medium.name'
  | 'backgroundImage.formats.medium.size'
  | 'backgroundImage.formats.medium.width'
  | 'backgroundImage.formats.medium.height'
  | 'backgroundImage.formats.thumbnail.ext'
  | 'backgroundImage.formats.thumbnail.url'
  | 'backgroundImage.formats.thumbnail.hash'
  | 'backgroundImage.formats.thumbnail.mime'
  | 'backgroundImage.formats.thumbnail.name'
  | 'backgroundImage.formats.thumbnail.size'
  | 'backgroundImage.formats.thumbnail.width'
  | 'backgroundImage.formats.thumbnail.height'
  | 'backgroundImage.hash'
  | 'backgroundImage.ext'
  | 'backgroundImage.mime'
  | 'backgroundImage.size'
  | 'backgroundImage.url'
  | 'backgroundImage.createdAt'
  | 'backgroundImage.updatedAt'
  | 'backgroundImage.localFile.sourceInstanceName'
  | 'backgroundImage.localFile.absolutePath'
  | 'backgroundImage.localFile.relativePath'
  | 'backgroundImage.localFile.extension'
  | 'backgroundImage.localFile.size'
  | 'backgroundImage.localFile.prettySize'
  | 'backgroundImage.localFile.modifiedTime'
  | 'backgroundImage.localFile.accessTime'
  | 'backgroundImage.localFile.changeTime'
  | 'backgroundImage.localFile.birthTime'
  | 'backgroundImage.localFile.root'
  | 'backgroundImage.localFile.dir'
  | 'backgroundImage.localFile.base'
  | 'backgroundImage.localFile.ext'
  | 'backgroundImage.localFile.name'
  | 'backgroundImage.localFile.relativeDirectory'
  | 'backgroundImage.localFile.dev'
  | 'backgroundImage.localFile.mode'
  | 'backgroundImage.localFile.nlink'
  | 'backgroundImage.localFile.uid'
  | 'backgroundImage.localFile.gid'
  | 'backgroundImage.localFile.rdev'
  | 'backgroundImage.localFile.ino'
  | 'backgroundImage.localFile.atimeMs'
  | 'backgroundImage.localFile.mtimeMs'
  | 'backgroundImage.localFile.ctimeMs'
  | 'backgroundImage.localFile.atime'
  | 'backgroundImage.localFile.mtime'
  | 'backgroundImage.localFile.ctime'
  | 'backgroundImage.localFile.birthtime'
  | 'backgroundImage.localFile.birthtimeMs'
  | 'backgroundImage.localFile.blksize'
  | 'backgroundImage.localFile.blocks'
  | 'backgroundImage.localFile.url'
  | 'backgroundImage.localFile.id'
  | 'backgroundImage.localFile.parent.id'
  | 'backgroundImage.localFile.parent.children'
  | 'backgroundImage.localFile.children'
  | 'backgroundImage.localFile.children.id'
  | 'backgroundImage.localFile.children.children'
  | 'backgroundImage.localFile.internal.content'
  | 'backgroundImage.localFile.internal.contentDigest'
  | 'backgroundImage.localFile.internal.description'
  | 'backgroundImage.localFile.internal.fieldOwners'
  | 'backgroundImage.localFile.internal.ignoreType'
  | 'backgroundImage.localFile.internal.mediaType'
  | 'backgroundImage.localFile.internal.owner'
  | 'backgroundImage.localFile.internal.type'
  | 'backgroundImage.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_HEROGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_HERO>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_HEROFieldsEnum;
};

type STRAPI__COMPONENT_BASE_HEROFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly buttonText: Maybe<StringQueryOperatorInput>;
  readonly buttonUrl: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly subtitlePos: Maybe<StringQueryOperatorInput>;
  readonly backgroundImage: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_HEROSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_HEROFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI__MEDIAFilterListInput = {
  readonly elemMatch: Maybe<STRAPI__MEDIAFilterInput>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection>;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly node: STRAPI__COMPONENT_BASE_GALERY_SLIDER;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum =
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
  | 'strapi_component'
  | 'title'
  | 'images'
  | 'images.id'
  | 'images.parent.id'
  | 'images.parent.parent.id'
  | 'images.parent.parent.children'
  | 'images.parent.children'
  | 'images.parent.children.id'
  | 'images.parent.children.children'
  | 'images.parent.internal.content'
  | 'images.parent.internal.contentDigest'
  | 'images.parent.internal.description'
  | 'images.parent.internal.fieldOwners'
  | 'images.parent.internal.ignoreType'
  | 'images.parent.internal.mediaType'
  | 'images.parent.internal.owner'
  | 'images.parent.internal.type'
  | 'images.children'
  | 'images.children.id'
  | 'images.children.parent.id'
  | 'images.children.parent.children'
  | 'images.children.children'
  | 'images.children.children.id'
  | 'images.children.children.children'
  | 'images.children.internal.content'
  | 'images.children.internal.contentDigest'
  | 'images.children.internal.description'
  | 'images.children.internal.fieldOwners'
  | 'images.children.internal.ignoreType'
  | 'images.children.internal.mediaType'
  | 'images.children.internal.owner'
  | 'images.children.internal.type'
  | 'images.internal.content'
  | 'images.internal.contentDigest'
  | 'images.internal.description'
  | 'images.internal.fieldOwners'
  | 'images.internal.ignoreType'
  | 'images.internal.mediaType'
  | 'images.internal.owner'
  | 'images.internal.type'
  | 'images.name'
  | 'images.alternativeText'
  | 'images.caption'
  | 'images.width'
  | 'images.height'
  | 'images.formats.large.ext'
  | 'images.formats.large.url'
  | 'images.formats.large.hash'
  | 'images.formats.large.mime'
  | 'images.formats.large.name'
  | 'images.formats.large.size'
  | 'images.formats.large.width'
  | 'images.formats.large.height'
  | 'images.formats.small.ext'
  | 'images.formats.small.url'
  | 'images.formats.small.hash'
  | 'images.formats.small.mime'
  | 'images.formats.small.name'
  | 'images.formats.small.size'
  | 'images.formats.small.width'
  | 'images.formats.small.height'
  | 'images.formats.medium.ext'
  | 'images.formats.medium.url'
  | 'images.formats.medium.hash'
  | 'images.formats.medium.mime'
  | 'images.formats.medium.name'
  | 'images.formats.medium.size'
  | 'images.formats.medium.width'
  | 'images.formats.medium.height'
  | 'images.formats.thumbnail.ext'
  | 'images.formats.thumbnail.url'
  | 'images.formats.thumbnail.hash'
  | 'images.formats.thumbnail.mime'
  | 'images.formats.thumbnail.name'
  | 'images.formats.thumbnail.size'
  | 'images.formats.thumbnail.width'
  | 'images.formats.thumbnail.height'
  | 'images.hash'
  | 'images.ext'
  | 'images.mime'
  | 'images.size'
  | 'images.url'
  | 'images.createdAt'
  | 'images.updatedAt'
  | 'images.localFile.sourceInstanceName'
  | 'images.localFile.absolutePath'
  | 'images.localFile.relativePath'
  | 'images.localFile.extension'
  | 'images.localFile.size'
  | 'images.localFile.prettySize'
  | 'images.localFile.modifiedTime'
  | 'images.localFile.accessTime'
  | 'images.localFile.changeTime'
  | 'images.localFile.birthTime'
  | 'images.localFile.root'
  | 'images.localFile.dir'
  | 'images.localFile.base'
  | 'images.localFile.ext'
  | 'images.localFile.name'
  | 'images.localFile.relativeDirectory'
  | 'images.localFile.dev'
  | 'images.localFile.mode'
  | 'images.localFile.nlink'
  | 'images.localFile.uid'
  | 'images.localFile.gid'
  | 'images.localFile.rdev'
  | 'images.localFile.ino'
  | 'images.localFile.atimeMs'
  | 'images.localFile.mtimeMs'
  | 'images.localFile.ctimeMs'
  | 'images.localFile.atime'
  | 'images.localFile.mtime'
  | 'images.localFile.ctime'
  | 'images.localFile.birthtime'
  | 'images.localFile.birthtimeMs'
  | 'images.localFile.blksize'
  | 'images.localFile.blocks'
  | 'images.localFile.url'
  | 'images.localFile.id'
  | 'images.localFile.parent.id'
  | 'images.localFile.parent.children'
  | 'images.localFile.children'
  | 'images.localFile.children.id'
  | 'images.localFile.children.children'
  | 'images.localFile.internal.content'
  | 'images.localFile.internal.contentDigest'
  | 'images.localFile.internal.description'
  | 'images.localFile.internal.fieldOwners'
  | 'images.localFile.internal.ignoreType'
  | 'images.localFile.internal.mediaType'
  | 'images.localFile.internal.owner'
  | 'images.localFile.internal.type'
  | 'images.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<STRAPI__MEDIAFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  | 'createdAt'
  | 'updatedAt'
  | 'firstName'
  | 'lastName'
  | 'title'
  | 'description'
  | 'position'
  | 'photo.id'
  | 'photo.name'
  | 'photo.alternativeText'
  | 'photo.caption'
  | 'photo.width'
  | 'photo.height'
  | 'photo.formats.small.ext'
  | 'photo.formats.small.url'
  | 'photo.formats.small.hash'
  | 'photo.formats.small.mime'
  | 'photo.formats.small.name'
  | 'photo.formats.small.size'
  | 'photo.formats.small.width'
  | 'photo.formats.small.height'
  | 'photo.formats.thumbnail.ext'
  | 'photo.formats.thumbnail.url'
  | 'photo.formats.thumbnail.hash'
  | 'photo.formats.thumbnail.mime'
  | 'photo.formats.thumbnail.name'
  | 'photo.formats.thumbnail.size'
  | 'photo.formats.thumbnail.width'
  | 'photo.formats.thumbnail.height'
  | 'photo.formats.large.ext'
  | 'photo.formats.large.url'
  | 'photo.formats.large.hash'
  | 'photo.formats.large.mime'
  | 'photo.formats.large.name'
  | 'photo.formats.large.size'
  | 'photo.formats.large.width'
  | 'photo.formats.large.height'
  | 'photo.formats.medium.ext'
  | 'photo.formats.medium.url'
  | 'photo.formats.medium.hash'
  | 'photo.formats.medium.mime'
  | 'photo.formats.medium.name'
  | 'photo.formats.medium.size'
  | 'photo.formats.medium.width'
  | 'photo.formats.medium.height'
  | 'photo.hash'
  | 'photo.ext'
  | 'photo.mime'
  | 'photo.size'
  | 'photo.url'
  | 'photo.createdAt'
  | 'photo.updatedAt'
  | 'strapi_id';

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

type STRAPI_SPEAKERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKERFieldsEnum>>>;
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
  | 'Logo.name'
  | 'Logo.alternativeText'
  | 'Logo.caption'
  | 'Logo.width'
  | 'Logo.height'
  | 'Logo.formats.thumbnail.ext'
  | 'Logo.formats.thumbnail.url'
  | 'Logo.formats.thumbnail.hash'
  | 'Logo.formats.thumbnail.mime'
  | 'Logo.formats.thumbnail.name'
  | 'Logo.formats.thumbnail.size'
  | 'Logo.formats.thumbnail.width'
  | 'Logo.formats.thumbnail.height'
  | 'Logo.hash'
  | 'Logo.ext'
  | 'Logo.mime'
  | 'Logo.size'
  | 'Logo.url'
  | 'Logo.createdAt'
  | 'Logo.updatedAt'
  | 'whiteLogo.id'
  | 'whiteLogo.name'
  | 'whiteLogo.alternativeText'
  | 'whiteLogo.caption'
  | 'whiteLogo.width'
  | 'whiteLogo.height'
  | 'whiteLogo.formats.thumbnail.ext'
  | 'whiteLogo.formats.thumbnail.url'
  | 'whiteLogo.formats.thumbnail.hash'
  | 'whiteLogo.formats.thumbnail.mime'
  | 'whiteLogo.formats.thumbnail.name'
  | 'whiteLogo.formats.thumbnail.size'
  | 'whiteLogo.formats.thumbnail.width'
  | 'whiteLogo.formats.thumbnail.height'
  | 'whiteLogo.formats.small.ext'
  | 'whiteLogo.formats.small.url'
  | 'whiteLogo.formats.small.hash'
  | 'whiteLogo.formats.small.mime'
  | 'whiteLogo.formats.small.name'
  | 'whiteLogo.formats.small.size'
  | 'whiteLogo.formats.small.width'
  | 'whiteLogo.formats.small.height'
  | 'whiteLogo.formats.medium.ext'
  | 'whiteLogo.formats.medium.url'
  | 'whiteLogo.formats.medium.hash'
  | 'whiteLogo.formats.medium.mime'
  | 'whiteLogo.formats.medium.name'
  | 'whiteLogo.formats.medium.size'
  | 'whiteLogo.formats.medium.width'
  | 'whiteLogo.formats.medium.height'
  | 'whiteLogo.formats.large.ext'
  | 'whiteLogo.formats.large.url'
  | 'whiteLogo.formats.large.hash'
  | 'whiteLogo.formats.large.mime'
  | 'whiteLogo.formats.large.name'
  | 'whiteLogo.formats.large.size'
  | 'whiteLogo.formats.large.width'
  | 'whiteLogo.formats.large.height'
  | 'whiteLogo.hash'
  | 'whiteLogo.ext'
  | 'whiteLogo.mime'
  | 'whiteLogo.size'
  | 'whiteLogo.url'
  | 'whiteLogo.createdAt'
  | 'whiteLogo.updatedAt'
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

type STRAPI_PARTNERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_PARTNERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_HOMEPAGEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
};


type STRAPI_HOMEPAGEConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_HOMEPAGEFieldsEnum;
};

type STRAPI_HOMEPAGEEdge = {
  readonly next: Maybe<STRAPI_HOMEPAGE>;
  readonly node: STRAPI_HOMEPAGE;
  readonly previous: Maybe<STRAPI_HOMEPAGE>;
};

type STRAPI_HOMEPAGEFieldsEnum =
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
  | 'createdAt'
  | 'updatedAt'
  | 'strapi_id';

type STRAPI_HOMEPAGEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_HOMEPAGEGroupConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEGroupConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEGroupConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEGroupConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldsEnum;
};


type STRAPI_HOMEPAGEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_HOMEPAGEFieldsEnum;
};

type STRAPI_HOMEPAGEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_HOMEPAGESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_HOMEPAGEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_EVENTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_EVENTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_EVENT>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_EVENTGroupConnection>;
};


type STRAPI_EVENTConnection_distinctArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTConnection_maxArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTConnection_minArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTConnection_sumArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_EVENTFieldsEnum;
};

type STRAPI_EVENTEdge = {
  readonly next: Maybe<STRAPI_EVENT>;
  readonly node: STRAPI_EVENT;
  readonly previous: Maybe<STRAPI_EVENT>;
};

type STRAPI_EVENTFieldsEnum =
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
  | 'startHour'
  | 'endHour'
  | 'date'
  | 'backgroundColor'
  | 'title'
  | 'displayTitleOnDesktop'
  | 'createdAt'
  | 'updatedAt'
  | 'logo.id'
  | 'logo.name'
  | 'logo.alternativeText'
  | 'logo.caption'
  | 'logo.width'
  | 'logo.height'
  | 'logo.formats.large.ext'
  | 'logo.formats.large.url'
  | 'logo.formats.large.hash'
  | 'logo.formats.large.mime'
  | 'logo.formats.large.name'
  | 'logo.formats.large.size'
  | 'logo.formats.large.width'
  | 'logo.formats.large.height'
  | 'logo.formats.small.ext'
  | 'logo.formats.small.url'
  | 'logo.formats.small.hash'
  | 'logo.formats.small.mime'
  | 'logo.formats.small.name'
  | 'logo.formats.small.size'
  | 'logo.formats.small.width'
  | 'logo.formats.small.height'
  | 'logo.formats.medium.ext'
  | 'logo.formats.medium.url'
  | 'logo.formats.medium.hash'
  | 'logo.formats.medium.mime'
  | 'logo.formats.medium.name'
  | 'logo.formats.medium.size'
  | 'logo.formats.medium.width'
  | 'logo.formats.medium.height'
  | 'logo.formats.thumbnail.ext'
  | 'logo.formats.thumbnail.url'
  | 'logo.formats.thumbnail.hash'
  | 'logo.formats.thumbnail.mime'
  | 'logo.formats.thumbnail.name'
  | 'logo.formats.thumbnail.size'
  | 'logo.formats.thumbnail.width'
  | 'logo.formats.thumbnail.height'
  | 'logo.hash'
  | 'logo.ext'
  | 'logo.mime'
  | 'logo.size'
  | 'logo.url'
  | 'logo.createdAt'
  | 'logo.updatedAt'
  | 'strapi_id';

type STRAPI_EVENTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_EVENTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_EVENT>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_EVENTGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_EVENTGroupConnection_distinctArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTGroupConnection_maxArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTGroupConnection_minArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTGroupConnection_sumArgs = {
  field: STRAPI_EVENTFieldsEnum;
};


type STRAPI_EVENTGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_EVENTFieldsEnum;
};

type STRAPI_EVENTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_EVENTFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type pageUserspatrykSelleobbdaysbbdaysWebsitesrcpagesindexTsx1107038256QueryVariables = Exact<{ [key: string]: never; }>;


type pageUserspatrykSelleobbdaysbbdaysWebsitesrcpagesindexTsx1107038256Query = { readonly strapiHomepage: Maybe<{ readonly homepage: Maybe<ReadonlyArray<Maybe<(
      Pick<STRAPI__COMPONENT_BASE_GALERY_SLIDER, 'id' | 'title' | 'strapi_component'>
      & { readonly images: Maybe<ReadonlyArray<Maybe<Pick<STRAPI__MEDIA, 'id' | 'url'>>>> }
    ) | (
      Pick<STRAPI__COMPONENT_BASE_HERO, 'id' | 'backgroundColor' | 'buttonUrl' | 'buttonText' | 'subtitle' | 'subtitlePos' | 'title' | 'strapi_component'>
      & { readonly backgroundImage: Maybe<Pick<STRAPI__MEDIA, 'url'>> }
    ) | (
      Pick<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER, 'id' | 'sectionTitle' | 'strapi_component'>
      & { readonly partners: Maybe<ReadonlyArray<Maybe<(
        Pick<STRAPI_PARTNER, 'id' | 'Name' | 'WebsiteURL'>
        & { readonly Logo: Maybe<Pick<STRAPI_PARTNERLogo, 'url'>>, readonly whiteLogo: Maybe<Pick<STRAPI_PARTNERWhiteLogo, 'url'>> }
      )>>> }
    ) | (
      Pick<STRAPI__COMPONENT_BASE_SCHEDULE, 'id' | 'scheduleTitle' | 'strapi_component'>
      & { readonly events: Maybe<ReadonlyArray<Maybe<(
        Pick<STRAPI_EVENT, 'title' | 'startHour' | 'endHour' | 'date' | 'backgroundColor' | 'displayTitleOnDesktop'>
        & { readonly logo: Maybe<Pick<STRAPI_EVENTLogo, 'url'>> }
      )>>> }
    ) | (
      Pick<STRAPI__COMPONENT_BASE_SPEAKERS_GRID, 'id' | 'sectionTitle' | 'strapi_component'>
      & { readonly speakers: Maybe<ReadonlyArray<Maybe<(
        Pick<STRAPI_SPEAKER, 'firstName' | 'lastName' | 'title' | 'description' | 'position'>
        & { readonly photo: Maybe<Pick<STRAPI_SPEAKERPhoto, 'url'>> }
      )>>> }
    )>>> }> };

}