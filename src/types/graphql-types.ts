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
  readonly contentFilePath: Maybe<Scalars['String']>;
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
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
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
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTION = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly videoId: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly article: Maybe<Scalars['String']>;
  readonly footer: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LIST = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly video_lists: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOLIST>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_VIDEO = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly webm: Maybe<STRAPI__MEDIA>;
  readonly mp4: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRID = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly sectionSubtitle: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRID = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly bannerImage: Maybe<STRAPI__MEDIA>;
  readonly signup_sections: Maybe<ReadonlyArray<Maybe<STRAPI_SIGNUP_SECTION>>>;
  readonly signupImage: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SCHEDULE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly scheduleTitle: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
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
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
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
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly videoId: Maybe<Scalars['String']>;
  readonly footer: Maybe<Scalars['String']>;
  readonly backgroundImage: Maybe<STRAPI__MEDIA>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly backgroundVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly achievements: Maybe<ReadonlyArray<Maybe<STRAPI_ACHIEVEMENT>>>;
  readonly backgroundImages: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_AGENDA = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly lectures: Maybe<ReadonlyArray<Maybe<STRAPI_LECTURE>>>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOSPAGE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly footerSubtitle: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly videospage: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_VIDEOS_LISTUnion>>>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_VIDEOSPAGE_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOSPAGE_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_VIDEOS_LISTUnion = STRAPI__COMPONENT_BASE_GALERY_SLIDER | STRAPI__COMPONENT_BASE_HERO | STRAPI__COMPONENT_BASE_VIDEOS_LIST;

type STRAPI_VIDEOLIST = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly videoUrl: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnail>;
  readonly localizations: Maybe<STRAPI_VIDEOLISTLocalizations>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_VIDEOLIST_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLIST_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_VIDEOLISTThumbnail = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_VIDEOLISTThumbnailFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_VIDEOLISTThumbnail_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTThumbnail_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_VIDEOLISTThumbnailFormats = {
  readonly large: Maybe<STRAPI_VIDEOLISTThumbnailFormatsLarge>;
  readonly small: Maybe<STRAPI_VIDEOLISTThumbnailFormatsSmall>;
  readonly medium: Maybe<STRAPI_VIDEOLISTThumbnailFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnail>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOLISTLocalizationsData>>>;
};

type STRAPI_VIDEOLISTLocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_VIDEOLISTLocalizationsDataAttributes>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly videoUrl: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTLocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTLocalizationsDataAttributes_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_SPEAKER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly linkedinUrl: Maybe<Scalars['String']>;
  readonly twitterUrl: Maybe<Scalars['String']>;
  readonly linktrUrl: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly photo: Maybe<STRAPI_SPEAKERPhoto>;
  readonly localizations: Maybe<STRAPI_SPEAKERLocalizations>;
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
  readonly large: Maybe<STRAPI_SPEAKERPhotoFormatsLarge>;
  readonly small: Maybe<STRAPI_SPEAKERPhotoFormatsSmall>;
  readonly medium: Maybe<STRAPI_SPEAKERPhotoFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnail>;
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
};

type STRAPI_SPEAKERLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKERLocalizationsData>>>;
};

type STRAPI_SPEAKERLocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_SPEAKERLocalizationsDataAttributes>;
};

type STRAPI_SPEAKERLocalizationsDataAttributes = {
  readonly firstName: Maybe<Scalars['String']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly linkedinUrl: Maybe<Scalars['String']>;
  readonly twitterUrl: Maybe<Scalars['String']>;
  readonly linktrUrl: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKERLocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SPEAKERLocalizationsDataAttributes_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_SIGNUP_SECTION = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_SIGNUP_SECTIONLocalizations>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_SIGNUP_SECTION_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTION_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_SIGNUP_SECTIONLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_SIGNUP_SECTIONLocalizationsData>>>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes = {
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_RULES_TEXT_TEXTNODE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly text: Maybe<Scalars['String']>;
};

type STRAPI_RULES = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly text: Maybe<STRAPI_RULESText>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  /** Returns all children nodes filtered by type STRAPI_RULES_TEXT_TEXTNODE */
  readonly childrenStrapiRulesTextTextnode: Maybe<ReadonlyArray<Maybe<STRAPI_RULES_TEXT_TEXTNODE>>>;
  /** Returns the first child node of type STRAPI_RULES_TEXT_TEXTNODE or null if there are no children of given type on this node */
  readonly childStrapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
};


type STRAPI_RULES_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_RULES_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_RULESText = {
  readonly data: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly text: Maybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICY = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly text: Maybe<STRAPI_PRIVACYPOLICYText>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  /** Returns all children nodes filtered by type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE */
  readonly childrenStrapiPrivacypolicyTextTextnode: Maybe<ReadonlyArray<Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>>>;
  /** Returns the first child node of type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE or null if there are no children of given type on this node */
  readonly childStrapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
};


type STRAPI_PRIVACYPOLICY_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICY_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICYText = {
  readonly data: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
};

type STRAPI_PARTNER = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly Name: Maybe<Scalars['String']>;
  readonly WebsiteURL: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
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
  readonly large: Maybe<STRAPI_PARTNERLogoFormatsLarge>;
  readonly small: Maybe<STRAPI_PARTNERLogoFormatsSmall>;
  readonly medium: Maybe<STRAPI_PARTNERLogoFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI_PARTNERLogoFormatsThumbnail>;
};

type STRAPI_PARTNERLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
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
  readonly large: Maybe<STRAPI_PARTNERWhiteLogoFormatsLarge>;
  readonly small: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmall>;
  readonly medium: Maybe<STRAPI_PARTNERWhiteLogoFormatsMedium>;
  readonly thumbnail: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnail>;
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
};

type STRAPI_LECTURE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly room: Maybe<Scalars['Int']>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly logo: Maybe<STRAPI_LECTURELogo>;
  readonly localizations: Maybe<STRAPI_LECTURELocalizations>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_LECTURE_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_LECTURE_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_LECTURELogo = {
  readonly id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<STRAPI_LECTURELogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_LECTURELogo_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_LECTURELogo_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_LECTURELogoFormats = {
  readonly small: Maybe<STRAPI_LECTURELogoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_LECTURELogoFormatsThumbnail>;
};

type STRAPI_LECTURELogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_LECTURELogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type STRAPI_LECTURELocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_LECTURELocalizationsData>>>;
};

type STRAPI_LECTURELocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_LECTURELocalizationsDataAttributes>;
};

type STRAPI_LECTURELocalizationsDataAttributes = {
  readonly title: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly room: Maybe<Scalars['Int']>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_LECTURELocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_LECTURELocalizationsDataAttributes_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_HOMEPAGE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly homepage: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_AGENDASTRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSTRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SIGNUP_GRIDSTRAPI__COMPONENT_BASE_SPEAKERS_GRIDSTRAPI__COMPONENT_BASE_VIDEO_SECTIONUnion>>>;
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

type STRAPI__COMPONENT_BASE_AGENDASTRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSTRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SIGNUP_GRIDSTRAPI__COMPONENT_BASE_SPEAKERS_GRIDSTRAPI__COMPONENT_BASE_VIDEO_SECTIONUnion = STRAPI__COMPONENT_BASE_AGENDA | STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS | STRAPI__COMPONENT_BASE_GALERY_SLIDER | STRAPI__COMPONENT_BASE_HERO | STRAPI__COMPONENT_BASE_PARTNERS_SLIDER | STRAPI__COMPONENT_BASE_SCHEDULE | STRAPI__COMPONENT_BASE_SIGNUP_GRID | STRAPI__COMPONENT_BASE_SPEAKERS_GRID | STRAPI__COMPONENT_BASE_VIDEO_SECTION;

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
  readonly link: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly logo: Maybe<STRAPI_EVENTLogo>;
  readonly localizations: Maybe<STRAPI_EVENTLocalizations>;
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

type STRAPI_EVENTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_EVENTLocalizationsData>>>;
};

type STRAPI_EVENTLocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_EVENTLocalizationsDataAttributes>;
};

type STRAPI_EVENTLocalizationsDataAttributes = {
  readonly startHour: Maybe<Scalars['String']>;
  readonly endHour: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly displayTitleOnDesktop: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_EVENTLocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_EVENTLocalizationsDataAttributes_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_ACHIEVEMENT = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly number: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_ACHIEVEMENTLocalizations>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};


type STRAPI_ACHIEVEMENT_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENT_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type STRAPI_ACHIEVEMENTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_ACHIEVEMENTLocalizationsData>>>;
};

type STRAPI_ACHIEVEMENTLocalizationsData = {
  readonly id: Maybe<Scalars['Int']>;
  readonly attributes: Maybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributes>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributes = {
  readonly name: Maybe<Scalars['String']>;
  readonly number: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENTLocalizationsDataAttributes_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENTLocalizationsDataAttributes_updatedAtArgs = {
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
  readonly strapiComponentBaseVideoSection: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly allStrapiComponentBaseVideoSection: STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection;
  readonly strapiComponentBaseVideosList: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly allStrapiComponentBaseVideosList: STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection;
  readonly strapiComponentBaseVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly allStrapiComponentBaseVideo: STRAPI__COMPONENT_BASE_VIDEOConnection;
  readonly strapiComponentBaseSpeakersGrid: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly allStrapiComponentBaseSpeakersGrid: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection;
  readonly strapiComponentBaseSignupGrid: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly allStrapiComponentBaseSignupGrid: STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection;
  readonly strapiComponentBaseSchedule: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly allStrapiComponentBaseSchedule: STRAPI__COMPONENT_BASE_SCHEDULEConnection;
  readonly strapiComponentBasePartnersSlider: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly allStrapiComponentBasePartnersSlider: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection;
  readonly strapiComponentBaseHero: Maybe<STRAPI__COMPONENT_BASE_HERO>;
  readonly allStrapiComponentBaseHero: STRAPI__COMPONENT_BASE_HEROConnection;
  readonly strapiComponentBaseGalerySlider: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly allStrapiComponentBaseGalerySlider: STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection;
  readonly strapiComponentBaseFestivalInNumbers: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly allStrapiComponentBaseFestivalInNumbers: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection;
  readonly strapiComponentBaseAgenda: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly allStrapiComponentBaseAgenda: STRAPI__COMPONENT_BASE_AGENDAConnection;
  readonly strapiVideospage: Maybe<STRAPI_VIDEOSPAGE>;
  readonly allStrapiVideospage: STRAPI_VIDEOSPAGEConnection;
  readonly strapiVideolist: Maybe<STRAPI_VIDEOLIST>;
  readonly allStrapiVideolist: STRAPI_VIDEOLISTConnection;
  readonly strapiSpeaker: Maybe<STRAPI_SPEAKER>;
  readonly allStrapiSpeaker: STRAPI_SPEAKERConnection;
  readonly strapiSignupSection: Maybe<STRAPI_SIGNUP_SECTION>;
  readonly allStrapiSignupSection: STRAPI_SIGNUP_SECTIONConnection;
  readonly strapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly allStrapiRulesTextTextnode: STRAPI_RULES_TEXT_TEXTNODEConnection;
  readonly strapiRules: Maybe<STRAPI_RULES>;
  readonly allStrapiRules: STRAPI_RULESConnection;
  readonly strapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly allStrapiPrivacypolicyTextTextnode: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection;
  readonly strapiPrivacypolicy: Maybe<STRAPI_PRIVACYPOLICY>;
  readonly allStrapiPrivacypolicy: STRAPI_PRIVACYPOLICYConnection;
  readonly strapiPartner: Maybe<STRAPI_PARTNER>;
  readonly allStrapiPartner: STRAPI_PARTNERConnection;
  readonly strapiLecture: Maybe<STRAPI_LECTURE>;
  readonly allStrapiLecture: STRAPI_LECTUREConnection;
  readonly strapiHomepage: Maybe<STRAPI_HOMEPAGE>;
  readonly allStrapiHomepage: STRAPI_HOMEPAGEConnection;
  readonly strapiEvent: Maybe<STRAPI_EVENT>;
  readonly allStrapiEvent: STRAPI_EVENTConnection;
  readonly strapiAchievement: Maybe<STRAPI_ACHIEVEMENT>;
  readonly allStrapiAchievement: STRAPI_ACHIEVEMENTConnection;
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
  graphqlTypegen: Maybe<BooleanQueryOperatorInput>;
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


type Query_strapiComponentBaseVideoSectionArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  videoId: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  article: Maybe<StringQueryOperatorInput>;
  footer: Maybe<StringQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseVideoSectionArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTIONFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTIONSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseVideosListArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  video_lists: Maybe<STRAPI_VIDEOLISTFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseVideosListArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LISTFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LISTSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseVideoArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  webm: Maybe<STRAPI__MEDIAFilterInput>;
  mp4: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseVideoArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_VIDEOSortInput>;
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
  sectionSubtitle: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseSpeakersGridArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseSignupGridArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  bannerImage: Maybe<STRAPI__MEDIAFilterInput>;
  signup_sections: Maybe<STRAPI_SIGNUP_SECTIONFilterListInput>;
  signupImage: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseSignupGridArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRIDFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRIDSortInput>;
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
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
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
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
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
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  videoId: Maybe<StringQueryOperatorInput>;
  footer: Maybe<StringQueryOperatorInput>;
  backgroundImage: Maybe<STRAPI__MEDIAFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
  backgroundVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
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
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  buttonUrl: Maybe<StringQueryOperatorInput>;
  buttonText: Maybe<StringQueryOperatorInput>;
  images: Maybe<STRAPI__MEDIAFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseGalerySliderArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseFestivalInNumbersArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  achievements: Maybe<STRAPI_ACHIEVEMENTFilterListInput>;
  backgroundImages: Maybe<STRAPI__MEDIAFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseFestivalInNumbersArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiComponentBaseAgendaArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  strapi_component: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  lectures: Maybe<STRAPI_LECTUREFilterListInput>;
  speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiComponentBaseAgendaArgs = {
  filter: Maybe<STRAPI__COMPONENT_BASE_AGENDAFilterInput>;
  sort: Maybe<STRAPI__COMPONENT_BASE_AGENDASortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiVideospageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  footerSubtitle: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiVideospageArgs = {
  filter: Maybe<STRAPI_VIDEOSPAGEFilterInput>;
  sort: Maybe<STRAPI_VIDEOSPAGESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiVideolistArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  videoUrl: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  thumbnail: Maybe<STRAPI_VIDEOLISTThumbnailFilterInput>;
  localizations: Maybe<STRAPI_VIDEOLISTLocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiVideolistArgs = {
  filter: Maybe<STRAPI_VIDEOLISTFilterInput>;
  sort: Maybe<STRAPI_VIDEOLISTSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiSpeakerArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  firstName: Maybe<StringQueryOperatorInput>;
  lastName: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  position: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  linkedinUrl: Maybe<StringQueryOperatorInput>;
  twitterUrl: Maybe<StringQueryOperatorInput>;
  linktrUrl: Maybe<StringQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  index: Maybe<IntQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  bio: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  photo: Maybe<STRAPI_SPEAKERPhotoFilterInput>;
  localizations: Maybe<STRAPI_SPEAKERLocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiSpeakerArgs = {
  filter: Maybe<STRAPI_SPEAKERFilterInput>;
  sort: Maybe<STRAPI_SPEAKERSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiSignupSectionArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buttonText: Maybe<StringQueryOperatorInput>;
  buttonUrl: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  localizations: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiSignupSectionArgs = {
  filter: Maybe<STRAPI_SIGNUP_SECTIONFilterInput>;
  sort: Maybe<STRAPI_SIGNUP_SECTIONSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiRulesTextTextnodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  text: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiRulesTextTextnodeArgs = {
  filter: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
  sort: Maybe<STRAPI_RULES_TEXT_TEXTNODESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiRulesArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  text: Maybe<STRAPI_RULESTextFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
  childrenStrapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterListInput>;
  childStrapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
};


type Query_allStrapiRulesArgs = {
  filter: Maybe<STRAPI_RULESFilterInput>;
  sort: Maybe<STRAPI_RULESSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPrivacypolicyTextTextnodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  text: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiPrivacypolicyTextTextnodeArgs = {
  filter: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
  sort: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPrivacypolicyArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  text: Maybe<STRAPI_PRIVACYPOLICYTextFilterInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
  childrenStrapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterListInput>;
  childStrapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
};


type Query_allStrapiPrivacypolicyArgs = {
  filter: Maybe<STRAPI_PRIVACYPOLICYFilterInput>;
  sort: Maybe<STRAPI_PRIVACYPOLICYSortInput>;
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
  index: Maybe<IntQueryOperatorInput>;
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


type Query_strapiLectureArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  room: Maybe<IntQueryOperatorInput>;
  startHour: Maybe<StringQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  logo: Maybe<STRAPI_LECTURELogoFilterInput>;
  localizations: Maybe<STRAPI_LECTURELocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiLectureArgs = {
  filter: Maybe<STRAPI_LECTUREFilterInput>;
  sort: Maybe<STRAPI_LECTURESortInput>;
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
  link: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  logo: Maybe<STRAPI_EVENTLogoFilterInput>;
  localizations: Maybe<STRAPI_EVENTLocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiEventArgs = {
  filter: Maybe<STRAPI_EVENTFilterInput>;
  sort: Maybe<STRAPI_EVENTSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiAchievementArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  number: Maybe<StringQueryOperatorInput>;
  index: Maybe<IntQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  localizations: Maybe<STRAPI_ACHIEVEMENTLocalizationsFilterInput>;
  strapi_id: Maybe<IntQueryOperatorInput>;
};


type Query_allStrapiAchievementArgs = {
  filter: Maybe<STRAPI_ACHIEVEMENTFilterInput>;
  sort: Maybe<STRAPI_ACHIEVEMENTSortInput>;
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
  readonly contentFilePath: Maybe<StringQueryOperatorInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'graphqlTypegen'
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  readonly graphqlTypegen: Maybe<BooleanQueryOperatorInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'pluginCreator.parent.internal.contentFilePath'
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
  | 'pluginCreator.children.internal.contentFilePath'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.internal.contentFilePath'
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath';

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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
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
  | 'formats.small.ext'
  | 'formats.small.url'
  | 'formats.small.hash'
  | 'formats.small.mime'
  | 'formats.small.name'
  | 'formats.small.size'
  | 'formats.small.width'
  | 'formats.small.height'
  | 'formats.medium.ext'
  | 'formats.medium.url'
  | 'formats.medium.hash'
  | 'formats.medium.mime'
  | 'formats.medium.name'
  | 'formats.medium.size'
  | 'formats.medium.width'
  | 'formats.medium.height'
  | 'formats.thumbnail.ext'
  | 'formats.thumbnail.url'
  | 'formats.thumbnail.hash'
  | 'formats.thumbnail.mime'
  | 'formats.thumbnail.name'
  | 'formats.thumbnail.size'
  | 'formats.thumbnail.width'
  | 'formats.thumbnail.height'
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
  | 'localFile.parent.internal.contentFilePath'
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
  | 'localFile.children.internal.contentFilePath'
  | 'localFile.internal.content'
  | 'localFile.internal.contentDigest'
  | 'localFile.internal.description'
  | 'localFile.internal.fieldOwners'
  | 'localFile.internal.ignoreType'
  | 'localFile.internal.mediaType'
  | 'localFile.internal.owner'
  | 'localFile.internal.type'
  | 'localFile.internal.contentFilePath'
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

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection>;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEO_SECTION;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'videoId'
  | 'isSectionVisible'
  | 'title'
  | 'article'
  | 'footer'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly videoId: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly article: Maybe<StringQueryOperatorInput>;
  readonly footer: Maybe<StringQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_VIDEOLISTFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_VIDEOLISTFilterInput>;
};

type STRAPI_VIDEOLISTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly videoUrl: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnailFilterInput>;
  readonly localizations: Maybe<STRAPI_VIDEOLISTLocalizationsFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_VIDEOLISTThumbnailFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsFilterInput = {
  readonly large: Maybe<STRAPI_VIDEOLISTThumbnailFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI_VIDEOLISTThumbnailFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_VIDEOLISTThumbnailFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnailFilterInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTLocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_VIDEOLISTLocalizationsDataFilterListInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_VIDEOLISTLocalizationsDataFilterInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_VIDEOLISTLocalizationsDataAttributesFilterInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributesFilterInput = {
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly videoUrl: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection>;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEOS_LIST;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'isSectionVisible'
  | 'video_lists'
  | 'video_lists.id'
  | 'video_lists.parent.id'
  | 'video_lists.parent.parent.id'
  | 'video_lists.parent.parent.children'
  | 'video_lists.parent.children'
  | 'video_lists.parent.children.id'
  | 'video_lists.parent.children.children'
  | 'video_lists.parent.internal.content'
  | 'video_lists.parent.internal.contentDigest'
  | 'video_lists.parent.internal.description'
  | 'video_lists.parent.internal.fieldOwners'
  | 'video_lists.parent.internal.ignoreType'
  | 'video_lists.parent.internal.mediaType'
  | 'video_lists.parent.internal.owner'
  | 'video_lists.parent.internal.type'
  | 'video_lists.parent.internal.contentFilePath'
  | 'video_lists.children'
  | 'video_lists.children.id'
  | 'video_lists.children.parent.id'
  | 'video_lists.children.parent.children'
  | 'video_lists.children.children'
  | 'video_lists.children.children.id'
  | 'video_lists.children.children.children'
  | 'video_lists.children.internal.content'
  | 'video_lists.children.internal.contentDigest'
  | 'video_lists.children.internal.description'
  | 'video_lists.children.internal.fieldOwners'
  | 'video_lists.children.internal.ignoreType'
  | 'video_lists.children.internal.mediaType'
  | 'video_lists.children.internal.owner'
  | 'video_lists.children.internal.type'
  | 'video_lists.children.internal.contentFilePath'
  | 'video_lists.internal.content'
  | 'video_lists.internal.contentDigest'
  | 'video_lists.internal.description'
  | 'video_lists.internal.fieldOwners'
  | 'video_lists.internal.ignoreType'
  | 'video_lists.internal.mediaType'
  | 'video_lists.internal.owner'
  | 'video_lists.internal.type'
  | 'video_lists.internal.contentFilePath'
  | 'video_lists.createdAt'
  | 'video_lists.updatedAt'
  | 'video_lists.subtitle'
  | 'video_lists.videoUrl'
  | 'video_lists.locale'
  | 'video_lists.thumbnail.id'
  | 'video_lists.thumbnail.name'
  | 'video_lists.thumbnail.alternativeText'
  | 'video_lists.thumbnail.caption'
  | 'video_lists.thumbnail.width'
  | 'video_lists.thumbnail.height'
  | 'video_lists.thumbnail.hash'
  | 'video_lists.thumbnail.ext'
  | 'video_lists.thumbnail.mime'
  | 'video_lists.thumbnail.size'
  | 'video_lists.thumbnail.url'
  | 'video_lists.thumbnail.createdAt'
  | 'video_lists.thumbnail.updatedAt'
  | 'video_lists.localizations.data'
  | 'video_lists.localizations.data.id'
  | 'video_lists.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly video_lists: Maybe<STRAPI_VIDEOLISTFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI__COMPONENT_BASE_VIDEOConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOGroupConnection>;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEOEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEO;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
};

type STRAPI__COMPONENT_BASE_VIDEOFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'webm.id'
  | 'webm.parent.id'
  | 'webm.parent.parent.id'
  | 'webm.parent.parent.children'
  | 'webm.parent.children'
  | 'webm.parent.children.id'
  | 'webm.parent.children.children'
  | 'webm.parent.internal.content'
  | 'webm.parent.internal.contentDigest'
  | 'webm.parent.internal.description'
  | 'webm.parent.internal.fieldOwners'
  | 'webm.parent.internal.ignoreType'
  | 'webm.parent.internal.mediaType'
  | 'webm.parent.internal.owner'
  | 'webm.parent.internal.type'
  | 'webm.parent.internal.contentFilePath'
  | 'webm.children'
  | 'webm.children.id'
  | 'webm.children.parent.id'
  | 'webm.children.parent.children'
  | 'webm.children.children'
  | 'webm.children.children.id'
  | 'webm.children.children.children'
  | 'webm.children.internal.content'
  | 'webm.children.internal.contentDigest'
  | 'webm.children.internal.description'
  | 'webm.children.internal.fieldOwners'
  | 'webm.children.internal.ignoreType'
  | 'webm.children.internal.mediaType'
  | 'webm.children.internal.owner'
  | 'webm.children.internal.type'
  | 'webm.children.internal.contentFilePath'
  | 'webm.internal.content'
  | 'webm.internal.contentDigest'
  | 'webm.internal.description'
  | 'webm.internal.fieldOwners'
  | 'webm.internal.ignoreType'
  | 'webm.internal.mediaType'
  | 'webm.internal.owner'
  | 'webm.internal.type'
  | 'webm.internal.contentFilePath'
  | 'webm.name'
  | 'webm.alternativeText'
  | 'webm.caption'
  | 'webm.width'
  | 'webm.height'
  | 'webm.formats.large.ext'
  | 'webm.formats.large.url'
  | 'webm.formats.large.hash'
  | 'webm.formats.large.mime'
  | 'webm.formats.large.name'
  | 'webm.formats.large.size'
  | 'webm.formats.large.width'
  | 'webm.formats.large.height'
  | 'webm.formats.small.ext'
  | 'webm.formats.small.url'
  | 'webm.formats.small.hash'
  | 'webm.formats.small.mime'
  | 'webm.formats.small.name'
  | 'webm.formats.small.size'
  | 'webm.formats.small.width'
  | 'webm.formats.small.height'
  | 'webm.formats.medium.ext'
  | 'webm.formats.medium.url'
  | 'webm.formats.medium.hash'
  | 'webm.formats.medium.mime'
  | 'webm.formats.medium.name'
  | 'webm.formats.medium.size'
  | 'webm.formats.medium.width'
  | 'webm.formats.medium.height'
  | 'webm.formats.thumbnail.ext'
  | 'webm.formats.thumbnail.url'
  | 'webm.formats.thumbnail.hash'
  | 'webm.formats.thumbnail.mime'
  | 'webm.formats.thumbnail.name'
  | 'webm.formats.thumbnail.size'
  | 'webm.formats.thumbnail.width'
  | 'webm.formats.thumbnail.height'
  | 'webm.hash'
  | 'webm.ext'
  | 'webm.mime'
  | 'webm.size'
  | 'webm.url'
  | 'webm.createdAt'
  | 'webm.updatedAt'
  | 'webm.localFile.sourceInstanceName'
  | 'webm.localFile.absolutePath'
  | 'webm.localFile.relativePath'
  | 'webm.localFile.extension'
  | 'webm.localFile.size'
  | 'webm.localFile.prettySize'
  | 'webm.localFile.modifiedTime'
  | 'webm.localFile.accessTime'
  | 'webm.localFile.changeTime'
  | 'webm.localFile.birthTime'
  | 'webm.localFile.root'
  | 'webm.localFile.dir'
  | 'webm.localFile.base'
  | 'webm.localFile.ext'
  | 'webm.localFile.name'
  | 'webm.localFile.relativeDirectory'
  | 'webm.localFile.dev'
  | 'webm.localFile.mode'
  | 'webm.localFile.nlink'
  | 'webm.localFile.uid'
  | 'webm.localFile.gid'
  | 'webm.localFile.rdev'
  | 'webm.localFile.ino'
  | 'webm.localFile.atimeMs'
  | 'webm.localFile.mtimeMs'
  | 'webm.localFile.ctimeMs'
  | 'webm.localFile.atime'
  | 'webm.localFile.mtime'
  | 'webm.localFile.ctime'
  | 'webm.localFile.birthtime'
  | 'webm.localFile.birthtimeMs'
  | 'webm.localFile.blksize'
  | 'webm.localFile.blocks'
  | 'webm.localFile.url'
  | 'webm.localFile.id'
  | 'webm.localFile.parent.id'
  | 'webm.localFile.parent.children'
  | 'webm.localFile.children'
  | 'webm.localFile.children.id'
  | 'webm.localFile.children.children'
  | 'webm.localFile.internal.content'
  | 'webm.localFile.internal.contentDigest'
  | 'webm.localFile.internal.description'
  | 'webm.localFile.internal.fieldOwners'
  | 'webm.localFile.internal.ignoreType'
  | 'webm.localFile.internal.mediaType'
  | 'webm.localFile.internal.owner'
  | 'webm.localFile.internal.type'
  | 'webm.localFile.internal.contentFilePath'
  | 'webm.strapi_id'
  | 'mp4.id'
  | 'mp4.parent.id'
  | 'mp4.parent.parent.id'
  | 'mp4.parent.parent.children'
  | 'mp4.parent.children'
  | 'mp4.parent.children.id'
  | 'mp4.parent.children.children'
  | 'mp4.parent.internal.content'
  | 'mp4.parent.internal.contentDigest'
  | 'mp4.parent.internal.description'
  | 'mp4.parent.internal.fieldOwners'
  | 'mp4.parent.internal.ignoreType'
  | 'mp4.parent.internal.mediaType'
  | 'mp4.parent.internal.owner'
  | 'mp4.parent.internal.type'
  | 'mp4.parent.internal.contentFilePath'
  | 'mp4.children'
  | 'mp4.children.id'
  | 'mp4.children.parent.id'
  | 'mp4.children.parent.children'
  | 'mp4.children.children'
  | 'mp4.children.children.id'
  | 'mp4.children.children.children'
  | 'mp4.children.internal.content'
  | 'mp4.children.internal.contentDigest'
  | 'mp4.children.internal.description'
  | 'mp4.children.internal.fieldOwners'
  | 'mp4.children.internal.ignoreType'
  | 'mp4.children.internal.mediaType'
  | 'mp4.children.internal.owner'
  | 'mp4.children.internal.type'
  | 'mp4.children.internal.contentFilePath'
  | 'mp4.internal.content'
  | 'mp4.internal.contentDigest'
  | 'mp4.internal.description'
  | 'mp4.internal.fieldOwners'
  | 'mp4.internal.ignoreType'
  | 'mp4.internal.mediaType'
  | 'mp4.internal.owner'
  | 'mp4.internal.type'
  | 'mp4.internal.contentFilePath'
  | 'mp4.name'
  | 'mp4.alternativeText'
  | 'mp4.caption'
  | 'mp4.width'
  | 'mp4.height'
  | 'mp4.formats.large.ext'
  | 'mp4.formats.large.url'
  | 'mp4.formats.large.hash'
  | 'mp4.formats.large.mime'
  | 'mp4.formats.large.name'
  | 'mp4.formats.large.size'
  | 'mp4.formats.large.width'
  | 'mp4.formats.large.height'
  | 'mp4.formats.small.ext'
  | 'mp4.formats.small.url'
  | 'mp4.formats.small.hash'
  | 'mp4.formats.small.mime'
  | 'mp4.formats.small.name'
  | 'mp4.formats.small.size'
  | 'mp4.formats.small.width'
  | 'mp4.formats.small.height'
  | 'mp4.formats.medium.ext'
  | 'mp4.formats.medium.url'
  | 'mp4.formats.medium.hash'
  | 'mp4.formats.medium.mime'
  | 'mp4.formats.medium.name'
  | 'mp4.formats.medium.size'
  | 'mp4.formats.medium.width'
  | 'mp4.formats.medium.height'
  | 'mp4.formats.thumbnail.ext'
  | 'mp4.formats.thumbnail.url'
  | 'mp4.formats.thumbnail.hash'
  | 'mp4.formats.thumbnail.mime'
  | 'mp4.formats.thumbnail.name'
  | 'mp4.formats.thumbnail.size'
  | 'mp4.formats.thumbnail.width'
  | 'mp4.formats.thumbnail.height'
  | 'mp4.hash'
  | 'mp4.ext'
  | 'mp4.mime'
  | 'mp4.size'
  | 'mp4.url'
  | 'mp4.createdAt'
  | 'mp4.updatedAt'
  | 'mp4.localFile.sourceInstanceName'
  | 'mp4.localFile.absolutePath'
  | 'mp4.localFile.relativePath'
  | 'mp4.localFile.extension'
  | 'mp4.localFile.size'
  | 'mp4.localFile.prettySize'
  | 'mp4.localFile.modifiedTime'
  | 'mp4.localFile.accessTime'
  | 'mp4.localFile.changeTime'
  | 'mp4.localFile.birthTime'
  | 'mp4.localFile.root'
  | 'mp4.localFile.dir'
  | 'mp4.localFile.base'
  | 'mp4.localFile.ext'
  | 'mp4.localFile.name'
  | 'mp4.localFile.relativeDirectory'
  | 'mp4.localFile.dev'
  | 'mp4.localFile.mode'
  | 'mp4.localFile.nlink'
  | 'mp4.localFile.uid'
  | 'mp4.localFile.gid'
  | 'mp4.localFile.rdev'
  | 'mp4.localFile.ino'
  | 'mp4.localFile.atimeMs'
  | 'mp4.localFile.mtimeMs'
  | 'mp4.localFile.ctimeMs'
  | 'mp4.localFile.atime'
  | 'mp4.localFile.mtime'
  | 'mp4.localFile.ctime'
  | 'mp4.localFile.birthtime'
  | 'mp4.localFile.birthtimeMs'
  | 'mp4.localFile.blksize'
  | 'mp4.localFile.blocks'
  | 'mp4.localFile.url'
  | 'mp4.localFile.id'
  | 'mp4.localFile.parent.id'
  | 'mp4.localFile.parent.children'
  | 'mp4.localFile.children'
  | 'mp4.localFile.children.id'
  | 'mp4.localFile.children.children'
  | 'mp4.localFile.internal.content'
  | 'mp4.localFile.internal.contentDigest'
  | 'mp4.localFile.internal.description'
  | 'mp4.localFile.internal.fieldOwners'
  | 'mp4.localFile.internal.ignoreType'
  | 'mp4.localFile.internal.mediaType'
  | 'mp4.localFile.internal.owner'
  | 'mp4.localFile.internal.type'
  | 'mp4.localFile.internal.contentFilePath'
  | 'mp4.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_VIDEOGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_VIDEOFieldsEnum;
};

type STRAPI__COMPONENT_BASE_VIDEOFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly webm: Maybe<STRAPI__MEDIAFilterInput>;
  readonly mp4: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_VIDEOFieldsEnum>>>;
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
  readonly firstName: Maybe<StringQueryOperatorInput>;
  readonly lastName: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly position: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly linkedinUrl: Maybe<StringQueryOperatorInput>;
  readonly twitterUrl: Maybe<StringQueryOperatorInput>;
  readonly linktrUrl: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly photo: Maybe<STRAPI_SPEAKERPhotoFilterInput>;
  readonly localizations: Maybe<STRAPI_SPEAKERLocalizationsFilterInput>;
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
  readonly large: Maybe<STRAPI_SPEAKERPhotoFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI_SPEAKERPhotoFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_SPEAKERPhotoFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnailFilterInput>;
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
};

type STRAPI_SPEAKERLocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_SPEAKERLocalizationsDataFilterListInput>;
};

type STRAPI_SPEAKERLocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_SPEAKERLocalizationsDataFilterInput>;
};

type STRAPI_SPEAKERLocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_SPEAKERLocalizationsDataAttributesFilterInput>;
};

type STRAPI_SPEAKERLocalizationsDataAttributesFilterInput = {
  readonly firstName: Maybe<StringQueryOperatorInput>;
  readonly lastName: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly position: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly linkedinUrl: Maybe<StringQueryOperatorInput>;
  readonly twitterUrl: Maybe<StringQueryOperatorInput>;
  readonly linktrUrl: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'sectionTitle'
  | 'sectionSubtitle'
  | 'isSectionVisible'
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
  | 'speakers.parent.internal.contentFilePath'
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
  | 'speakers.children.internal.contentFilePath'
  | 'speakers.internal.content'
  | 'speakers.internal.contentDigest'
  | 'speakers.internal.description'
  | 'speakers.internal.fieldOwners'
  | 'speakers.internal.ignoreType'
  | 'speakers.internal.mediaType'
  | 'speakers.internal.owner'
  | 'speakers.internal.type'
  | 'speakers.internal.contentFilePath'
  | 'speakers.firstName'
  | 'speakers.lastName'
  | 'speakers.title'
  | 'speakers.position'
  | 'speakers.description'
  | 'speakers.linkedinUrl'
  | 'speakers.twitterUrl'
  | 'speakers.linktrUrl'
  | 'speakers.backgroundColor'
  | 'speakers.index'
  | 'speakers.createdAt'
  | 'speakers.updatedAt'
  | 'speakers.bio'
  | 'speakers.locale'
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
  | 'speakers.localizations.data'
  | 'speakers.localizations.data.id'
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
  readonly sectionSubtitle: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_SIGNUP_SECTIONFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_SIGNUP_SECTIONFilterInput>;
};

type STRAPI_SIGNUP_SECTIONFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buttonText: Maybe<StringQueryOperatorInput>;
  readonly buttonUrl: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly localizations: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsDataFilterListInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsDataFilterInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFilterInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFilterInput = {
  readonly buttonText: Maybe<StringQueryOperatorInput>;
  readonly buttonUrl: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection>;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly node: STRAPI__COMPONENT_BASE_SIGNUP_GRID;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'isSectionVisible'
  | 'bannerImage.id'
  | 'bannerImage.parent.id'
  | 'bannerImage.parent.parent.id'
  | 'bannerImage.parent.parent.children'
  | 'bannerImage.parent.children'
  | 'bannerImage.parent.children.id'
  | 'bannerImage.parent.children.children'
  | 'bannerImage.parent.internal.content'
  | 'bannerImage.parent.internal.contentDigest'
  | 'bannerImage.parent.internal.description'
  | 'bannerImage.parent.internal.fieldOwners'
  | 'bannerImage.parent.internal.ignoreType'
  | 'bannerImage.parent.internal.mediaType'
  | 'bannerImage.parent.internal.owner'
  | 'bannerImage.parent.internal.type'
  | 'bannerImage.parent.internal.contentFilePath'
  | 'bannerImage.children'
  | 'bannerImage.children.id'
  | 'bannerImage.children.parent.id'
  | 'bannerImage.children.parent.children'
  | 'bannerImage.children.children'
  | 'bannerImage.children.children.id'
  | 'bannerImage.children.children.children'
  | 'bannerImage.children.internal.content'
  | 'bannerImage.children.internal.contentDigest'
  | 'bannerImage.children.internal.description'
  | 'bannerImage.children.internal.fieldOwners'
  | 'bannerImage.children.internal.ignoreType'
  | 'bannerImage.children.internal.mediaType'
  | 'bannerImage.children.internal.owner'
  | 'bannerImage.children.internal.type'
  | 'bannerImage.children.internal.contentFilePath'
  | 'bannerImage.internal.content'
  | 'bannerImage.internal.contentDigest'
  | 'bannerImage.internal.description'
  | 'bannerImage.internal.fieldOwners'
  | 'bannerImage.internal.ignoreType'
  | 'bannerImage.internal.mediaType'
  | 'bannerImage.internal.owner'
  | 'bannerImage.internal.type'
  | 'bannerImage.internal.contentFilePath'
  | 'bannerImage.name'
  | 'bannerImage.alternativeText'
  | 'bannerImage.caption'
  | 'bannerImage.width'
  | 'bannerImage.height'
  | 'bannerImage.formats.large.ext'
  | 'bannerImage.formats.large.url'
  | 'bannerImage.formats.large.hash'
  | 'bannerImage.formats.large.mime'
  | 'bannerImage.formats.large.name'
  | 'bannerImage.formats.large.size'
  | 'bannerImage.formats.large.width'
  | 'bannerImage.formats.large.height'
  | 'bannerImage.formats.small.ext'
  | 'bannerImage.formats.small.url'
  | 'bannerImage.formats.small.hash'
  | 'bannerImage.formats.small.mime'
  | 'bannerImage.formats.small.name'
  | 'bannerImage.formats.small.size'
  | 'bannerImage.formats.small.width'
  | 'bannerImage.formats.small.height'
  | 'bannerImage.formats.medium.ext'
  | 'bannerImage.formats.medium.url'
  | 'bannerImage.formats.medium.hash'
  | 'bannerImage.formats.medium.mime'
  | 'bannerImage.formats.medium.name'
  | 'bannerImage.formats.medium.size'
  | 'bannerImage.formats.medium.width'
  | 'bannerImage.formats.medium.height'
  | 'bannerImage.formats.thumbnail.ext'
  | 'bannerImage.formats.thumbnail.url'
  | 'bannerImage.formats.thumbnail.hash'
  | 'bannerImage.formats.thumbnail.mime'
  | 'bannerImage.formats.thumbnail.name'
  | 'bannerImage.formats.thumbnail.size'
  | 'bannerImage.formats.thumbnail.width'
  | 'bannerImage.formats.thumbnail.height'
  | 'bannerImage.hash'
  | 'bannerImage.ext'
  | 'bannerImage.mime'
  | 'bannerImage.size'
  | 'bannerImage.url'
  | 'bannerImage.createdAt'
  | 'bannerImage.updatedAt'
  | 'bannerImage.localFile.sourceInstanceName'
  | 'bannerImage.localFile.absolutePath'
  | 'bannerImage.localFile.relativePath'
  | 'bannerImage.localFile.extension'
  | 'bannerImage.localFile.size'
  | 'bannerImage.localFile.prettySize'
  | 'bannerImage.localFile.modifiedTime'
  | 'bannerImage.localFile.accessTime'
  | 'bannerImage.localFile.changeTime'
  | 'bannerImage.localFile.birthTime'
  | 'bannerImage.localFile.root'
  | 'bannerImage.localFile.dir'
  | 'bannerImage.localFile.base'
  | 'bannerImage.localFile.ext'
  | 'bannerImage.localFile.name'
  | 'bannerImage.localFile.relativeDirectory'
  | 'bannerImage.localFile.dev'
  | 'bannerImage.localFile.mode'
  | 'bannerImage.localFile.nlink'
  | 'bannerImage.localFile.uid'
  | 'bannerImage.localFile.gid'
  | 'bannerImage.localFile.rdev'
  | 'bannerImage.localFile.ino'
  | 'bannerImage.localFile.atimeMs'
  | 'bannerImage.localFile.mtimeMs'
  | 'bannerImage.localFile.ctimeMs'
  | 'bannerImage.localFile.atime'
  | 'bannerImage.localFile.mtime'
  | 'bannerImage.localFile.ctime'
  | 'bannerImage.localFile.birthtime'
  | 'bannerImage.localFile.birthtimeMs'
  | 'bannerImage.localFile.blksize'
  | 'bannerImage.localFile.blocks'
  | 'bannerImage.localFile.url'
  | 'bannerImage.localFile.id'
  | 'bannerImage.localFile.parent.id'
  | 'bannerImage.localFile.parent.children'
  | 'bannerImage.localFile.children'
  | 'bannerImage.localFile.children.id'
  | 'bannerImage.localFile.children.children'
  | 'bannerImage.localFile.internal.content'
  | 'bannerImage.localFile.internal.contentDigest'
  | 'bannerImage.localFile.internal.description'
  | 'bannerImage.localFile.internal.fieldOwners'
  | 'bannerImage.localFile.internal.ignoreType'
  | 'bannerImage.localFile.internal.mediaType'
  | 'bannerImage.localFile.internal.owner'
  | 'bannerImage.localFile.internal.type'
  | 'bannerImage.localFile.internal.contentFilePath'
  | 'bannerImage.strapi_id'
  | 'signup_sections'
  | 'signup_sections.id'
  | 'signup_sections.parent.id'
  | 'signup_sections.parent.parent.id'
  | 'signup_sections.parent.parent.children'
  | 'signup_sections.parent.children'
  | 'signup_sections.parent.children.id'
  | 'signup_sections.parent.children.children'
  | 'signup_sections.parent.internal.content'
  | 'signup_sections.parent.internal.contentDigest'
  | 'signup_sections.parent.internal.description'
  | 'signup_sections.parent.internal.fieldOwners'
  | 'signup_sections.parent.internal.ignoreType'
  | 'signup_sections.parent.internal.mediaType'
  | 'signup_sections.parent.internal.owner'
  | 'signup_sections.parent.internal.type'
  | 'signup_sections.parent.internal.contentFilePath'
  | 'signup_sections.children'
  | 'signup_sections.children.id'
  | 'signup_sections.children.parent.id'
  | 'signup_sections.children.parent.children'
  | 'signup_sections.children.children'
  | 'signup_sections.children.children.id'
  | 'signup_sections.children.children.children'
  | 'signup_sections.children.internal.content'
  | 'signup_sections.children.internal.contentDigest'
  | 'signup_sections.children.internal.description'
  | 'signup_sections.children.internal.fieldOwners'
  | 'signup_sections.children.internal.ignoreType'
  | 'signup_sections.children.internal.mediaType'
  | 'signup_sections.children.internal.owner'
  | 'signup_sections.children.internal.type'
  | 'signup_sections.children.internal.contentFilePath'
  | 'signup_sections.internal.content'
  | 'signup_sections.internal.contentDigest'
  | 'signup_sections.internal.description'
  | 'signup_sections.internal.fieldOwners'
  | 'signup_sections.internal.ignoreType'
  | 'signup_sections.internal.mediaType'
  | 'signup_sections.internal.owner'
  | 'signup_sections.internal.type'
  | 'signup_sections.internal.contentFilePath'
  | 'signup_sections.buttonText'
  | 'signup_sections.buttonUrl'
  | 'signup_sections.title'
  | 'signup_sections.subtitle'
  | 'signup_sections.link'
  | 'signup_sections.createdAt'
  | 'signup_sections.updatedAt'
  | 'signup_sections.locale'
  | 'signup_sections.localizations.data'
  | 'signup_sections.localizations.data.id'
  | 'signup_sections.strapi_id'
  | 'signupImage.id'
  | 'signupImage.parent.id'
  | 'signupImage.parent.parent.id'
  | 'signupImage.parent.parent.children'
  | 'signupImage.parent.children'
  | 'signupImage.parent.children.id'
  | 'signupImage.parent.children.children'
  | 'signupImage.parent.internal.content'
  | 'signupImage.parent.internal.contentDigest'
  | 'signupImage.parent.internal.description'
  | 'signupImage.parent.internal.fieldOwners'
  | 'signupImage.parent.internal.ignoreType'
  | 'signupImage.parent.internal.mediaType'
  | 'signupImage.parent.internal.owner'
  | 'signupImage.parent.internal.type'
  | 'signupImage.parent.internal.contentFilePath'
  | 'signupImage.children'
  | 'signupImage.children.id'
  | 'signupImage.children.parent.id'
  | 'signupImage.children.parent.children'
  | 'signupImage.children.children'
  | 'signupImage.children.children.id'
  | 'signupImage.children.children.children'
  | 'signupImage.children.internal.content'
  | 'signupImage.children.internal.contentDigest'
  | 'signupImage.children.internal.description'
  | 'signupImage.children.internal.fieldOwners'
  | 'signupImage.children.internal.ignoreType'
  | 'signupImage.children.internal.mediaType'
  | 'signupImage.children.internal.owner'
  | 'signupImage.children.internal.type'
  | 'signupImage.children.internal.contentFilePath'
  | 'signupImage.internal.content'
  | 'signupImage.internal.contentDigest'
  | 'signupImage.internal.description'
  | 'signupImage.internal.fieldOwners'
  | 'signupImage.internal.ignoreType'
  | 'signupImage.internal.mediaType'
  | 'signupImage.internal.owner'
  | 'signupImage.internal.type'
  | 'signupImage.internal.contentFilePath'
  | 'signupImage.name'
  | 'signupImage.alternativeText'
  | 'signupImage.caption'
  | 'signupImage.width'
  | 'signupImage.height'
  | 'signupImage.formats.large.ext'
  | 'signupImage.formats.large.url'
  | 'signupImage.formats.large.hash'
  | 'signupImage.formats.large.mime'
  | 'signupImage.formats.large.name'
  | 'signupImage.formats.large.size'
  | 'signupImage.formats.large.width'
  | 'signupImage.formats.large.height'
  | 'signupImage.formats.small.ext'
  | 'signupImage.formats.small.url'
  | 'signupImage.formats.small.hash'
  | 'signupImage.formats.small.mime'
  | 'signupImage.formats.small.name'
  | 'signupImage.formats.small.size'
  | 'signupImage.formats.small.width'
  | 'signupImage.formats.small.height'
  | 'signupImage.formats.medium.ext'
  | 'signupImage.formats.medium.url'
  | 'signupImage.formats.medium.hash'
  | 'signupImage.formats.medium.mime'
  | 'signupImage.formats.medium.name'
  | 'signupImage.formats.medium.size'
  | 'signupImage.formats.medium.width'
  | 'signupImage.formats.medium.height'
  | 'signupImage.formats.thumbnail.ext'
  | 'signupImage.formats.thumbnail.url'
  | 'signupImage.formats.thumbnail.hash'
  | 'signupImage.formats.thumbnail.mime'
  | 'signupImage.formats.thumbnail.name'
  | 'signupImage.formats.thumbnail.size'
  | 'signupImage.formats.thumbnail.width'
  | 'signupImage.formats.thumbnail.height'
  | 'signupImage.hash'
  | 'signupImage.ext'
  | 'signupImage.mime'
  | 'signupImage.size'
  | 'signupImage.url'
  | 'signupImage.createdAt'
  | 'signupImage.updatedAt'
  | 'signupImage.localFile.sourceInstanceName'
  | 'signupImage.localFile.absolutePath'
  | 'signupImage.localFile.relativePath'
  | 'signupImage.localFile.extension'
  | 'signupImage.localFile.size'
  | 'signupImage.localFile.prettySize'
  | 'signupImage.localFile.modifiedTime'
  | 'signupImage.localFile.accessTime'
  | 'signupImage.localFile.changeTime'
  | 'signupImage.localFile.birthTime'
  | 'signupImage.localFile.root'
  | 'signupImage.localFile.dir'
  | 'signupImage.localFile.base'
  | 'signupImage.localFile.ext'
  | 'signupImage.localFile.name'
  | 'signupImage.localFile.relativeDirectory'
  | 'signupImage.localFile.dev'
  | 'signupImage.localFile.mode'
  | 'signupImage.localFile.nlink'
  | 'signupImage.localFile.uid'
  | 'signupImage.localFile.gid'
  | 'signupImage.localFile.rdev'
  | 'signupImage.localFile.ino'
  | 'signupImage.localFile.atimeMs'
  | 'signupImage.localFile.mtimeMs'
  | 'signupImage.localFile.ctimeMs'
  | 'signupImage.localFile.atime'
  | 'signupImage.localFile.mtime'
  | 'signupImage.localFile.ctime'
  | 'signupImage.localFile.birthtime'
  | 'signupImage.localFile.birthtimeMs'
  | 'signupImage.localFile.blksize'
  | 'signupImage.localFile.blocks'
  | 'signupImage.localFile.url'
  | 'signupImage.localFile.id'
  | 'signupImage.localFile.parent.id'
  | 'signupImage.localFile.parent.children'
  | 'signupImage.localFile.children'
  | 'signupImage.localFile.children.id'
  | 'signupImage.localFile.children.children'
  | 'signupImage.localFile.internal.content'
  | 'signupImage.localFile.internal.contentDigest'
  | 'signupImage.localFile.internal.description'
  | 'signupImage.localFile.internal.fieldOwners'
  | 'signupImage.localFile.internal.ignoreType'
  | 'signupImage.localFile.internal.mediaType'
  | 'signupImage.localFile.internal.owner'
  | 'signupImage.localFile.internal.type'
  | 'signupImage.localFile.internal.contentFilePath'
  | 'signupImage.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly bannerImage: Maybe<STRAPI__MEDIAFilterInput>;
  readonly signup_sections: Maybe<STRAPI_SIGNUP_SECTIONFilterListInput>;
  readonly signupImage: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldsEnum>>>;
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
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<STRAPI_EVENTLogoFilterInput>;
  readonly localizations: Maybe<STRAPI_EVENTLocalizationsFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_EVENTLocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_EVENTLocalizationsDataFilterListInput>;
};

type STRAPI_EVENTLocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_EVENTLocalizationsDataFilterInput>;
};

type STRAPI_EVENTLocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_EVENTLocalizationsDataAttributesFilterInput>;
};

type STRAPI_EVENTLocalizationsDataAttributesFilterInput = {
  readonly startHour: Maybe<StringQueryOperatorInput>;
  readonly endHour: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly displayTitleOnDesktop: Maybe<BooleanQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'scheduleTitle'
  | 'isSectionVisible'
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
  | 'events.parent.internal.contentFilePath'
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
  | 'events.children.internal.contentFilePath'
  | 'events.internal.content'
  | 'events.internal.contentDigest'
  | 'events.internal.description'
  | 'events.internal.fieldOwners'
  | 'events.internal.ignoreType'
  | 'events.internal.mediaType'
  | 'events.internal.owner'
  | 'events.internal.type'
  | 'events.internal.contentFilePath'
  | 'events.startHour'
  | 'events.endHour'
  | 'events.date'
  | 'events.backgroundColor'
  | 'events.title'
  | 'events.displayTitleOnDesktop'
  | 'events.link'
  | 'events.createdAt'
  | 'events.updatedAt'
  | 'events.locale'
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
  | 'events.localizations.data'
  | 'events.localizations.data.id'
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
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
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
  readonly index: Maybe<IntQueryOperatorInput>;
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
  readonly large: Maybe<STRAPI_PARTNERLogoFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI_PARTNERLogoFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_PARTNERLogoFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI_PARTNERLogoFormatsThumbnailFilterInput>;
};

type STRAPI_PARTNERLogoFormatsLargeFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsMediumFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
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
  readonly large: Maybe<STRAPI_PARTNERWhiteLogoFormatsLargeFilterInput>;
  readonly small: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmallFilterInput>;
  readonly medium: Maybe<STRAPI_PARTNERWhiteLogoFormatsMediumFilterInput>;
  readonly thumbnail: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailFilterInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'sectionTitle'
  | 'isSectionVisible'
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
  | 'partners.parent.internal.contentFilePath'
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
  | 'partners.children.internal.contentFilePath'
  | 'partners.internal.content'
  | 'partners.internal.contentDigest'
  | 'partners.internal.description'
  | 'partners.internal.fieldOwners'
  | 'partners.internal.ignoreType'
  | 'partners.internal.mediaType'
  | 'partners.internal.owner'
  | 'partners.internal.type'
  | 'partners.internal.contentFilePath'
  | 'partners.Name'
  | 'partners.WebsiteURL'
  | 'partners.index'
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
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'title'
  | 'subtitle'
  | 'buttonText'
  | 'buttonUrl'
  | 'backgroundColor'
  | 'subtitlePos'
  | 'isSectionVisible'
  | 'videoId'
  | 'footer'
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
  | 'backgroundImage.parent.internal.contentFilePath'
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
  | 'backgroundImage.children.internal.contentFilePath'
  | 'backgroundImage.internal.content'
  | 'backgroundImage.internal.contentDigest'
  | 'backgroundImage.internal.description'
  | 'backgroundImage.internal.fieldOwners'
  | 'backgroundImage.internal.ignoreType'
  | 'backgroundImage.internal.mediaType'
  | 'backgroundImage.internal.owner'
  | 'backgroundImage.internal.type'
  | 'backgroundImage.internal.contentFilePath'
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
  | 'backgroundImage.localFile.internal.contentFilePath'
  | 'backgroundImage.strapi_id'
  | 'strapi_id'
  | 'backgroundVideo.id'
  | 'backgroundVideo.parent.id'
  | 'backgroundVideo.parent.parent.id'
  | 'backgroundVideo.parent.parent.children'
  | 'backgroundVideo.parent.children'
  | 'backgroundVideo.parent.children.id'
  | 'backgroundVideo.parent.children.children'
  | 'backgroundVideo.parent.internal.content'
  | 'backgroundVideo.parent.internal.contentDigest'
  | 'backgroundVideo.parent.internal.description'
  | 'backgroundVideo.parent.internal.fieldOwners'
  | 'backgroundVideo.parent.internal.ignoreType'
  | 'backgroundVideo.parent.internal.mediaType'
  | 'backgroundVideo.parent.internal.owner'
  | 'backgroundVideo.parent.internal.type'
  | 'backgroundVideo.parent.internal.contentFilePath'
  | 'backgroundVideo.children'
  | 'backgroundVideo.children.id'
  | 'backgroundVideo.children.parent.id'
  | 'backgroundVideo.children.parent.children'
  | 'backgroundVideo.children.children'
  | 'backgroundVideo.children.children.id'
  | 'backgroundVideo.children.children.children'
  | 'backgroundVideo.children.internal.content'
  | 'backgroundVideo.children.internal.contentDigest'
  | 'backgroundVideo.children.internal.description'
  | 'backgroundVideo.children.internal.fieldOwners'
  | 'backgroundVideo.children.internal.ignoreType'
  | 'backgroundVideo.children.internal.mediaType'
  | 'backgroundVideo.children.internal.owner'
  | 'backgroundVideo.children.internal.type'
  | 'backgroundVideo.children.internal.contentFilePath'
  | 'backgroundVideo.internal.content'
  | 'backgroundVideo.internal.contentDigest'
  | 'backgroundVideo.internal.description'
  | 'backgroundVideo.internal.fieldOwners'
  | 'backgroundVideo.internal.ignoreType'
  | 'backgroundVideo.internal.mediaType'
  | 'backgroundVideo.internal.owner'
  | 'backgroundVideo.internal.type'
  | 'backgroundVideo.internal.contentFilePath'
  | 'backgroundVideo.webm.id'
  | 'backgroundVideo.webm.parent.id'
  | 'backgroundVideo.webm.parent.children'
  | 'backgroundVideo.webm.children'
  | 'backgroundVideo.webm.children.id'
  | 'backgroundVideo.webm.children.children'
  | 'backgroundVideo.webm.internal.content'
  | 'backgroundVideo.webm.internal.contentDigest'
  | 'backgroundVideo.webm.internal.description'
  | 'backgroundVideo.webm.internal.fieldOwners'
  | 'backgroundVideo.webm.internal.ignoreType'
  | 'backgroundVideo.webm.internal.mediaType'
  | 'backgroundVideo.webm.internal.owner'
  | 'backgroundVideo.webm.internal.type'
  | 'backgroundVideo.webm.internal.contentFilePath'
  | 'backgroundVideo.webm.name'
  | 'backgroundVideo.webm.alternativeText'
  | 'backgroundVideo.webm.caption'
  | 'backgroundVideo.webm.width'
  | 'backgroundVideo.webm.height'
  | 'backgroundVideo.webm.hash'
  | 'backgroundVideo.webm.ext'
  | 'backgroundVideo.webm.mime'
  | 'backgroundVideo.webm.size'
  | 'backgroundVideo.webm.url'
  | 'backgroundVideo.webm.createdAt'
  | 'backgroundVideo.webm.updatedAt'
  | 'backgroundVideo.webm.localFile.sourceInstanceName'
  | 'backgroundVideo.webm.localFile.absolutePath'
  | 'backgroundVideo.webm.localFile.relativePath'
  | 'backgroundVideo.webm.localFile.extension'
  | 'backgroundVideo.webm.localFile.size'
  | 'backgroundVideo.webm.localFile.prettySize'
  | 'backgroundVideo.webm.localFile.modifiedTime'
  | 'backgroundVideo.webm.localFile.accessTime'
  | 'backgroundVideo.webm.localFile.changeTime'
  | 'backgroundVideo.webm.localFile.birthTime'
  | 'backgroundVideo.webm.localFile.root'
  | 'backgroundVideo.webm.localFile.dir'
  | 'backgroundVideo.webm.localFile.base'
  | 'backgroundVideo.webm.localFile.ext'
  | 'backgroundVideo.webm.localFile.name'
  | 'backgroundVideo.webm.localFile.relativeDirectory'
  | 'backgroundVideo.webm.localFile.dev'
  | 'backgroundVideo.webm.localFile.mode'
  | 'backgroundVideo.webm.localFile.nlink'
  | 'backgroundVideo.webm.localFile.uid'
  | 'backgroundVideo.webm.localFile.gid'
  | 'backgroundVideo.webm.localFile.rdev'
  | 'backgroundVideo.webm.localFile.ino'
  | 'backgroundVideo.webm.localFile.atimeMs'
  | 'backgroundVideo.webm.localFile.mtimeMs'
  | 'backgroundVideo.webm.localFile.ctimeMs'
  | 'backgroundVideo.webm.localFile.atime'
  | 'backgroundVideo.webm.localFile.mtime'
  | 'backgroundVideo.webm.localFile.ctime'
  | 'backgroundVideo.webm.localFile.birthtime'
  | 'backgroundVideo.webm.localFile.birthtimeMs'
  | 'backgroundVideo.webm.localFile.blksize'
  | 'backgroundVideo.webm.localFile.blocks'
  | 'backgroundVideo.webm.localFile.url'
  | 'backgroundVideo.webm.localFile.id'
  | 'backgroundVideo.webm.localFile.children'
  | 'backgroundVideo.webm.strapi_id'
  | 'backgroundVideo.mp4.id'
  | 'backgroundVideo.mp4.parent.id'
  | 'backgroundVideo.mp4.parent.children'
  | 'backgroundVideo.mp4.children'
  | 'backgroundVideo.mp4.children.id'
  | 'backgroundVideo.mp4.children.children'
  | 'backgroundVideo.mp4.internal.content'
  | 'backgroundVideo.mp4.internal.contentDigest'
  | 'backgroundVideo.mp4.internal.description'
  | 'backgroundVideo.mp4.internal.fieldOwners'
  | 'backgroundVideo.mp4.internal.ignoreType'
  | 'backgroundVideo.mp4.internal.mediaType'
  | 'backgroundVideo.mp4.internal.owner'
  | 'backgroundVideo.mp4.internal.type'
  | 'backgroundVideo.mp4.internal.contentFilePath'
  | 'backgroundVideo.mp4.name'
  | 'backgroundVideo.mp4.alternativeText'
  | 'backgroundVideo.mp4.caption'
  | 'backgroundVideo.mp4.width'
  | 'backgroundVideo.mp4.height'
  | 'backgroundVideo.mp4.hash'
  | 'backgroundVideo.mp4.ext'
  | 'backgroundVideo.mp4.mime'
  | 'backgroundVideo.mp4.size'
  | 'backgroundVideo.mp4.url'
  | 'backgroundVideo.mp4.createdAt'
  | 'backgroundVideo.mp4.updatedAt'
  | 'backgroundVideo.mp4.localFile.sourceInstanceName'
  | 'backgroundVideo.mp4.localFile.absolutePath'
  | 'backgroundVideo.mp4.localFile.relativePath'
  | 'backgroundVideo.mp4.localFile.extension'
  | 'backgroundVideo.mp4.localFile.size'
  | 'backgroundVideo.mp4.localFile.prettySize'
  | 'backgroundVideo.mp4.localFile.modifiedTime'
  | 'backgroundVideo.mp4.localFile.accessTime'
  | 'backgroundVideo.mp4.localFile.changeTime'
  | 'backgroundVideo.mp4.localFile.birthTime'
  | 'backgroundVideo.mp4.localFile.root'
  | 'backgroundVideo.mp4.localFile.dir'
  | 'backgroundVideo.mp4.localFile.base'
  | 'backgroundVideo.mp4.localFile.ext'
  | 'backgroundVideo.mp4.localFile.name'
  | 'backgroundVideo.mp4.localFile.relativeDirectory'
  | 'backgroundVideo.mp4.localFile.dev'
  | 'backgroundVideo.mp4.localFile.mode'
  | 'backgroundVideo.mp4.localFile.nlink'
  | 'backgroundVideo.mp4.localFile.uid'
  | 'backgroundVideo.mp4.localFile.gid'
  | 'backgroundVideo.mp4.localFile.rdev'
  | 'backgroundVideo.mp4.localFile.ino'
  | 'backgroundVideo.mp4.localFile.atimeMs'
  | 'backgroundVideo.mp4.localFile.mtimeMs'
  | 'backgroundVideo.mp4.localFile.ctimeMs'
  | 'backgroundVideo.mp4.localFile.atime'
  | 'backgroundVideo.mp4.localFile.mtime'
  | 'backgroundVideo.mp4.localFile.ctime'
  | 'backgroundVideo.mp4.localFile.birthtime'
  | 'backgroundVideo.mp4.localFile.birthtimeMs'
  | 'backgroundVideo.mp4.localFile.blksize'
  | 'backgroundVideo.mp4.localFile.blocks'
  | 'backgroundVideo.mp4.localFile.url'
  | 'backgroundVideo.mp4.localFile.id'
  | 'backgroundVideo.mp4.localFile.children'
  | 'backgroundVideo.mp4.strapi_id'
  | 'backgroundVideo.strapi_id';

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
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly videoId: Maybe<StringQueryOperatorInput>;
  readonly footer: Maybe<StringQueryOperatorInput>;
  readonly backgroundImage: Maybe<STRAPI__MEDIAFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
  readonly backgroundVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'title'
  | 'isSectionVisible'
  | 'buttonUrl'
  | 'buttonText'
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
  | 'images.parent.internal.contentFilePath'
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
  | 'images.children.internal.contentFilePath'
  | 'images.internal.content'
  | 'images.internal.contentDigest'
  | 'images.internal.description'
  | 'images.internal.fieldOwners'
  | 'images.internal.ignoreType'
  | 'images.internal.mediaType'
  | 'images.internal.owner'
  | 'images.internal.type'
  | 'images.internal.contentFilePath'
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
  | 'images.localFile.internal.contentFilePath'
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
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly buttonUrl: Maybe<StringQueryOperatorInput>;
  readonly buttonText: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<STRAPI__MEDIAFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_ACHIEVEMENTFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_ACHIEVEMENTFilterInput>;
};

type STRAPI_ACHIEVEMENTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly number: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly localizations: Maybe<STRAPI_ACHIEVEMENTLocalizationsFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_ACHIEVEMENTLocalizationsDataFilterListInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_ACHIEVEMENTLocalizationsDataFilterInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributesFilterInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly number: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection>;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly node: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'isSectionVisible'
  | 'achievements'
  | 'achievements.id'
  | 'achievements.parent.id'
  | 'achievements.parent.parent.id'
  | 'achievements.parent.parent.children'
  | 'achievements.parent.children'
  | 'achievements.parent.children.id'
  | 'achievements.parent.children.children'
  | 'achievements.parent.internal.content'
  | 'achievements.parent.internal.contentDigest'
  | 'achievements.parent.internal.description'
  | 'achievements.parent.internal.fieldOwners'
  | 'achievements.parent.internal.ignoreType'
  | 'achievements.parent.internal.mediaType'
  | 'achievements.parent.internal.owner'
  | 'achievements.parent.internal.type'
  | 'achievements.parent.internal.contentFilePath'
  | 'achievements.children'
  | 'achievements.children.id'
  | 'achievements.children.parent.id'
  | 'achievements.children.parent.children'
  | 'achievements.children.children'
  | 'achievements.children.children.id'
  | 'achievements.children.children.children'
  | 'achievements.children.internal.content'
  | 'achievements.children.internal.contentDigest'
  | 'achievements.children.internal.description'
  | 'achievements.children.internal.fieldOwners'
  | 'achievements.children.internal.ignoreType'
  | 'achievements.children.internal.mediaType'
  | 'achievements.children.internal.owner'
  | 'achievements.children.internal.type'
  | 'achievements.children.internal.contentFilePath'
  | 'achievements.internal.content'
  | 'achievements.internal.contentDigest'
  | 'achievements.internal.description'
  | 'achievements.internal.fieldOwners'
  | 'achievements.internal.ignoreType'
  | 'achievements.internal.mediaType'
  | 'achievements.internal.owner'
  | 'achievements.internal.type'
  | 'achievements.internal.contentFilePath'
  | 'achievements.name'
  | 'achievements.number'
  | 'achievements.index'
  | 'achievements.createdAt'
  | 'achievements.updatedAt'
  | 'achievements.locale'
  | 'achievements.localizations.data'
  | 'achievements.localizations.data.id'
  | 'achievements.strapi_id'
  | 'backgroundImages'
  | 'backgroundImages.id'
  | 'backgroundImages.parent.id'
  | 'backgroundImages.parent.parent.id'
  | 'backgroundImages.parent.parent.children'
  | 'backgroundImages.parent.children'
  | 'backgroundImages.parent.children.id'
  | 'backgroundImages.parent.children.children'
  | 'backgroundImages.parent.internal.content'
  | 'backgroundImages.parent.internal.contentDigest'
  | 'backgroundImages.parent.internal.description'
  | 'backgroundImages.parent.internal.fieldOwners'
  | 'backgroundImages.parent.internal.ignoreType'
  | 'backgroundImages.parent.internal.mediaType'
  | 'backgroundImages.parent.internal.owner'
  | 'backgroundImages.parent.internal.type'
  | 'backgroundImages.parent.internal.contentFilePath'
  | 'backgroundImages.children'
  | 'backgroundImages.children.id'
  | 'backgroundImages.children.parent.id'
  | 'backgroundImages.children.parent.children'
  | 'backgroundImages.children.children'
  | 'backgroundImages.children.children.id'
  | 'backgroundImages.children.children.children'
  | 'backgroundImages.children.internal.content'
  | 'backgroundImages.children.internal.contentDigest'
  | 'backgroundImages.children.internal.description'
  | 'backgroundImages.children.internal.fieldOwners'
  | 'backgroundImages.children.internal.ignoreType'
  | 'backgroundImages.children.internal.mediaType'
  | 'backgroundImages.children.internal.owner'
  | 'backgroundImages.children.internal.type'
  | 'backgroundImages.children.internal.contentFilePath'
  | 'backgroundImages.internal.content'
  | 'backgroundImages.internal.contentDigest'
  | 'backgroundImages.internal.description'
  | 'backgroundImages.internal.fieldOwners'
  | 'backgroundImages.internal.ignoreType'
  | 'backgroundImages.internal.mediaType'
  | 'backgroundImages.internal.owner'
  | 'backgroundImages.internal.type'
  | 'backgroundImages.internal.contentFilePath'
  | 'backgroundImages.name'
  | 'backgroundImages.alternativeText'
  | 'backgroundImages.caption'
  | 'backgroundImages.width'
  | 'backgroundImages.height'
  | 'backgroundImages.formats.large.ext'
  | 'backgroundImages.formats.large.url'
  | 'backgroundImages.formats.large.hash'
  | 'backgroundImages.formats.large.mime'
  | 'backgroundImages.formats.large.name'
  | 'backgroundImages.formats.large.size'
  | 'backgroundImages.formats.large.width'
  | 'backgroundImages.formats.large.height'
  | 'backgroundImages.formats.small.ext'
  | 'backgroundImages.formats.small.url'
  | 'backgroundImages.formats.small.hash'
  | 'backgroundImages.formats.small.mime'
  | 'backgroundImages.formats.small.name'
  | 'backgroundImages.formats.small.size'
  | 'backgroundImages.formats.small.width'
  | 'backgroundImages.formats.small.height'
  | 'backgroundImages.formats.medium.ext'
  | 'backgroundImages.formats.medium.url'
  | 'backgroundImages.formats.medium.hash'
  | 'backgroundImages.formats.medium.mime'
  | 'backgroundImages.formats.medium.name'
  | 'backgroundImages.formats.medium.size'
  | 'backgroundImages.formats.medium.width'
  | 'backgroundImages.formats.medium.height'
  | 'backgroundImages.formats.thumbnail.ext'
  | 'backgroundImages.formats.thumbnail.url'
  | 'backgroundImages.formats.thumbnail.hash'
  | 'backgroundImages.formats.thumbnail.mime'
  | 'backgroundImages.formats.thumbnail.name'
  | 'backgroundImages.formats.thumbnail.size'
  | 'backgroundImages.formats.thumbnail.width'
  | 'backgroundImages.formats.thumbnail.height'
  | 'backgroundImages.hash'
  | 'backgroundImages.ext'
  | 'backgroundImages.mime'
  | 'backgroundImages.size'
  | 'backgroundImages.url'
  | 'backgroundImages.createdAt'
  | 'backgroundImages.updatedAt'
  | 'backgroundImages.localFile.sourceInstanceName'
  | 'backgroundImages.localFile.absolutePath'
  | 'backgroundImages.localFile.relativePath'
  | 'backgroundImages.localFile.extension'
  | 'backgroundImages.localFile.size'
  | 'backgroundImages.localFile.prettySize'
  | 'backgroundImages.localFile.modifiedTime'
  | 'backgroundImages.localFile.accessTime'
  | 'backgroundImages.localFile.changeTime'
  | 'backgroundImages.localFile.birthTime'
  | 'backgroundImages.localFile.root'
  | 'backgroundImages.localFile.dir'
  | 'backgroundImages.localFile.base'
  | 'backgroundImages.localFile.ext'
  | 'backgroundImages.localFile.name'
  | 'backgroundImages.localFile.relativeDirectory'
  | 'backgroundImages.localFile.dev'
  | 'backgroundImages.localFile.mode'
  | 'backgroundImages.localFile.nlink'
  | 'backgroundImages.localFile.uid'
  | 'backgroundImages.localFile.gid'
  | 'backgroundImages.localFile.rdev'
  | 'backgroundImages.localFile.ino'
  | 'backgroundImages.localFile.atimeMs'
  | 'backgroundImages.localFile.mtimeMs'
  | 'backgroundImages.localFile.ctimeMs'
  | 'backgroundImages.localFile.atime'
  | 'backgroundImages.localFile.mtime'
  | 'backgroundImages.localFile.ctime'
  | 'backgroundImages.localFile.birthtime'
  | 'backgroundImages.localFile.birthtimeMs'
  | 'backgroundImages.localFile.blksize'
  | 'backgroundImages.localFile.blocks'
  | 'backgroundImages.localFile.url'
  | 'backgroundImages.localFile.id'
  | 'backgroundImages.localFile.parent.id'
  | 'backgroundImages.localFile.parent.children'
  | 'backgroundImages.localFile.children'
  | 'backgroundImages.localFile.children.id'
  | 'backgroundImages.localFile.children.children'
  | 'backgroundImages.localFile.internal.content'
  | 'backgroundImages.localFile.internal.contentDigest'
  | 'backgroundImages.localFile.internal.description'
  | 'backgroundImages.localFile.internal.fieldOwners'
  | 'backgroundImages.localFile.internal.ignoreType'
  | 'backgroundImages.localFile.internal.mediaType'
  | 'backgroundImages.localFile.internal.owner'
  | 'backgroundImages.localFile.internal.type'
  | 'backgroundImages.localFile.internal.contentFilePath'
  | 'backgroundImages.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly achievements: Maybe<STRAPI_ACHIEVEMENTFilterListInput>;
  readonly backgroundImages: Maybe<STRAPI__MEDIAFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_LECTUREFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_LECTUREFilterInput>;
};

type STRAPI_LECTUREFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly room: Maybe<IntQueryOperatorInput>;
  readonly startHour: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<STRAPI_LECTURELogoFilterInput>;
  readonly localizations: Maybe<STRAPI_LECTURELocalizationsFilterInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_LECTURELogoFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly alternativeText: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly formats: Maybe<STRAPI_LECTURELogoFormatsFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
};

type STRAPI_LECTURELogoFormatsFilterInput = {
  readonly small: Maybe<STRAPI_LECTURELogoFormatsSmallFilterInput>;
  readonly thumbnail: Maybe<STRAPI_LECTURELogoFormatsThumbnailFilterInput>;
};

type STRAPI_LECTURELogoFormatsSmallFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_LECTURELogoFormatsThumbnailFilterInput = {
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mime: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type STRAPI_LECTURELocalizationsFilterInput = {
  readonly data: Maybe<STRAPI_LECTURELocalizationsDataFilterListInput>;
};

type STRAPI_LECTURELocalizationsDataFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_LECTURELocalizationsDataFilterInput>;
};

type STRAPI_LECTURELocalizationsDataFilterInput = {
  readonly id: Maybe<IntQueryOperatorInput>;
  readonly attributes: Maybe<STRAPI_LECTURELocalizationsDataAttributesFilterInput>;
};

type STRAPI_LECTURELocalizationsDataAttributesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly room: Maybe<IntQueryOperatorInput>;
  readonly startHour: Maybe<StringQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_AGENDAConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAGroupConnection>;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};

type STRAPI__COMPONENT_BASE_AGENDAEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly node: STRAPI__COMPONENT_BASE_AGENDA;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
};

type STRAPI__COMPONENT_BASE_AGENDAFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'strapi_component'
  | 'title'
  | 'subtitle'
  | 'isSectionVisible'
  | 'lectures'
  | 'lectures.id'
  | 'lectures.parent.id'
  | 'lectures.parent.parent.id'
  | 'lectures.parent.parent.children'
  | 'lectures.parent.children'
  | 'lectures.parent.children.id'
  | 'lectures.parent.children.children'
  | 'lectures.parent.internal.content'
  | 'lectures.parent.internal.contentDigest'
  | 'lectures.parent.internal.description'
  | 'lectures.parent.internal.fieldOwners'
  | 'lectures.parent.internal.ignoreType'
  | 'lectures.parent.internal.mediaType'
  | 'lectures.parent.internal.owner'
  | 'lectures.parent.internal.type'
  | 'lectures.parent.internal.contentFilePath'
  | 'lectures.children'
  | 'lectures.children.id'
  | 'lectures.children.parent.id'
  | 'lectures.children.parent.children'
  | 'lectures.children.children'
  | 'lectures.children.children.id'
  | 'lectures.children.children.children'
  | 'lectures.children.internal.content'
  | 'lectures.children.internal.contentDigest'
  | 'lectures.children.internal.description'
  | 'lectures.children.internal.fieldOwners'
  | 'lectures.children.internal.ignoreType'
  | 'lectures.children.internal.mediaType'
  | 'lectures.children.internal.owner'
  | 'lectures.children.internal.type'
  | 'lectures.children.internal.contentFilePath'
  | 'lectures.internal.content'
  | 'lectures.internal.contentDigest'
  | 'lectures.internal.description'
  | 'lectures.internal.fieldOwners'
  | 'lectures.internal.ignoreType'
  | 'lectures.internal.mediaType'
  | 'lectures.internal.owner'
  | 'lectures.internal.type'
  | 'lectures.internal.contentFilePath'
  | 'lectures.title'
  | 'lectures.subtitle'
  | 'lectures.room'
  | 'lectures.startHour'
  | 'lectures.backgroundColor'
  | 'lectures.createdAt'
  | 'lectures.updatedAt'
  | 'lectures.locale'
  | 'lectures.logo.id'
  | 'lectures.logo.name'
  | 'lectures.logo.alternativeText'
  | 'lectures.logo.caption'
  | 'lectures.logo.width'
  | 'lectures.logo.height'
  | 'lectures.logo.hash'
  | 'lectures.logo.ext'
  | 'lectures.logo.mime'
  | 'lectures.logo.size'
  | 'lectures.logo.url'
  | 'lectures.logo.createdAt'
  | 'lectures.logo.updatedAt'
  | 'lectures.localizations.data'
  | 'lectures.localizations.data.id'
  | 'lectures.strapi_id'
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
  | 'speakers.parent.internal.contentFilePath'
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
  | 'speakers.children.internal.contentFilePath'
  | 'speakers.internal.content'
  | 'speakers.internal.contentDigest'
  | 'speakers.internal.description'
  | 'speakers.internal.fieldOwners'
  | 'speakers.internal.ignoreType'
  | 'speakers.internal.mediaType'
  | 'speakers.internal.owner'
  | 'speakers.internal.type'
  | 'speakers.internal.contentFilePath'
  | 'speakers.firstName'
  | 'speakers.lastName'
  | 'speakers.title'
  | 'speakers.position'
  | 'speakers.description'
  | 'speakers.linkedinUrl'
  | 'speakers.twitterUrl'
  | 'speakers.linktrUrl'
  | 'speakers.backgroundColor'
  | 'speakers.index'
  | 'speakers.createdAt'
  | 'speakers.updatedAt'
  | 'speakers.bio'
  | 'speakers.locale'
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
  | 'speakers.localizations.data'
  | 'speakers.localizations.data.id'
  | 'speakers.strapi_id'
  | 'strapi_id';

type STRAPI__COMPONENT_BASE_AGENDAGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAEdge>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI__COMPONENT_BASE_AGENDAFieldsEnum;
};

type STRAPI__COMPONENT_BASE_AGENDAFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly strapi_component: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly isSectionVisible: Maybe<BooleanQueryOperatorInput>;
  readonly lectures: Maybe<STRAPI_LECTUREFilterListInput>;
  readonly speakers: Maybe<STRAPI_SPEAKERFilterListInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_AGENDASortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_AGENDAFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_VIDEOSPAGEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_VIDEOSPAGEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOSPAGE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOSPAGEGroupConnection>;
};


type STRAPI_VIDEOSPAGEConnection_distinctArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEConnection_maxArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEConnection_minArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEConnection_sumArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};

type STRAPI_VIDEOSPAGEEdge = {
  readonly next: Maybe<STRAPI_VIDEOSPAGE>;
  readonly node: STRAPI_VIDEOSPAGE;
  readonly previous: Maybe<STRAPI_VIDEOSPAGE>;
};

type STRAPI_VIDEOSPAGEFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'subtitle'
  | 'footerSubtitle'
  | 'createdAt'
  | 'updatedAt'
  | 'strapi_id';

type STRAPI_VIDEOSPAGEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_VIDEOSPAGEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOSPAGE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOSPAGEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOSPAGEGroupConnection_distinctArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEGroupConnection_maxArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEGroupConnection_minArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEGroupConnection_sumArgs = {
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};


type STRAPI_VIDEOSPAGEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_VIDEOSPAGEFieldsEnum;
};

type STRAPI_VIDEOSPAGEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly footerSubtitle: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOSPAGEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_VIDEOLISTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_VIDEOLISTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOLIST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOLISTGroupConnection>;
};


type STRAPI_VIDEOLISTConnection_distinctArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTConnection_maxArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTConnection_minArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTConnection_sumArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_VIDEOLISTFieldsEnum;
};

type STRAPI_VIDEOLISTEdge = {
  readonly next: Maybe<STRAPI_VIDEOLIST>;
  readonly node: STRAPI_VIDEOLIST;
  readonly previous: Maybe<STRAPI_VIDEOLIST>;
};

type STRAPI_VIDEOLISTFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'createdAt'
  | 'updatedAt'
  | 'subtitle'
  | 'videoUrl'
  | 'locale'
  | 'thumbnail.id'
  | 'thumbnail.name'
  | 'thumbnail.alternativeText'
  | 'thumbnail.caption'
  | 'thumbnail.width'
  | 'thumbnail.height'
  | 'thumbnail.formats.large.ext'
  | 'thumbnail.formats.large.url'
  | 'thumbnail.formats.large.hash'
  | 'thumbnail.formats.large.mime'
  | 'thumbnail.formats.large.name'
  | 'thumbnail.formats.large.size'
  | 'thumbnail.formats.large.width'
  | 'thumbnail.formats.large.height'
  | 'thumbnail.formats.small.ext'
  | 'thumbnail.formats.small.url'
  | 'thumbnail.formats.small.hash'
  | 'thumbnail.formats.small.mime'
  | 'thumbnail.formats.small.name'
  | 'thumbnail.formats.small.size'
  | 'thumbnail.formats.small.width'
  | 'thumbnail.formats.small.height'
  | 'thumbnail.formats.medium.ext'
  | 'thumbnail.formats.medium.url'
  | 'thumbnail.formats.medium.hash'
  | 'thumbnail.formats.medium.mime'
  | 'thumbnail.formats.medium.name'
  | 'thumbnail.formats.medium.size'
  | 'thumbnail.formats.medium.width'
  | 'thumbnail.formats.medium.height'
  | 'thumbnail.formats.thumbnail.ext'
  | 'thumbnail.formats.thumbnail.url'
  | 'thumbnail.formats.thumbnail.hash'
  | 'thumbnail.formats.thumbnail.mime'
  | 'thumbnail.formats.thumbnail.name'
  | 'thumbnail.formats.thumbnail.size'
  | 'thumbnail.formats.thumbnail.width'
  | 'thumbnail.formats.thumbnail.height'
  | 'thumbnail.hash'
  | 'thumbnail.ext'
  | 'thumbnail.mime'
  | 'thumbnail.size'
  | 'thumbnail.url'
  | 'thumbnail.createdAt'
  | 'thumbnail.updatedAt'
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.subtitle'
  | 'localizations.data.attributes.videoUrl'
  | 'localizations.data.attributes.locale'
  | 'strapi_id';

type STRAPI_VIDEOLISTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_VIDEOLISTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOLIST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOLISTGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTGroupConnection_distinctArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTGroupConnection_maxArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTGroupConnection_minArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTGroupConnection_sumArgs = {
  field: STRAPI_VIDEOLISTFieldsEnum;
};


type STRAPI_VIDEOLISTGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_VIDEOLISTFieldsEnum;
};

type STRAPI_VIDEOLISTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOLISTFieldsEnum>>>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'firstName'
  | 'lastName'
  | 'title'
  | 'position'
  | 'description'
  | 'linkedinUrl'
  | 'twitterUrl'
  | 'linktrUrl'
  | 'backgroundColor'
  | 'index'
  | 'createdAt'
  | 'updatedAt'
  | 'bio'
  | 'locale'
  | 'photo.id'
  | 'photo.name'
  | 'photo.alternativeText'
  | 'photo.caption'
  | 'photo.width'
  | 'photo.height'
  | 'photo.formats.large.ext'
  | 'photo.formats.large.url'
  | 'photo.formats.large.hash'
  | 'photo.formats.large.mime'
  | 'photo.formats.large.name'
  | 'photo.formats.large.size'
  | 'photo.formats.large.width'
  | 'photo.formats.large.height'
  | 'photo.formats.small.ext'
  | 'photo.formats.small.url'
  | 'photo.formats.small.hash'
  | 'photo.formats.small.mime'
  | 'photo.formats.small.name'
  | 'photo.formats.small.size'
  | 'photo.formats.small.width'
  | 'photo.formats.small.height'
  | 'photo.formats.medium.ext'
  | 'photo.formats.medium.url'
  | 'photo.formats.medium.hash'
  | 'photo.formats.medium.mime'
  | 'photo.formats.medium.name'
  | 'photo.formats.medium.size'
  | 'photo.formats.medium.width'
  | 'photo.formats.medium.height'
  | 'photo.formats.thumbnail.ext'
  | 'photo.formats.thumbnail.url'
  | 'photo.formats.thumbnail.hash'
  | 'photo.formats.thumbnail.mime'
  | 'photo.formats.thumbnail.name'
  | 'photo.formats.thumbnail.size'
  | 'photo.formats.thumbnail.width'
  | 'photo.formats.thumbnail.height'
  | 'photo.hash'
  | 'photo.ext'
  | 'photo.mime'
  | 'photo.size'
  | 'photo.url'
  | 'photo.createdAt'
  | 'photo.updatedAt'
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.firstName'
  | 'localizations.data.attributes.lastName'
  | 'localizations.data.attributes.title'
  | 'localizations.data.attributes.position'
  | 'localizations.data.attributes.description'
  | 'localizations.data.attributes.linkedinUrl'
  | 'localizations.data.attributes.twitterUrl'
  | 'localizations.data.attributes.linktrUrl'
  | 'localizations.data.attributes.backgroundColor'
  | 'localizations.data.attributes.index'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.bio'
  | 'localizations.data.attributes.locale'
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

type STRAPI_SIGNUP_SECTIONConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SIGNUP_SECTIONEdge>;
  readonly nodes: ReadonlyArray<STRAPI_SIGNUP_SECTION>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SIGNUP_SECTIONGroupConnection>;
};


type STRAPI_SIGNUP_SECTIONConnection_distinctArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONConnection_maxArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONConnection_minArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONConnection_sumArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};

type STRAPI_SIGNUP_SECTIONEdge = {
  readonly next: Maybe<STRAPI_SIGNUP_SECTION>;
  readonly node: STRAPI_SIGNUP_SECTION;
  readonly previous: Maybe<STRAPI_SIGNUP_SECTION>;
};

type STRAPI_SIGNUP_SECTIONFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'buttonText'
  | 'buttonUrl'
  | 'title'
  | 'subtitle'
  | 'link'
  | 'createdAt'
  | 'updatedAt'
  | 'locale'
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.buttonText'
  | 'localizations.data.attributes.buttonUrl'
  | 'localizations.data.attributes.title'
  | 'localizations.data.attributes.subtitle'
  | 'localizations.data.attributes.link'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.locale'
  | 'strapi_id';

type STRAPI_SIGNUP_SECTIONGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_SIGNUP_SECTIONEdge>;
  readonly nodes: ReadonlyArray<STRAPI_SIGNUP_SECTION>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_SIGNUP_SECTIONGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_distinctArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_maxArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_minArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_sumArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_SIGNUP_SECTIONFieldsEnum;
};

type STRAPI_SIGNUP_SECTIONSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_SIGNUP_SECTIONFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_RULES_TEXT_TEXTNODEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEGroupConnection>;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_maxArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_minArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_sumArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};

type STRAPI_RULES_TEXT_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly node: STRAPI_RULES_TEXT_TEXTNODE;
  readonly previous: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
};

type STRAPI_RULES_TEXT_TEXTNODEFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'text';

type STRAPI_RULES_TEXT_TEXTNODEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_RULES_TEXT_TEXTNODEFieldsEnum;
};

type STRAPI_RULES_TEXT_TEXTNODEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type STRAPI_RULES_TEXT_TEXTNODESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_RULES_TEXT_TEXTNODEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_RULESTextFilterInput = {
  readonly data: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_RULES_TEXT_TEXTNODEFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_RULESConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_RULESEdge>;
  readonly nodes: ReadonlyArray<STRAPI_RULES>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_RULESGroupConnection>;
};


type STRAPI_RULESConnection_distinctArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESConnection_maxArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESConnection_minArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESConnection_sumArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_RULESFieldsEnum;
};

type STRAPI_RULESEdge = {
  readonly next: Maybe<STRAPI_RULES>;
  readonly node: STRAPI_RULES;
  readonly previous: Maybe<STRAPI_RULES>;
};

type STRAPI_RULESFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'text.data.id'
  | 'text.data.parent.id'
  | 'text.data.parent.children'
  | 'text.data.children'
  | 'text.data.children.id'
  | 'text.data.children.children'
  | 'text.data.internal.content'
  | 'text.data.internal.contentDigest'
  | 'text.data.internal.description'
  | 'text.data.internal.fieldOwners'
  | 'text.data.internal.ignoreType'
  | 'text.data.internal.mediaType'
  | 'text.data.internal.owner'
  | 'text.data.internal.type'
  | 'text.data.internal.contentFilePath'
  | 'text.data.text'
  | 'createdAt'
  | 'updatedAt'
  | 'strapi_id'
  | 'childrenStrapiRulesTextTextnode'
  | 'childrenStrapiRulesTextTextnode.id'
  | 'childrenStrapiRulesTextTextnode.parent.id'
  | 'childrenStrapiRulesTextTextnode.parent.parent.id'
  | 'childrenStrapiRulesTextTextnode.parent.parent.children'
  | 'childrenStrapiRulesTextTextnode.parent.children'
  | 'childrenStrapiRulesTextTextnode.parent.children.id'
  | 'childrenStrapiRulesTextTextnode.parent.children.children'
  | 'childrenStrapiRulesTextTextnode.parent.internal.content'
  | 'childrenStrapiRulesTextTextnode.parent.internal.contentDigest'
  | 'childrenStrapiRulesTextTextnode.parent.internal.description'
  | 'childrenStrapiRulesTextTextnode.parent.internal.fieldOwners'
  | 'childrenStrapiRulesTextTextnode.parent.internal.ignoreType'
  | 'childrenStrapiRulesTextTextnode.parent.internal.mediaType'
  | 'childrenStrapiRulesTextTextnode.parent.internal.owner'
  | 'childrenStrapiRulesTextTextnode.parent.internal.type'
  | 'childrenStrapiRulesTextTextnode.parent.internal.contentFilePath'
  | 'childrenStrapiRulesTextTextnode.children'
  | 'childrenStrapiRulesTextTextnode.children.id'
  | 'childrenStrapiRulesTextTextnode.children.parent.id'
  | 'childrenStrapiRulesTextTextnode.children.parent.children'
  | 'childrenStrapiRulesTextTextnode.children.children'
  | 'childrenStrapiRulesTextTextnode.children.children.id'
  | 'childrenStrapiRulesTextTextnode.children.children.children'
  | 'childrenStrapiRulesTextTextnode.children.internal.content'
  | 'childrenStrapiRulesTextTextnode.children.internal.contentDigest'
  | 'childrenStrapiRulesTextTextnode.children.internal.description'
  | 'childrenStrapiRulesTextTextnode.children.internal.fieldOwners'
  | 'childrenStrapiRulesTextTextnode.children.internal.ignoreType'
  | 'childrenStrapiRulesTextTextnode.children.internal.mediaType'
  | 'childrenStrapiRulesTextTextnode.children.internal.owner'
  | 'childrenStrapiRulesTextTextnode.children.internal.type'
  | 'childrenStrapiRulesTextTextnode.children.internal.contentFilePath'
  | 'childrenStrapiRulesTextTextnode.internal.content'
  | 'childrenStrapiRulesTextTextnode.internal.contentDigest'
  | 'childrenStrapiRulesTextTextnode.internal.description'
  | 'childrenStrapiRulesTextTextnode.internal.fieldOwners'
  | 'childrenStrapiRulesTextTextnode.internal.ignoreType'
  | 'childrenStrapiRulesTextTextnode.internal.mediaType'
  | 'childrenStrapiRulesTextTextnode.internal.owner'
  | 'childrenStrapiRulesTextTextnode.internal.type'
  | 'childrenStrapiRulesTextTextnode.internal.contentFilePath'
  | 'childrenStrapiRulesTextTextnode.text'
  | 'childStrapiRulesTextTextnode.id'
  | 'childStrapiRulesTextTextnode.parent.id'
  | 'childStrapiRulesTextTextnode.parent.parent.id'
  | 'childStrapiRulesTextTextnode.parent.parent.children'
  | 'childStrapiRulesTextTextnode.parent.children'
  | 'childStrapiRulesTextTextnode.parent.children.id'
  | 'childStrapiRulesTextTextnode.parent.children.children'
  | 'childStrapiRulesTextTextnode.parent.internal.content'
  | 'childStrapiRulesTextTextnode.parent.internal.contentDigest'
  | 'childStrapiRulesTextTextnode.parent.internal.description'
  | 'childStrapiRulesTextTextnode.parent.internal.fieldOwners'
  | 'childStrapiRulesTextTextnode.parent.internal.ignoreType'
  | 'childStrapiRulesTextTextnode.parent.internal.mediaType'
  | 'childStrapiRulesTextTextnode.parent.internal.owner'
  | 'childStrapiRulesTextTextnode.parent.internal.type'
  | 'childStrapiRulesTextTextnode.parent.internal.contentFilePath'
  | 'childStrapiRulesTextTextnode.children'
  | 'childStrapiRulesTextTextnode.children.id'
  | 'childStrapiRulesTextTextnode.children.parent.id'
  | 'childStrapiRulesTextTextnode.children.parent.children'
  | 'childStrapiRulesTextTextnode.children.children'
  | 'childStrapiRulesTextTextnode.children.children.id'
  | 'childStrapiRulesTextTextnode.children.children.children'
  | 'childStrapiRulesTextTextnode.children.internal.content'
  | 'childStrapiRulesTextTextnode.children.internal.contentDigest'
  | 'childStrapiRulesTextTextnode.children.internal.description'
  | 'childStrapiRulesTextTextnode.children.internal.fieldOwners'
  | 'childStrapiRulesTextTextnode.children.internal.ignoreType'
  | 'childStrapiRulesTextTextnode.children.internal.mediaType'
  | 'childStrapiRulesTextTextnode.children.internal.owner'
  | 'childStrapiRulesTextTextnode.children.internal.type'
  | 'childStrapiRulesTextTextnode.children.internal.contentFilePath'
  | 'childStrapiRulesTextTextnode.internal.content'
  | 'childStrapiRulesTextTextnode.internal.contentDigest'
  | 'childStrapiRulesTextTextnode.internal.description'
  | 'childStrapiRulesTextTextnode.internal.fieldOwners'
  | 'childStrapiRulesTextTextnode.internal.ignoreType'
  | 'childStrapiRulesTextTextnode.internal.mediaType'
  | 'childStrapiRulesTextTextnode.internal.owner'
  | 'childStrapiRulesTextTextnode.internal.type'
  | 'childStrapiRulesTextTextnode.internal.contentFilePath'
  | 'childStrapiRulesTextTextnode.text';

type STRAPI_RULESGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_RULESEdge>;
  readonly nodes: ReadonlyArray<STRAPI_RULES>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_RULESGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_RULESGroupConnection_distinctArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESGroupConnection_maxArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESGroupConnection_minArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESGroupConnection_sumArgs = {
  field: STRAPI_RULESFieldsEnum;
};


type STRAPI_RULESGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_RULESFieldsEnum;
};

type STRAPI_RULESFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly text: Maybe<STRAPI_RULESTextFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
  readonly childrenStrapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterListInput>;
  readonly childStrapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_RULESSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_RULESFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection>;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly node: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE;
  readonly previous: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'text';

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type STRAPI_PRIVACYPOLICYTextFilterInput = {
  readonly data: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterListInput = {
  readonly elemMatch: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_PRIVACYPOLICYConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICYEdge>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICYGroupConnection>;
};


type STRAPI_PRIVACYPOLICYConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};

type STRAPI_PRIVACYPOLICYEdge = {
  readonly next: Maybe<STRAPI_PRIVACYPOLICY>;
  readonly node: STRAPI_PRIVACYPOLICY;
  readonly previous: Maybe<STRAPI_PRIVACYPOLICY>;
};

type STRAPI_PRIVACYPOLICYFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'text.data.id'
  | 'text.data.parent.id'
  | 'text.data.parent.children'
  | 'text.data.children'
  | 'text.data.children.id'
  | 'text.data.children.children'
  | 'text.data.internal.content'
  | 'text.data.internal.contentDigest'
  | 'text.data.internal.description'
  | 'text.data.internal.fieldOwners'
  | 'text.data.internal.ignoreType'
  | 'text.data.internal.mediaType'
  | 'text.data.internal.owner'
  | 'text.data.internal.type'
  | 'text.data.internal.contentFilePath'
  | 'text.data.text'
  | 'createdAt'
  | 'updatedAt'
  | 'strapi_id'
  | 'childrenStrapiPrivacypolicyTextTextnode'
  | 'childrenStrapiPrivacypolicyTextTextnode.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.parent.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.parent.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.children.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.children.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.content'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.contentDigest'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.description'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.fieldOwners'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.ignoreType'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.mediaType'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.owner'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.type'
  | 'childrenStrapiPrivacypolicyTextTextnode.parent.internal.contentFilePath'
  | 'childrenStrapiPrivacypolicyTextTextnode.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.parent.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.parent.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.children.id'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.children.children'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.content'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.contentDigest'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.description'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.fieldOwners'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.ignoreType'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.mediaType'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.owner'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.type'
  | 'childrenStrapiPrivacypolicyTextTextnode.children.internal.contentFilePath'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.content'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.contentDigest'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.description'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.fieldOwners'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.ignoreType'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.mediaType'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.owner'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.type'
  | 'childrenStrapiPrivacypolicyTextTextnode.internal.contentFilePath'
  | 'childrenStrapiPrivacypolicyTextTextnode.text'
  | 'childStrapiPrivacypolicyTextTextnode.id'
  | 'childStrapiPrivacypolicyTextTextnode.parent.id'
  | 'childStrapiPrivacypolicyTextTextnode.parent.parent.id'
  | 'childStrapiPrivacypolicyTextTextnode.parent.parent.children'
  | 'childStrapiPrivacypolicyTextTextnode.parent.children'
  | 'childStrapiPrivacypolicyTextTextnode.parent.children.id'
  | 'childStrapiPrivacypolicyTextTextnode.parent.children.children'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.content'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.contentDigest'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.description'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.fieldOwners'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.ignoreType'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.mediaType'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.owner'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.type'
  | 'childStrapiPrivacypolicyTextTextnode.parent.internal.contentFilePath'
  | 'childStrapiPrivacypolicyTextTextnode.children'
  | 'childStrapiPrivacypolicyTextTextnode.children.id'
  | 'childStrapiPrivacypolicyTextTextnode.children.parent.id'
  | 'childStrapiPrivacypolicyTextTextnode.children.parent.children'
  | 'childStrapiPrivacypolicyTextTextnode.children.children'
  | 'childStrapiPrivacypolicyTextTextnode.children.children.id'
  | 'childStrapiPrivacypolicyTextTextnode.children.children.children'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.content'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.contentDigest'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.description'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.fieldOwners'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.ignoreType'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.mediaType'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.owner'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.type'
  | 'childStrapiPrivacypolicyTextTextnode.children.internal.contentFilePath'
  | 'childStrapiPrivacypolicyTextTextnode.internal.content'
  | 'childStrapiPrivacypolicyTextTextnode.internal.contentDigest'
  | 'childStrapiPrivacypolicyTextTextnode.internal.description'
  | 'childStrapiPrivacypolicyTextTextnode.internal.fieldOwners'
  | 'childStrapiPrivacypolicyTextTextnode.internal.ignoreType'
  | 'childStrapiPrivacypolicyTextTextnode.internal.mediaType'
  | 'childStrapiPrivacypolicyTextTextnode.internal.owner'
  | 'childStrapiPrivacypolicyTextTextnode.internal.type'
  | 'childStrapiPrivacypolicyTextTextnode.internal.contentFilePath'
  | 'childStrapiPrivacypolicyTextTextnode.text';

type STRAPI_PRIVACYPOLICYGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICYEdge>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICYGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICYGroupConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYGroupConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYGroupConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYGroupConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};


type STRAPI_PRIVACYPOLICYGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_PRIVACYPOLICYFieldsEnum;
};

type STRAPI_PRIVACYPOLICYFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly text: Maybe<STRAPI_PRIVACYPOLICYTextFilterInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly strapi_id: Maybe<IntQueryOperatorInput>;
  readonly childrenStrapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterListInput>;
  readonly childStrapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_PRIVACYPOLICYSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_PRIVACYPOLICYFieldsEnum>>>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'Name'
  | 'WebsiteURL'
  | 'index'
  | 'createdAt'
  | 'updatedAt'
  | 'Logo.id'
  | 'Logo.name'
  | 'Logo.alternativeText'
  | 'Logo.caption'
  | 'Logo.width'
  | 'Logo.height'
  | 'Logo.formats.large.ext'
  | 'Logo.formats.large.url'
  | 'Logo.formats.large.hash'
  | 'Logo.formats.large.mime'
  | 'Logo.formats.large.name'
  | 'Logo.formats.large.size'
  | 'Logo.formats.large.width'
  | 'Logo.formats.large.height'
  | 'Logo.formats.small.ext'
  | 'Logo.formats.small.url'
  | 'Logo.formats.small.hash'
  | 'Logo.formats.small.mime'
  | 'Logo.formats.small.name'
  | 'Logo.formats.small.size'
  | 'Logo.formats.small.width'
  | 'Logo.formats.small.height'
  | 'Logo.formats.medium.ext'
  | 'Logo.formats.medium.url'
  | 'Logo.formats.medium.hash'
  | 'Logo.formats.medium.mime'
  | 'Logo.formats.medium.name'
  | 'Logo.formats.medium.size'
  | 'Logo.formats.medium.width'
  | 'Logo.formats.medium.height'
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
  | 'whiteLogo.formats.large.ext'
  | 'whiteLogo.formats.large.url'
  | 'whiteLogo.formats.large.hash'
  | 'whiteLogo.formats.large.mime'
  | 'whiteLogo.formats.large.name'
  | 'whiteLogo.formats.large.size'
  | 'whiteLogo.formats.large.width'
  | 'whiteLogo.formats.large.height'
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
  | 'whiteLogo.formats.thumbnail.ext'
  | 'whiteLogo.formats.thumbnail.url'
  | 'whiteLogo.formats.thumbnail.hash'
  | 'whiteLogo.formats.thumbnail.mime'
  | 'whiteLogo.formats.thumbnail.name'
  | 'whiteLogo.formats.thumbnail.size'
  | 'whiteLogo.formats.thumbnail.width'
  | 'whiteLogo.formats.thumbnail.height'
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

type STRAPI_LECTUREConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_LECTUREEdge>;
  readonly nodes: ReadonlyArray<STRAPI_LECTURE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_LECTUREGroupConnection>;
};


type STRAPI_LECTUREConnection_distinctArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREConnection_maxArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREConnection_minArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREConnection_sumArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_LECTUREFieldsEnum;
};

type STRAPI_LECTUREEdge = {
  readonly next: Maybe<STRAPI_LECTURE>;
  readonly node: STRAPI_LECTURE;
  readonly previous: Maybe<STRAPI_LECTURE>;
};

type STRAPI_LECTUREFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'title'
  | 'subtitle'
  | 'room'
  | 'startHour'
  | 'backgroundColor'
  | 'createdAt'
  | 'updatedAt'
  | 'locale'
  | 'logo.id'
  | 'logo.name'
  | 'logo.alternativeText'
  | 'logo.caption'
  | 'logo.width'
  | 'logo.height'
  | 'logo.formats.small.ext'
  | 'logo.formats.small.url'
  | 'logo.formats.small.hash'
  | 'logo.formats.small.mime'
  | 'logo.formats.small.name'
  | 'logo.formats.small.size'
  | 'logo.formats.small.width'
  | 'logo.formats.small.height'
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
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.title'
  | 'localizations.data.attributes.subtitle'
  | 'localizations.data.attributes.room'
  | 'localizations.data.attributes.startHour'
  | 'localizations.data.attributes.backgroundColor'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.locale'
  | 'strapi_id';

type STRAPI_LECTUREGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_LECTUREEdge>;
  readonly nodes: ReadonlyArray<STRAPI_LECTURE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_LECTUREGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_LECTUREGroupConnection_distinctArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREGroupConnection_maxArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREGroupConnection_minArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREGroupConnection_sumArgs = {
  field: STRAPI_LECTUREFieldsEnum;
};


type STRAPI_LECTUREGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_LECTUREFieldsEnum;
};

type STRAPI_LECTURESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_LECTUREFieldsEnum>>>;
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'startHour'
  | 'endHour'
  | 'date'
  | 'backgroundColor'
  | 'title'
  | 'displayTitleOnDesktop'
  | 'link'
  | 'createdAt'
  | 'updatedAt'
  | 'locale'
  | 'logo.id'
  | 'logo.name'
  | 'logo.alternativeText'
  | 'logo.caption'
  | 'logo.width'
  | 'logo.height'
  | 'logo.hash'
  | 'logo.ext'
  | 'logo.mime'
  | 'logo.size'
  | 'logo.url'
  | 'logo.createdAt'
  | 'logo.updatedAt'
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.startHour'
  | 'localizations.data.attributes.endHour'
  | 'localizations.data.attributes.date'
  | 'localizations.data.attributes.backgroundColor'
  | 'localizations.data.attributes.title'
  | 'localizations.data.attributes.displayTitleOnDesktop'
  | 'localizations.data.attributes.link'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.locale'
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

type STRAPI_ACHIEVEMENTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_ACHIEVEMENTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_ACHIEVEMENT>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_ACHIEVEMENTGroupConnection>;
};


type STRAPI_ACHIEVEMENTConnection_distinctArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTConnection_maxArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTConnection_minArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTConnection_sumArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};

type STRAPI_ACHIEVEMENTEdge = {
  readonly next: Maybe<STRAPI_ACHIEVEMENT>;
  readonly node: STRAPI_ACHIEVEMENT;
  readonly previous: Maybe<STRAPI_ACHIEVEMENT>;
};

type STRAPI_ACHIEVEMENTFieldsEnum =
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
  | 'parent.parent.internal.contentFilePath'
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
  | 'parent.children.internal.contentFilePath'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.internal.contentFilePath'
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
  | 'children.parent.internal.contentFilePath'
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
  | 'children.children.internal.contentFilePath'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.internal.contentFilePath'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'internal.contentFilePath'
  | 'name'
  | 'number'
  | 'index'
  | 'createdAt'
  | 'updatedAt'
  | 'locale'
  | 'localizations.data'
  | 'localizations.data.id'
  | 'localizations.data.attributes.name'
  | 'localizations.data.attributes.number'
  | 'localizations.data.attributes.index'
  | 'localizations.data.attributes.createdAt'
  | 'localizations.data.attributes.updatedAt'
  | 'localizations.data.attributes.locale'
  | 'strapi_id';

type STRAPI_ACHIEVEMENTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<STRAPI_ACHIEVEMENTEdge>;
  readonly nodes: ReadonlyArray<STRAPI_ACHIEVEMENT>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<STRAPI_ACHIEVEMENTGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENTGroupConnection_distinctArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTGroupConnection_maxArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTGroupConnection_minArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTGroupConnection_sumArgs = {
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};


type STRAPI_ACHIEVEMENTGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: STRAPI_ACHIEVEMENTFieldsEnum;
};

type STRAPI_ACHIEVEMENTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<STRAPI_ACHIEVEMENTFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

}