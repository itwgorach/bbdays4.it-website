/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
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
  JSON: any;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
  readonly url: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allStrapiAchievement: STRAPI_ACHIEVEMENTConnection;
  readonly allStrapiComponentBaseAgenda: STRAPI__COMPONENT_BASE_AGENDAConnection;
  readonly allStrapiComponentBaseFestivalInNumbers: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection;
  readonly allStrapiComponentBaseGalerySlider: STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection;
  readonly allStrapiComponentBaseHero: STRAPI__COMPONENT_BASE_HEROConnection;
  readonly allStrapiComponentBasePartnersSlider: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection;
  readonly allStrapiComponentBaseSchedule: STRAPI__COMPONENT_BASE_SCHEDULEConnection;
  readonly allStrapiComponentBaseSignupGrid: STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection;
  readonly allStrapiComponentBaseSpeakersGrid: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection;
  readonly allStrapiComponentBaseVideo: STRAPI__COMPONENT_BASE_VIDEOConnection;
  readonly allStrapiComponentBaseVideoSection: STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection;
  readonly allStrapiComponentBaseVideosList: STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection;
  readonly allStrapiEvent: STRAPI_EVENTConnection;
  readonly allStrapiHomepage: STRAPI_HOMEPAGEConnection;
  readonly allStrapiLecture: STRAPI_LECTUREConnection;
  readonly allStrapiMedia: STRAPI__MEDIAConnection;
  readonly allStrapiPartner: STRAPI_PARTNERConnection;
  readonly allStrapiPrivacypolicy: STRAPI_PRIVACYPOLICYConnection;
  readonly allStrapiPrivacypolicyTextTextnode: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection;
  readonly allStrapiRules: STRAPI_RULESConnection;
  readonly allStrapiRulesTextTextnode: STRAPI_RULES_TEXT_TEXTNODEConnection;
  readonly allStrapiSignupSection: STRAPI_SIGNUP_SECTIONConnection;
  readonly allStrapiSpeaker: STRAPI_SPEAKERConnection;
  readonly allStrapiVideolist: STRAPI_VIDEOLISTConnection;
  readonly allStrapiVideospage: STRAPI_VIDEOSPAGEConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly strapiAchievement: Maybe<STRAPI_ACHIEVEMENT>;
  readonly strapiComponentBaseAgenda: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly strapiComponentBaseFestivalInNumbers: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly strapiComponentBaseGalerySlider: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly strapiComponentBaseHero: Maybe<STRAPI__COMPONENT_BASE_HERO>;
  readonly strapiComponentBasePartnersSlider: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly strapiComponentBaseSchedule: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly strapiComponentBaseSignupGrid: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly strapiComponentBaseSpeakersGrid: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly strapiComponentBaseVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly strapiComponentBaseVideoSection: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly strapiComponentBaseVideosList: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly strapiEvent: Maybe<STRAPI_EVENT>;
  readonly strapiHomepage: Maybe<STRAPI_HOMEPAGE>;
  readonly strapiLecture: Maybe<STRAPI_LECTURE>;
  readonly strapiMedia: Maybe<STRAPI__MEDIA>;
  readonly strapiPartner: Maybe<STRAPI_PARTNER>;
  readonly strapiPrivacypolicy: Maybe<STRAPI_PRIVACYPOLICY>;
  readonly strapiPrivacypolicyTextTextnode: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly strapiRules: Maybe<STRAPI_RULES>;
  readonly strapiRulesTextTextnode: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly strapiSignupSection: Maybe<STRAPI_SIGNUP_SECTION>;
  readonly strapiSpeaker: Maybe<STRAPI_SPEAKER>;
  readonly strapiVideolist: Maybe<STRAPI_VIDEOLIST>;
  readonly strapiVideospage: Maybe<STRAPI_VIDEOSPAGE>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_allStrapiAchievementArgs = {
  filter: InputMaybe<STRAPI_ACHIEVEMENTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_ACHIEVEMENTSortInput>>>;
};


type Query_allStrapiComponentBaseAgendaArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_AGENDAFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_AGENDASortInput>>>;
};


type Query_allStrapiComponentBaseFestivalInNumbersArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSortInput>>>;
};


type Query_allStrapiComponentBaseGalerySliderArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput>>>;
};


type Query_allStrapiComponentBaseHeroArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_HEROFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_HEROSortInput>>>;
};


type Query_allStrapiComponentBasePartnersSliderArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERSortInput>>>;
};


type Query_allStrapiComponentBaseScheduleArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_SCHEDULEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_SCHEDULESortInput>>>;
};


type Query_allStrapiComponentBaseSignupGridArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_SIGNUP_GRIDFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_SIGNUP_GRIDSortInput>>>;
};


type Query_allStrapiComponentBaseSpeakersGridArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput>>>;
};


type Query_allStrapiComponentBaseVideoArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_VIDEOSortInput>>>;
};


type Query_allStrapiComponentBaseVideoSectionArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_VIDEO_SECTIONFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_VIDEO_SECTIONSortInput>>>;
};


type Query_allStrapiComponentBaseVideosListArgs = {
  filter: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOS_LISTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__COMPONENT_BASE_VIDEOS_LISTSortInput>>>;
};


type Query_allStrapiEventArgs = {
  filter: InputMaybe<STRAPI_EVENTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_EVENTSortInput>>>;
};


type Query_allStrapiHomepageArgs = {
  filter: InputMaybe<STRAPI_HOMEPAGEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_HOMEPAGESortInput>>>;
};


type Query_allStrapiLectureArgs = {
  filter: InputMaybe<STRAPI_LECTUREFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_LECTURESortInput>>>;
};


type Query_allStrapiMediaArgs = {
  filter: InputMaybe<STRAPI__MEDIAFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI__MEDIASortInput>>>;
};


type Query_allStrapiPartnerArgs = {
  filter: InputMaybe<STRAPI_PARTNERFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_PARTNERSortInput>>>;
};


type Query_allStrapiPrivacypolicyArgs = {
  filter: InputMaybe<STRAPI_PRIVACYPOLICYFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_PRIVACYPOLICYSortInput>>>;
};


type Query_allStrapiPrivacypolicyTextTextnodeArgs = {
  filter: InputMaybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODESortInput>>>;
};


type Query_allStrapiRulesArgs = {
  filter: InputMaybe<STRAPI_RULESFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_RULESSortInput>>>;
};


type Query_allStrapiRulesTextTextnodeArgs = {
  filter: InputMaybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_RULES_TEXT_TEXTNODESortInput>>>;
};


type Query_allStrapiSignupSectionArgs = {
  filter: InputMaybe<STRAPI_SIGNUP_SECTIONFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_SIGNUP_SECTIONSortInput>>>;
};


type Query_allStrapiSpeakerArgs = {
  filter: InputMaybe<STRAPI_SPEAKERFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_SPEAKERSortInput>>>;
};


type Query_allStrapiVideolistArgs = {
  filter: InputMaybe<STRAPI_VIDEOLISTFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_VIDEOLISTSortInput>>>;
};


type Query_allStrapiVideospageArgs = {
  filter: InputMaybe<STRAPI_VIDEOSPAGEFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<STRAPI_VIDEOSPAGESortInput>>>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiAchievementArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  index: InputMaybe<IntQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  number: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiComponentBaseAgendaArgs = {
  children: InputMaybe<NodeFilterListInput>;
  dateOfLectures: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  lectures: InputMaybe<STRAPI_LECTUREFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  speakers: InputMaybe<STRAPI_SPEAKERFilterListInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiComponentBaseFestivalInNumbersArgs = {
  achievements: InputMaybe<STRAPI_ACHIEVEMENTFilterListInput>;
  backgroundImages: InputMaybe<STRAPI__MEDIAFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentBaseGalerySliderArgs = {
  buttonText: InputMaybe<StringQueryOperatorInput>;
  buttonUrl: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<STRAPI__MEDIAFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiComponentBaseHeroArgs = {
  backgroundColor: InputMaybe<StringQueryOperatorInput>;
  backgroundImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  backgroundVideo: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
  buttonText: InputMaybe<StringQueryOperatorInput>;
  buttonUrl: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  footer: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  subtitlePos: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  videoId: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiComponentBasePartnersSliderArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  partners: InputMaybe<STRAPI_PARTNERFilterListInput>;
  sectionTitle: InputMaybe<StringQueryOperatorInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentBaseScheduleArgs = {
  children: InputMaybe<NodeFilterListInput>;
  events: InputMaybe<STRAPI_EVENTFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  scheduleTitle: InputMaybe<StringQueryOperatorInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentBaseSignupGridArgs = {
  bannerImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  signupImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  signup_sections: InputMaybe<STRAPI_SIGNUP_SECTIONFilterListInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentBaseSpeakersGridArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sectionSubtitle: InputMaybe<StringQueryOperatorInput>;
  sectionTitle: InputMaybe<StringQueryOperatorInput>;
  speakers: InputMaybe<STRAPI_SPEAKERFilterListInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiComponentBaseVideoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mp4: InputMaybe<STRAPI__MEDIAFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  webm: InputMaybe<STRAPI__MEDIAFilterInput>;
};


type Query_strapiComponentBaseVideoSectionArgs = {
  article: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  footer: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  videoId: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiComponentBaseVideosListArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_component: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  video_lists: InputMaybe<STRAPI_VIDEOLISTFilterListInput>;
};


type Query_strapiEventArgs = {
  backgroundColor: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<StringQueryOperatorInput>;
  displayTitleOnDesktop: InputMaybe<BooleanQueryOperatorInput>;
  endHour: InputMaybe<StringQueryOperatorInput>;
  eventDescription: InputMaybe<StringQueryOperatorInput>;
  eventHero: InputMaybe<STRAPI_EVENTEventHeroFilterInput>;
  eventPicture: InputMaybe<STRAPI_EVENTEventPictureFilterInput>;
  eventSlug: InputMaybe<StringQueryOperatorInput>;
  eventSubtitle: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_EVENTLocalizationsFilterInput>;
  logo: InputMaybe<STRAPI_EVENTLogoFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  startHour: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiHomepageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiLectureArgs = {
  backgroundColor: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_LECTURELocalizationsFilterInput>;
  logo: InputMaybe<STRAPI_LECTURELogoFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  room: InputMaybe<IntQueryOperatorInput>;
  startHour: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiMediaArgs = {
  alternativeText: InputMaybe<StringQueryOperatorInput>;
  caption: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  formats: InputMaybe<STRAPI__MEDIAFormatsFilterInput>;
  hash: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  mime: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


type Query_strapiPartnerArgs = {
  Logo: InputMaybe<STRAPI_PARTNERLogoFilterInput>;
  Name: InputMaybe<StringQueryOperatorInput>;
  WebsiteURL: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  index: InputMaybe<IntQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  whiteLogo: InputMaybe<STRAPI_PARTNERWhiteLogoFilterInput>;
};


type Query_strapiPrivacypolicyArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  text: InputMaybe<STRAPI_PRIVACYPOLICYTextFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiPrivacypolicyTextTextnodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiRulesArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_RULESLocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  text: InputMaybe<STRAPI_RULESTextFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiRulesTextTextnodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiSignupSectionArgs = {
  buttonText: InputMaybe<StringQueryOperatorInput>;
  buttonUrl: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiSpeakerArgs = {
  backgroundColor: InputMaybe<StringQueryOperatorInput>;
  bio: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  firstName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  index: InputMaybe<IntQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lastName: InputMaybe<StringQueryOperatorInput>;
  linkedinUrl: InputMaybe<StringQueryOperatorInput>;
  linktrUrl: InputMaybe<StringQueryOperatorInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_SPEAKERLocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  photo: InputMaybe<STRAPI_SPEAKERPhotoFilterInput>;
  position: InputMaybe<StringQueryOperatorInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  twitterUrl: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_strapiVideolistArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_VIDEOLISTLocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  videoUrl: InputMaybe<StringQueryOperatorInput>;
};


type Query_strapiVideospageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  footerSubtitle: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  locale: InputMaybe<StringQueryOperatorInput>;
  localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  strapi_id: InputMaybe<IntQueryOperatorInput>;
  subtitle: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_ACHIEVEMENT = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly index: Maybe<Scalars['Int']>;
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_ACHIEVEMENTLocalizations>;
  readonly name: Maybe<Scalars['String']>;
  readonly number: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_ACHIEVEMENT_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENT_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_ACHIEVEMENTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ACHIEVEMENTEdge>;
  readonly group: ReadonlyArray<STRAPI_ACHIEVEMENTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ACHIEVEMENT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ACHIEVEMENTConnection_distinctArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTConnection_groupArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ACHIEVEMENTConnection_maxArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTConnection_minArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTConnection_sumArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};

type STRAPI_ACHIEVEMENTEdge = {
  readonly next: Maybe<STRAPI_ACHIEVEMENT>;
  readonly node: STRAPI_ACHIEVEMENT;
  readonly previous: Maybe<STRAPI_ACHIEVEMENT>;
};

type STRAPI_ACHIEVEMENTFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly index: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly number: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_ACHIEVEMENTFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly number: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_ACHIEVEMENTFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_ACHIEVEMENTFilterInput>;
};

type STRAPI_ACHIEVEMENTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_ACHIEVEMENTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_ACHIEVEMENTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_ACHIEVEMENT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_ACHIEVEMENTGroupConnection_distinctArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTGroupConnection_groupArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_ACHIEVEMENTGroupConnection_maxArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTGroupConnection_minArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};


type STRAPI_ACHIEVEMENTGroupConnection_sumArgs = {
  field: STRAPI_ACHIEVEMENTFieldSelector;
};

type STRAPI_ACHIEVEMENTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_ACHIEVEMENTLocalizationsData>>>;
};

type STRAPI_ACHIEVEMENTLocalizationsData = {
  readonly attributes: Maybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly number: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_ACHIEVEMENTLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_ACHIEVEMENTLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly index: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly number: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly number: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly index: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly number: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataFilterInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_ACHIEVEMENTLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataFieldSelector>;
};

type STRAPI_ACHIEVEMENTLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataFilterListInput>;
};

type STRAPI_ACHIEVEMENTLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsDataSortInput>;
};

type STRAPI_ACHIEVEMENTSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly index: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_ACHIEVEMENTLocalizationsSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly number: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENT = Node & {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['String']>;
  readonly displayTitleOnDesktop: Maybe<Scalars['Boolean']>;
  readonly endHour: Maybe<Scalars['String']>;
  readonly eventDescription: Maybe<Scalars['String']>;
  readonly eventHero: Maybe<STRAPI_EVENTEventHero>;
  readonly eventPicture: Maybe<STRAPI_EVENTEventPicture>;
  readonly eventSlug: Maybe<Scalars['String']>;
  readonly eventSubtitle: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly link: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_EVENTLocalizations>;
  readonly logo: Maybe<STRAPI_EVENTLogo>;
  readonly parent: Maybe<Node>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_EVENT_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_EVENT_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_EVENTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_EVENTEdge>;
  readonly group: ReadonlyArray<STRAPI_EVENTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_EVENT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_EVENTConnection_distinctArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTConnection_groupArgs = {
  field: STRAPI_EVENTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_EVENTConnection_maxArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTConnection_minArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTConnection_sumArgs = {
  field: STRAPI_EVENTFieldSelector;
};

type STRAPI_EVENTEdge = {
  readonly next: Maybe<STRAPI_EVENT>;
  readonly node: STRAPI_EVENT;
  readonly previous: Maybe<STRAPI_EVENT>;
};

type STRAPI_EVENTEventHero = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_EVENTEventHeroFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_EVENTEventHero_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_EVENTEventHero_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_EVENTEventHeroFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTEventHeroFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventHeroFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_EVENTEventHeroFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventHeroFormats = {
  readonly large: Maybe<STRAPI_EVENTEventHeroFormatsLarge>;
  readonly medium: Maybe<STRAPI_EVENTEventHeroFormatsMedium>;
  readonly small: Maybe<STRAPI_EVENTEventHeroFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_EVENTEventHeroFormatsThumbnail>;
};

type STRAPI_EVENTEventHeroFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_EVENTEventHeroFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_EVENTEventHeroFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_EVENTEventHeroFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventHeroFormatsThumbnailFieldSelector>;
};

type STRAPI_EVENTEventHeroFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_EVENTEventHeroFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_EVENTEventHeroFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_EVENTEventHeroFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventHeroFormatsThumbnailFilterInput>;
};

type STRAPI_EVENTEventHeroFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventHeroFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventHeroFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventHeroFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventHeroFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventHeroFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventHeroFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventHeroFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventHeroFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventHeroFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventHeroFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventHeroFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventHeroFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_EVENTEventHeroFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_EVENTEventHeroFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_EVENTEventHeroFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventHeroFormatsThumbnailSortInput>;
};

type STRAPI_EVENTEventHeroFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventHeroFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventHeroFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventHeroFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventHeroSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTEventHeroFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventPicture = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_EVENTEventPictureFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_EVENTEventPicture_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_EVENTEventPicture_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_EVENTEventPictureFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTEventPictureFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventPictureFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_EVENTEventPictureFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventPictureFormats = {
  readonly large: Maybe<STRAPI_EVENTEventPictureFormatsLarge>;
  readonly medium: Maybe<STRAPI_EVENTEventPictureFormatsMedium>;
  readonly small: Maybe<STRAPI_EVENTEventPictureFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_EVENTEventPictureFormatsThumbnail>;
};

type STRAPI_EVENTEventPictureFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_EVENTEventPictureFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_EVENTEventPictureFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_EVENTEventPictureFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventPictureFormatsThumbnailFieldSelector>;
};

type STRAPI_EVENTEventPictureFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_EVENTEventPictureFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_EVENTEventPictureFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_EVENTEventPictureFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventPictureFormatsThumbnailFilterInput>;
};

type STRAPI_EVENTEventPictureFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventPictureFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventPictureFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventPictureFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventPictureFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventPictureFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventPictureFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventPictureFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventPictureFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventPictureFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventPictureFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventPictureFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventPictureFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_EVENTEventPictureFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_EVENTEventPictureFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_EVENTEventPictureFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTEventPictureFormatsThumbnailSortInput>;
};

type STRAPI_EVENTEventPictureFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTEventPictureFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTEventPictureFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTEventPictureFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTEventPictureSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTEventPictureFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly displayTitleOnDesktop: InputMaybe<FieldSelectorEnum>;
  readonly endHour: InputMaybe<FieldSelectorEnum>;
  readonly eventDescription: InputMaybe<FieldSelectorEnum>;
  readonly eventHero: InputMaybe<STRAPI_EVENTEventHeroFieldSelector>;
  readonly eventPicture: InputMaybe<STRAPI_EVENTEventPictureFieldSelector>;
  readonly eventSlug: InputMaybe<FieldSelectorEnum>;
  readonly eventSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_EVENTLocalizationsFieldSelector>;
  readonly logo: InputMaybe<STRAPI_EVENTLogoFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly startHour: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<StringQueryOperatorInput>;
  readonly displayTitleOnDesktop: InputMaybe<BooleanQueryOperatorInput>;
  readonly endHour: InputMaybe<StringQueryOperatorInput>;
  readonly eventDescription: InputMaybe<StringQueryOperatorInput>;
  readonly eventHero: InputMaybe<STRAPI_EVENTEventHeroFilterInput>;
  readonly eventPicture: InputMaybe<STRAPI_EVENTEventPictureFilterInput>;
  readonly eventSlug: InputMaybe<StringQueryOperatorInput>;
  readonly eventSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_EVENTLocalizationsFilterInput>;
  readonly logo: InputMaybe<STRAPI_EVENTLogoFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly startHour: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_EVENTFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_EVENTFilterInput>;
};

type STRAPI_EVENTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_EVENTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_EVENTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_EVENT>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_EVENTGroupConnection_distinctArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTGroupConnection_groupArgs = {
  field: STRAPI_EVENTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_EVENTGroupConnection_maxArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTGroupConnection_minArgs = {
  field: STRAPI_EVENTFieldSelector;
};


type STRAPI_EVENTGroupConnection_sumArgs = {
  field: STRAPI_EVENTFieldSelector;
};

type STRAPI_EVENTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_EVENTLocalizationsData>>>;
};

type STRAPI_EVENTLocalizationsData = {
  readonly attributes: Maybe<STRAPI_EVENTLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTLocalizationsDataAttributes = {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['String']>;
  readonly displayTitleOnDesktop: Maybe<Scalars['Boolean']>;
  readonly endHour: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_EVENTLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_EVENTLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_EVENTLocalizationsDataAttributesFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly displayTitleOnDesktop: InputMaybe<FieldSelectorEnum>;
  readonly endHour: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly startHour: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLocalizationsDataAttributesFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<StringQueryOperatorInput>;
  readonly displayTitleOnDesktop: InputMaybe<BooleanQueryOperatorInput>;
  readonly endHour: InputMaybe<StringQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly startHour: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_EVENTLocalizationsDataAttributesSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly displayTitleOnDesktop: InputMaybe<SortOrderEnum>;
  readonly endHour: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly startHour: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_EVENTLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_EVENTLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_EVENTLocalizationsDataFilterInput>;
};

type STRAPI_EVENTLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_EVENTLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_EVENTLocalizationsDataFieldSelector>;
};

type STRAPI_EVENTLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_EVENTLocalizationsDataFilterListInput>;
};

type STRAPI_EVENTLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_EVENTLocalizationsDataSortInput>;
};

type STRAPI_EVENTLogo = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_EVENTLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_EVENTLogo_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_EVENTLogo_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_EVENTLogoFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTLogoFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLogoFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_EVENTLogoFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormats = {
  readonly large: Maybe<STRAPI_EVENTLogoFormatsLarge>;
  readonly medium: Maybe<STRAPI_EVENTLogoFormatsMedium>;
  readonly small: Maybe<STRAPI_EVENTLogoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_EVENTLogoFormatsThumbnail>;
};

type STRAPI_EVENTLogoFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_EVENTLogoFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_EVENTLogoFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_EVENTLogoFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTLogoFormatsThumbnailFieldSelector>;
};

type STRAPI_EVENTLogoFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_EVENTLogoFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_EVENTLogoFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_EVENTLogoFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTLogoFormatsThumbnailFilterInput>;
};

type STRAPI_EVENTLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTLogoFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLogoFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTLogoFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLogoFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTLogoFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLogoFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLogoFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_EVENTLogoFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_EVENTLogoFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_EVENTLogoFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_EVENTLogoFormatsThumbnailSortInput>;
};

type STRAPI_EVENTLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_EVENTLogoFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_EVENTLogoFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_EVENTLogoFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTLogoSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_EVENTLogoFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_EVENTSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly displayTitleOnDesktop: InputMaybe<SortOrderEnum>;
  readonly endHour: InputMaybe<SortOrderEnum>;
  readonly eventDescription: InputMaybe<SortOrderEnum>;
  readonly eventHero: InputMaybe<STRAPI_EVENTEventHeroSortInput>;
  readonly eventPicture: InputMaybe<STRAPI_EVENTEventPictureSortInput>;
  readonly eventSlug: InputMaybe<SortOrderEnum>;
  readonly eventSubtitle: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_EVENTLocalizationsSortInput>;
  readonly logo: InputMaybe<STRAPI_EVENTLogoSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly startHour: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly homepage: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_AGENDASTRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSTRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SIGNUP_GRIDSTRAPI__COMPONENT_BASE_SPEAKERS_GRIDSTRAPI__COMPONENT_BASE_VIDEO_SECTIONUnion>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_HOMEPAGELocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_HOMEPAGE_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_HOMEPAGE_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_HOMEPAGEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_HOMEPAGEConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_groupArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_HOMEPAGEConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};

type STRAPI_HOMEPAGEEdge = {
  readonly next: Maybe<STRAPI_HOMEPAGE>;
  readonly node: STRAPI_HOMEPAGE;
  readonly previous: Maybe<STRAPI_HOMEPAGE>;
};

type STRAPI_HOMEPAGEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_HOMEPAGEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_HOMEPAGEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_HOMEPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_HOMEPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_HOMEPAGEGroupConnection_distinctArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_groupArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_HOMEPAGEGroupConnection_maxArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_minArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};


type STRAPI_HOMEPAGEGroupConnection_sumArgs = {
  field: STRAPI_HOMEPAGEFieldSelector;
};

type STRAPI_HOMEPAGELocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_HOMEPAGELocalizationsData>>>;
};

type STRAPI_HOMEPAGELocalizationsData = {
  readonly attributes: Maybe<STRAPI_HOMEPAGELocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly homepage: Maybe<ReadonlyArray<Maybe<STRAPI_HOMEPAGELocalizationsDataAttributesHomepage>>>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizations>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_HOMEPAGELocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_HOMEPAGELocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly homepage: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly homepage: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFilterListInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesHomepage = {
  readonly _xcomponent: Maybe<Scalars['String']>;
  readonly article: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly footer: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly scheduleTitle: Maybe<Scalars['String']>;
  readonly sectionSubtitle: Maybe<Scalars['String']>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly subtitlePos: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly videoId: Maybe<Scalars['String']>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFieldSelector = {
  readonly _xcomponent: InputMaybe<FieldSelectorEnum>;
  readonly article: InputMaybe<FieldSelectorEnum>;
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly footer: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly scheduleTitle: InputMaybe<FieldSelectorEnum>;
  readonly sectionSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly sectionTitle: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly subtitlePos: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly videoId: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFilterInput = {
  readonly _xcomponent: InputMaybe<StringQueryOperatorInput>;
  readonly article: InputMaybe<StringQueryOperatorInput>;
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly footer: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly scheduleTitle: InputMaybe<StringQueryOperatorInput>;
  readonly sectionSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly sectionTitle: InputMaybe<StringQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly subtitlePos: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly videoId: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesHomepageFilterInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesHomepageSortInput = {
  readonly _xcomponent: InputMaybe<SortOrderEnum>;
  readonly article: InputMaybe<SortOrderEnum>;
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly footer: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly scheduleTitle: InputMaybe<SortOrderEnum>;
  readonly sectionSubtitle: InputMaybe<SortOrderEnum>;
  readonly sectionTitle: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly subtitlePos: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly videoId: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsData>>>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsData = {
  readonly attributes: Maybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFilterInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFieldSelector>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataFilterListInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsDataSortInput>;
};

type STRAPI_HOMEPAGELocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly homepage: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesHomepageSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesLocalizationsSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_HOMEPAGELocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_HOMEPAGELocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_HOMEPAGELocalizationsDataFilterInput>;
};

type STRAPI_HOMEPAGELocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_HOMEPAGELocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_HOMEPAGELocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataFieldSelector>;
};

type STRAPI_HOMEPAGELocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataFilterListInput>;
};

type STRAPI_HOMEPAGELocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_HOMEPAGELocalizationsDataSortInput>;
};

type STRAPI_HOMEPAGESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_HOMEPAGELocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_LECTURE = Node & {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_LECTURELocalizations>;
  readonly logo: Maybe<STRAPI_LECTURELogo>;
  readonly parent: Maybe<Node>;
  readonly room: Maybe<Scalars['Int']>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_LECTURE_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_LECTURE_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_LECTUREConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_LECTUREEdge>;
  readonly group: ReadonlyArray<STRAPI_LECTUREGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_LECTURE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_LECTUREConnection_distinctArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREConnection_groupArgs = {
  field: STRAPI_LECTUREFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_LECTUREConnection_maxArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREConnection_minArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREConnection_sumArgs = {
  field: STRAPI_LECTUREFieldSelector;
};

type STRAPI_LECTUREEdge = {
  readonly next: Maybe<STRAPI_LECTURE>;
  readonly node: STRAPI_LECTURE;
  readonly previous: Maybe<STRAPI_LECTURE>;
};

type STRAPI_LECTUREFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_LECTURELocalizationsFieldSelector>;
  readonly logo: InputMaybe<STRAPI_LECTURELogoFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly room: InputMaybe<FieldSelectorEnum>;
  readonly startHour: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_LECTUREFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_LECTURELocalizationsFilterInput>;
  readonly logo: InputMaybe<STRAPI_LECTURELogoFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly room: InputMaybe<IntQueryOperatorInput>;
  readonly startHour: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_LECTUREFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_LECTUREFilterInput>;
};

type STRAPI_LECTUREGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_LECTUREEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_LECTUREGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_LECTURE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_LECTUREGroupConnection_distinctArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREGroupConnection_groupArgs = {
  field: STRAPI_LECTUREFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_LECTUREGroupConnection_maxArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREGroupConnection_minArgs = {
  field: STRAPI_LECTUREFieldSelector;
};


type STRAPI_LECTUREGroupConnection_sumArgs = {
  field: STRAPI_LECTUREFieldSelector;
};

type STRAPI_LECTURELocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_LECTURELocalizationsData>>>;
};

type STRAPI_LECTURELocalizationsData = {
  readonly attributes: Maybe<STRAPI_LECTURELocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_LECTURELocalizationsDataAttributes = {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly room: Maybe<Scalars['Int']>;
  readonly startHour: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_LECTURELocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_LECTURELocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_LECTURELocalizationsDataAttributesFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly room: InputMaybe<FieldSelectorEnum>;
  readonly startHour: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_LECTURELocalizationsDataAttributesFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly room: InputMaybe<IntQueryOperatorInput>;
  readonly startHour: InputMaybe<StringQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_LECTURELocalizationsDataAttributesSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly room: InputMaybe<SortOrderEnum>;
  readonly startHour: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_LECTURELocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_LECTURELocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_LECTURELocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_LECTURELocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_LECTURELocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_LECTURELocalizationsDataFilterInput>;
};

type STRAPI_LECTURELocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_LECTURELocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_LECTURELocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_LECTURELocalizationsDataFieldSelector>;
};

type STRAPI_LECTURELocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_LECTURELocalizationsDataFilterListInput>;
};

type STRAPI_LECTURELocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_LECTURELocalizationsDataSortInput>;
};

type STRAPI_LECTURELogo = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_LECTURELogo_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_LECTURELogo_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_LECTURELogoFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_LECTURELogoFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_LECTURELogoSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_LECTURESortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_LECTURELocalizationsSortInput>;
  readonly logo: InputMaybe<STRAPI_LECTURELogoSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly room: InputMaybe<SortOrderEnum>;
  readonly startHour: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNER = Node & {
  readonly Logo: Maybe<STRAPI_PARTNERLogo>;
  readonly Name: Maybe<Scalars['String']>;
  readonly WebsiteURL: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly index: Maybe<Scalars['Int']>;
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly whiteLogo: Maybe<STRAPI_PARTNERWhiteLogo>;
};


type STRAPI_PARTNER_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PARTNER_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PARTNERConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PARTNEREdge>;
  readonly group: ReadonlyArray<STRAPI_PARTNERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PARTNER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PARTNERConnection_distinctArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERConnection_groupArgs = {
  field: STRAPI_PARTNERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PARTNERConnection_maxArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERConnection_minArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERConnection_sumArgs = {
  field: STRAPI_PARTNERFieldSelector;
};

type STRAPI_PARTNEREdge = {
  readonly next: Maybe<STRAPI_PARTNER>;
  readonly node: STRAPI_PARTNER;
  readonly previous: Maybe<STRAPI_PARTNER>;
};

type STRAPI_PARTNERFieldSelector = {
  readonly Logo: InputMaybe<STRAPI_PARTNERLogoFieldSelector>;
  readonly Name: InputMaybe<FieldSelectorEnum>;
  readonly WebsiteURL: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly index: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly whiteLogo: InputMaybe<STRAPI_PARTNERWhiteLogoFieldSelector>;
};

type STRAPI_PARTNERFilterInput = {
  readonly Logo: InputMaybe<STRAPI_PARTNERLogoFilterInput>;
  readonly Name: InputMaybe<StringQueryOperatorInput>;
  readonly WebsiteURL: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly whiteLogo: InputMaybe<STRAPI_PARTNERWhiteLogoFilterInput>;
};

type STRAPI_PARTNERFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_PARTNERFilterInput>;
};

type STRAPI_PARTNERGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PARTNEREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_PARTNERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PARTNER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PARTNERGroupConnection_distinctArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERGroupConnection_groupArgs = {
  field: STRAPI_PARTNERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PARTNERGroupConnection_maxArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERGroupConnection_minArgs = {
  field: STRAPI_PARTNERFieldSelector;
};


type STRAPI_PARTNERGroupConnection_sumArgs = {
  field: STRAPI_PARTNERFieldSelector;
};

type STRAPI_PARTNERLogo = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_PARTNERLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_PARTNERLogo_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PARTNERLogo_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PARTNERLogoFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_PARTNERLogoFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERLogoFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_PARTNERLogoFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormats = {
  readonly large: Maybe<STRAPI_PARTNERLogoFormatsLarge>;
  readonly medium: Maybe<STRAPI_PARTNERLogoFormatsMedium>;
  readonly small: Maybe<STRAPI_PARTNERLogoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_PARTNERLogoFormatsThumbnail>;
};

type STRAPI_PARTNERLogoFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_PARTNERLogoFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_PARTNERLogoFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_PARTNERLogoFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERLogoFormatsThumbnailFieldSelector>;
};

type STRAPI_PARTNERLogoFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_PARTNERLogoFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_PARTNERLogoFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_PARTNERLogoFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERLogoFormatsThumbnailFilterInput>;
};

type STRAPI_PARTNERLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERLogoFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERLogoFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERLogoFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERLogoFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_PARTNERLogoFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_PARTNERLogoFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_PARTNERLogoFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERLogoFormatsThumbnailSortInput>;
};

type STRAPI_PARTNERLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERLogoFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERLogoFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERLogoFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERLogoSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_PARTNERLogoFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERSortInput = {
  readonly Logo: InputMaybe<STRAPI_PARTNERLogoSortInput>;
  readonly Name: InputMaybe<SortOrderEnum>;
  readonly WebsiteURL: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly index: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly whiteLogo: InputMaybe<STRAPI_PARTNERWhiteLogoSortInput>;
};

type STRAPI_PARTNERWhiteLogo = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_PARTNERWhiteLogoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_PARTNERWhiteLogo_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PARTNERWhiteLogo_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PARTNERWhiteLogoFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERWhiteLogoFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormats = {
  readonly large: Maybe<STRAPI_PARTNERWhiteLogoFormatsLarge>;
  readonly medium: Maybe<STRAPI_PARTNERWhiteLogoFormatsMedium>;
  readonly small: Maybe<STRAPI_PARTNERWhiteLogoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_PARTNERWhiteLogoFormatsThumbnail>;
};

type STRAPI_PARTNERWhiteLogoFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailFieldSelector>;
};

type STRAPI_PARTNERWhiteLogoFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailFilterInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsThumbnailSortInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PARTNERWhiteLogoFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PARTNERWhiteLogoSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_PARTNERWhiteLogoFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICY = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_PRIVACYPOLICYLocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly text: Maybe<STRAPI_PRIVACYPOLICYText>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_PRIVACYPOLICY_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICY_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICYConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICYEdge>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICYGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PRIVACYPOLICYConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYConnection_groupArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PRIVACYPOLICYConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};

type STRAPI_PRIVACYPOLICYEdge = {
  readonly next: Maybe<STRAPI_PRIVACYPOLICY>;
  readonly node: STRAPI_PRIVACYPOLICY;
  readonly previous: Maybe<STRAPI_PRIVACYPOLICY>;
};

type STRAPI_PRIVACYPOLICYFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly text: InputMaybe<STRAPI_PRIVACYPOLICYTextFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICYFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly text: InputMaybe<STRAPI_PRIVACYPOLICYTextFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICYGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICYEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICYGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PRIVACYPOLICYGroupConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYGroupConnection_groupArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PRIVACYPOLICYGroupConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYGroupConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};


type STRAPI_PRIVACYPOLICYGroupConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICYFieldSelector;
};

type STRAPI_PRIVACYPOLICYLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_PRIVACYPOLICYLocalizationsData>>>;
};

type STRAPI_PRIVACYPOLICYLocalizationsData = {
  readonly attributes: Maybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizations>;
  readonly text: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_PRIVACYPOLICYLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICYLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsFieldSelector>;
  readonly text: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsFilterInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsData>>>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsData = {
  readonly attributes: Maybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly text: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly text: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFilterInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFieldSelector>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataFilterListInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsDataSortInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesLocalizationsSortInput>;
  readonly text: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataFilterInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICYLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataFieldSelector>;
};

type STRAPI_PRIVACYPOLICYLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataFilterListInput>;
};

type STRAPI_PRIVACYPOLICYLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsDataSortInput>;
};

type STRAPI_PRIVACYPOLICYSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_PRIVACYPOLICYLocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly text: InputMaybe<STRAPI_PRIVACYPOLICYTextSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_PRIVACYPOLICYText = {
  readonly data: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
};

type STRAPI_PRIVACYPOLICYTextFieldSelector = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector>;
};

type STRAPI_PRIVACYPOLICYTextFilterInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_PRIVACYPOLICYTextSortInput = {
  readonly data: InputMaybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODESortInput>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly text: Maybe<Scalars['String']>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_groupArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly node: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE;
  readonly previous: Maybe<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly text: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_PRIVACYPOLICY_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_groupArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_PRIVACYPOLICY_TEXT_TEXTNODEFieldSelector;
};

type STRAPI_PRIVACYPOLICY_TEXT_TEXTNODESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly text: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULES = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_RULESLocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly text: Maybe<STRAPI_RULESText>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_RULES_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_RULES_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_RULESConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_RULESEdge>;
  readonly group: ReadonlyArray<STRAPI_RULESGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_RULES>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_RULESConnection_distinctArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESConnection_groupArgs = {
  field: STRAPI_RULESFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_RULESConnection_maxArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESConnection_minArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESConnection_sumArgs = {
  field: STRAPI_RULESFieldSelector;
};

type STRAPI_RULESEdge = {
  readonly next: Maybe<STRAPI_RULES>;
  readonly node: STRAPI_RULES;
  readonly previous: Maybe<STRAPI_RULES>;
};

type STRAPI_RULESFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly text: InputMaybe<STRAPI_RULESTextFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULESFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly text: InputMaybe<STRAPI_RULESTextFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_RULESGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_RULESEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_RULESGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_RULES>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_RULESGroupConnection_distinctArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESGroupConnection_groupArgs = {
  field: STRAPI_RULESFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_RULESGroupConnection_maxArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESGroupConnection_minArgs = {
  field: STRAPI_RULESFieldSelector;
};


type STRAPI_RULESGroupConnection_sumArgs = {
  field: STRAPI_RULESFieldSelector;
};

type STRAPI_RULESLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_RULESLocalizationsData>>>;
};

type STRAPI_RULESLocalizationsData = {
  readonly attributes: Maybe<STRAPI_RULESLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_RULESLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_RULESLocalizationsDataAttributesLocalizations>;
  readonly text: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_RULESLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_RULESLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_RULESLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsFieldSelector>;
  readonly text: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULESLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsFilterInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsData>>>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsData = {
  readonly attributes: Maybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly text: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly text: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFilterInput>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFieldSelector>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataFilterListInput>;
};

type STRAPI_RULESLocalizationsDataAttributesLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsDataSortInput>;
};

type STRAPI_RULESLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsDataAttributesLocalizationsSortInput>;
  readonly text: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULESLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULESLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_RULESLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_RULESLocalizationsDataFilterInput>;
};

type STRAPI_RULESLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_RULESLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULESLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataFieldSelector>;
};

type STRAPI_RULESLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataFilterListInput>;
};

type STRAPI_RULESLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_RULESLocalizationsDataSortInput>;
};

type STRAPI_RULESSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_RULESLocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly text: InputMaybe<STRAPI_RULESTextSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_RULESText = {
  readonly data: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
};

type STRAPI_RULESTextFieldSelector = {
  readonly data: InputMaybe<STRAPI_RULES_TEXT_TEXTNODEFieldSelector>;
};

type STRAPI_RULESTextFilterInput = {
  readonly data: InputMaybe<STRAPI_RULES_TEXT_TEXTNODEFilterInput>;
};

type STRAPI_RULESTextSortInput = {
  readonly data: InputMaybe<STRAPI_RULES_TEXT_TEXTNODESortInput>;
};

type STRAPI_RULES_TEXT_TEXTNODE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly text: Maybe<Scalars['String']>;
};

type STRAPI_RULES_TEXT_TEXTNODEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEEdge>;
  readonly group: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_distinctArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_groupArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_maxArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_minArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEConnection_sumArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};

type STRAPI_RULES_TEXT_TEXTNODEEdge = {
  readonly next: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly node: STRAPI_RULES_TEXT_TEXTNODE;
  readonly previous: Maybe<STRAPI_RULES_TEXT_TEXTNODE>;
};

type STRAPI_RULES_TEXT_TEXTNODEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly text: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_RULES_TEXT_TEXTNODEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_RULES_TEXT_TEXTNODEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_RULES_TEXT_TEXTNODE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_distinctArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_groupArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_maxArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_minArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};


type STRAPI_RULES_TEXT_TEXTNODEGroupConnection_sumArgs = {
  field: STRAPI_RULES_TEXT_TEXTNODEFieldSelector;
};

type STRAPI_RULES_TEXT_TEXTNODESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly text: InputMaybe<SortOrderEnum>;
};

type STRAPI_SIGNUP_SECTION = Node & {
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly link: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_SIGNUP_SECTIONLocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_SIGNUP_SECTION_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTION_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_SIGNUP_SECTIONConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_SIGNUP_SECTIONEdge>;
  readonly group: ReadonlyArray<STRAPI_SIGNUP_SECTIONGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_SIGNUP_SECTION>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_SIGNUP_SECTIONConnection_distinctArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONConnection_groupArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_SIGNUP_SECTIONConnection_maxArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONConnection_minArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONConnection_sumArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};

type STRAPI_SIGNUP_SECTIONEdge = {
  readonly next: Maybe<STRAPI_SIGNUP_SECTION>;
  readonly node: STRAPI_SIGNUP_SECTION;
  readonly previous: Maybe<STRAPI_SIGNUP_SECTION>;
};

type STRAPI_SIGNUP_SECTIONFieldSelector = {
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SIGNUP_SECTIONFilterInput = {
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_SIGNUP_SECTIONFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_SIGNUP_SECTIONFilterInput>;
};

type STRAPI_SIGNUP_SECTIONGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_SIGNUP_SECTIONEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_SIGNUP_SECTIONGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_SIGNUP_SECTION>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_SIGNUP_SECTIONGroupConnection_distinctArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_groupArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_maxArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_minArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};


type STRAPI_SIGNUP_SECTIONGroupConnection_sumArgs = {
  field: STRAPI_SIGNUP_SECTIONFieldSelector;
};

type STRAPI_SIGNUP_SECTIONLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_SIGNUP_SECTIONLocalizationsData>>>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsData = {
  readonly attributes: Maybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes = {
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly link: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFieldSelector = {
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFilterInput = {
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesSortInput = {
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataFilterInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataFieldSelector>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataFilterListInput>;
};

type STRAPI_SIGNUP_SECTIONLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsDataSortInput>;
};

type STRAPI_SIGNUP_SECTIONSortInput = {
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_SIGNUP_SECTIONLocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKER = Node & {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly index: Maybe<Scalars['Int']>;
  readonly internal: Internal;
  readonly lastName: Maybe<Scalars['String']>;
  readonly linkedinUrl: Maybe<Scalars['String']>;
  readonly linktrUrl: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_SPEAKERLocalizations>;
  readonly parent: Maybe<Node>;
  readonly photo: Maybe<STRAPI_SPEAKERPhoto>;
  readonly position: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly twitterUrl: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_SPEAKER_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_SPEAKER_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_SPEAKERConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_SPEAKEREdge>;
  readonly group: ReadonlyArray<STRAPI_SPEAKERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_SPEAKERConnection_distinctArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERConnection_groupArgs = {
  field: STRAPI_SPEAKERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_SPEAKERConnection_maxArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERConnection_minArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERConnection_sumArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};

type STRAPI_SPEAKEREdge = {
  readonly next: Maybe<STRAPI_SPEAKER>;
  readonly node: STRAPI_SPEAKER;
  readonly previous: Maybe<STRAPI_SPEAKER>;
};

type STRAPI_SPEAKERFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly bio: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly firstName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly index: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly lastName: InputMaybe<FieldSelectorEnum>;
  readonly linkedinUrl: InputMaybe<FieldSelectorEnum>;
  readonly linktrUrl: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_SPEAKERLocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly photo: InputMaybe<STRAPI_SPEAKERPhotoFieldSelector>;
  readonly position: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly twitterUrl: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly bio: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly firstName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lastName: InputMaybe<StringQueryOperatorInput>;
  readonly linkedinUrl: InputMaybe<StringQueryOperatorInput>;
  readonly linktrUrl: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_SPEAKERLocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly photo: InputMaybe<STRAPI_SPEAKERPhotoFilterInput>;
  readonly position: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly twitterUrl: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_SPEAKERFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_SPEAKERFilterInput>;
};

type STRAPI_SPEAKERGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_SPEAKEREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_SPEAKERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_SPEAKER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_SPEAKERGroupConnection_distinctArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERGroupConnection_groupArgs = {
  field: STRAPI_SPEAKERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_SPEAKERGroupConnection_maxArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERGroupConnection_minArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};


type STRAPI_SPEAKERGroupConnection_sumArgs = {
  field: STRAPI_SPEAKERFieldSelector;
};

type STRAPI_SPEAKERLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKERLocalizationsData>>>;
};

type STRAPI_SPEAKERLocalizationsData = {
  readonly attributes: Maybe<STRAPI_SPEAKERLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERLocalizationsDataAttributes = {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly firstName: Maybe<Scalars['String']>;
  readonly index: Maybe<Scalars['Int']>;
  readonly lastName: Maybe<Scalars['String']>;
  readonly linkedinUrl: Maybe<Scalars['String']>;
  readonly linktrUrl: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly twitterUrl: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_SPEAKERLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_SPEAKERLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_SPEAKERLocalizationsDataAttributesFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly bio: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly firstName: InputMaybe<FieldSelectorEnum>;
  readonly index: InputMaybe<FieldSelectorEnum>;
  readonly lastName: InputMaybe<FieldSelectorEnum>;
  readonly linkedinUrl: InputMaybe<FieldSelectorEnum>;
  readonly linktrUrl: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly position: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly twitterUrl: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERLocalizationsDataAttributesFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly bio: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly firstName: InputMaybe<StringQueryOperatorInput>;
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly lastName: InputMaybe<StringQueryOperatorInput>;
  readonly linkedinUrl: InputMaybe<StringQueryOperatorInput>;
  readonly linktrUrl: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly position: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly twitterUrl: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_SPEAKERLocalizationsDataAttributesSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly bio: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly firstName: InputMaybe<SortOrderEnum>;
  readonly index: InputMaybe<SortOrderEnum>;
  readonly lastName: InputMaybe<SortOrderEnum>;
  readonly linkedinUrl: InputMaybe<SortOrderEnum>;
  readonly linktrUrl: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly position: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly twitterUrl: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_SPEAKERLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_SPEAKERLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_SPEAKERLocalizationsDataFilterInput>;
};

type STRAPI_SPEAKERLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_SPEAKERLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_SPEAKERLocalizationsDataFieldSelector>;
};

type STRAPI_SPEAKERLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_SPEAKERLocalizationsDataFilterListInput>;
};

type STRAPI_SPEAKERLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_SPEAKERLocalizationsDataSortInput>;
};

type STRAPI_SPEAKERPhoto = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_SPEAKERPhotoFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_SPEAKERPhoto_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_SPEAKERPhoto_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_SPEAKERPhotoFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_SPEAKERPhotoFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERPhotoFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_SPEAKERPhotoFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormats = {
  readonly large: Maybe<STRAPI_SPEAKERPhotoFormatsLarge>;
  readonly medium: Maybe<STRAPI_SPEAKERPhotoFormatsMedium>;
  readonly small: Maybe<STRAPI_SPEAKERPhotoFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_SPEAKERPhotoFormatsThumbnail>;
};

type STRAPI_SPEAKERPhotoFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_SPEAKERPhotoFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_SPEAKERPhotoFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_SPEAKERPhotoFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_SPEAKERPhotoFormatsThumbnailFieldSelector>;
};

type STRAPI_SPEAKERPhotoFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_SPEAKERPhotoFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_SPEAKERPhotoFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_SPEAKERPhotoFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_SPEAKERPhotoFormatsThumbnailFilterInput>;
};

type STRAPI_SPEAKERPhotoFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERPhotoFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERPhotoFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERPhotoFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERPhotoFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERPhotoFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERPhotoFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_SPEAKERPhotoFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_SPEAKERPhotoFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_SPEAKERPhotoFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_SPEAKERPhotoFormatsThumbnailSortInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_SPEAKERPhotoFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERPhotoSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_SPEAKERPhotoFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_SPEAKERSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly bio: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly firstName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly index: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly lastName: InputMaybe<SortOrderEnum>;
  readonly linkedinUrl: InputMaybe<SortOrderEnum>;
  readonly linktrUrl: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_SPEAKERLocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly photo: InputMaybe<STRAPI_SPEAKERPhotoSortInput>;
  readonly position: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly twitterUrl: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLIST = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_VIDEOLISTLocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnail>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly videoUrl: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLIST_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOLIST_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOLISTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_VIDEOLISTEdge>;
  readonly group: ReadonlyArray<STRAPI_VIDEOLISTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOLIST>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_VIDEOLISTConnection_distinctArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTConnection_groupArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_VIDEOLISTConnection_maxArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTConnection_minArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTConnection_sumArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};

type STRAPI_VIDEOLISTEdge = {
  readonly next: Maybe<STRAPI_VIDEOLIST>;
  readonly node: STRAPI_VIDEOLIST;
  readonly previous: Maybe<STRAPI_VIDEOLIST>;
};

type STRAPI_VIDEOLISTFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOLISTLocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly videoUrl: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_VIDEOLISTLocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly videoUrl: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_VIDEOLISTFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_VIDEOLISTFilterInput>;
};

type STRAPI_VIDEOLISTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_VIDEOLISTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOLISTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOLIST>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_VIDEOLISTGroupConnection_distinctArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTGroupConnection_groupArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_VIDEOLISTGroupConnection_maxArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTGroupConnection_minArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};


type STRAPI_VIDEOLISTGroupConnection_sumArgs = {
  field: STRAPI_VIDEOLISTFieldSelector;
};

type STRAPI_VIDEOLISTLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOLISTLocalizationsData>>>;
};

type STRAPI_VIDEOLISTLocalizationsData = {
  readonly attributes: Maybe<STRAPI_VIDEOLISTLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly videoUrl: Maybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly videoUrl: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly videoUrl: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly videoUrl: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataFilterInput>;
};

type STRAPI_VIDEOLISTLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataFieldSelector>;
};

type STRAPI_VIDEOLISTLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataFilterListInput>;
};

type STRAPI_VIDEOLISTLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_VIDEOLISTLocalizationsDataSortInput>;
};

type STRAPI_VIDEOLISTSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOLISTLocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly videoUrl: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTThumbnail = {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI_VIDEOLISTThumbnailFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI_VIDEOLISTThumbnail_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOLISTThumbnail_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOLISTThumbnailFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTThumbnailFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormats = {
  readonly large: Maybe<STRAPI_VIDEOLISTThumbnailFormatsLarge>;
  readonly medium: Maybe<STRAPI_VIDEOLISTThumbnailFormatsMedium>;
  readonly small: Maybe<STRAPI_VIDEOLISTThumbnailFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnail>;
};

type STRAPI_VIDEOLISTThumbnailFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnailFieldSelector>;
};

type STRAPI_VIDEOLISTThumbnailFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnailFilterInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsSortInput = {
  readonly large: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsThumbnailSortInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOLISTThumbnailFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOLISTThumbnailSortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI_VIDEOLISTThumbnailFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOSPAGE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly footerSubtitle: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_VIDEOSPAGELocalizations>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly videospage: Maybe<ReadonlyArray<Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_VIDEOS_LISTUnion>>>;
};


type STRAPI_VIDEOSPAGE_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOSPAGE_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOSPAGEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_VIDEOSPAGEEdge>;
  readonly group: ReadonlyArray<STRAPI_VIDEOSPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOSPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_VIDEOSPAGEConnection_distinctArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEConnection_groupArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_VIDEOSPAGEConnection_maxArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEConnection_minArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEConnection_sumArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};

type STRAPI_VIDEOSPAGEEdge = {
  readonly next: Maybe<STRAPI_VIDEOSPAGE>;
  readonly node: STRAPI_VIDEOSPAGE;
  readonly previous: Maybe<STRAPI_VIDEOSPAGE>;
};

type STRAPI_VIDEOSPAGEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly footerSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOSPAGEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly footerSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI_VIDEOSPAGEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI_VIDEOSPAGEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI_VIDEOSPAGE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI_VIDEOSPAGEGroupConnection_distinctArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEGroupConnection_groupArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI_VIDEOSPAGEGroupConnection_maxArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEGroupConnection_minArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};


type STRAPI_VIDEOSPAGEGroupConnection_sumArgs = {
  field: STRAPI_VIDEOSPAGEFieldSelector;
};

type STRAPI_VIDEOSPAGELocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOSPAGELocalizationsData>>>;
};

type STRAPI_VIDEOSPAGELocalizationsData = {
  readonly attributes: Maybe<STRAPI_VIDEOSPAGELocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly footerSubtitle: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizations>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly videospage: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospage>>>;
};


type STRAPI_VIDEOSPAGELocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOSPAGELocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly footerSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsFieldSelector>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly videospage: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFieldSelector>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly footerSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsFilterInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly videospage: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFilterListInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizations = {
  readonly data: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsData>>>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsData = {
  readonly attributes: Maybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributes>;
  readonly id: Maybe<Scalars['Int']>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributes = {
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly footerSubtitle: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributes_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributes_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesFieldSelector = {
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly footerSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly locale: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesFilterInput = {
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly footerSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly locale: InputMaybe<StringQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly footerSubtitle: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFilterInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFieldSelector>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataFilterListInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsDataSortInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesSortInput = {
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly footerSubtitle: InputMaybe<SortOrderEnum>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesLocalizationsSortInput>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly videospage: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageSortInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospage = {
  readonly _xcomponent: Maybe<Scalars['String']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly footer: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['Int']>;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly subtitlePos: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly videoId: Maybe<Scalars['String']>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFieldSelector = {
  readonly _xcomponent: InputMaybe<FieldSelectorEnum>;
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly footer: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly subtitlePos: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly videoId: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFilterInput = {
  readonly _xcomponent: InputMaybe<StringQueryOperatorInput>;
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly footer: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly subtitlePos: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly videoId: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageFilterInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataAttributesVideospageSortInput = {
  readonly _xcomponent: InputMaybe<SortOrderEnum>;
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly footer: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly subtitlePos: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly videoId: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataFieldSelector = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsDataFilterInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesFilterInput>;
  readonly id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataFilterInput>;
};

type STRAPI_VIDEOSPAGELocalizationsDataSortInput = {
  readonly attributes: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataAttributesSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
};

type STRAPI_VIDEOSPAGELocalizationsFieldSelector = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataFieldSelector>;
};

type STRAPI_VIDEOSPAGELocalizationsFilterInput = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataFilterListInput>;
};

type STRAPI_VIDEOSPAGELocalizationsSortInput = {
  readonly data: InputMaybe<STRAPI_VIDEOSPAGELocalizationsDataSortInput>;
};

type STRAPI_VIDEOSPAGESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly footerSubtitle: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly locale: InputMaybe<SortOrderEnum>;
  readonly localizations: InputMaybe<STRAPI_VIDEOSPAGELocalizationsSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_AGENDA = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly dateOfLectures: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly lectures: Maybe<ReadonlyArray<Maybe<STRAPI_LECTURE>>>;
  readonly parent: Maybe<Node>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER>>>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_AGENDAConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};

type STRAPI__COMPONENT_BASE_AGENDAEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly node: STRAPI__COMPONENT_BASE_AGENDA;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_AGENDA>;
};

type STRAPI__COMPONENT_BASE_AGENDAFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly dateOfLectures: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly lectures: InputMaybe<STRAPI_LECTUREFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_AGENDAFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly dateOfLectures: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly lectures: InputMaybe<STRAPI_LECTUREFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERFilterListInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_AGENDAGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_AGENDA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};


type STRAPI__COMPONENT_BASE_AGENDAGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_AGENDAFieldSelector;
};

type STRAPI__COMPONENT_BASE_AGENDASTRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSTRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_PARTNERS_SLIDERSTRAPI__COMPONENT_BASE_SCHEDULESTRAPI__COMPONENT_BASE_SIGNUP_GRIDSTRAPI__COMPONENT_BASE_SPEAKERS_GRIDSTRAPI__COMPONENT_BASE_VIDEO_SECTIONUnion = STRAPI__COMPONENT_BASE_AGENDA | STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS | STRAPI__COMPONENT_BASE_GALERY_SLIDER | STRAPI__COMPONENT_BASE_HERO | STRAPI__COMPONENT_BASE_PARTNERS_SLIDER | STRAPI__COMPONENT_BASE_SCHEDULE | STRAPI__COMPONENT_BASE_SIGNUP_GRID | STRAPI__COMPONENT_BASE_SPEAKERS_GRID | STRAPI__COMPONENT_BASE_VIDEO_SECTION;

type STRAPI__COMPONENT_BASE_AGENDASortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly dateOfLectures: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly lectures: InputMaybe<STRAPI_LECTURESortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS = Node & {
  readonly achievements: Maybe<ReadonlyArray<Maybe<STRAPI_ACHIEVEMENT>>>;
  readonly backgroundImages: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly node: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector = {
  readonly achievements: InputMaybe<STRAPI_ACHIEVEMENTFieldSelector>;
  readonly backgroundImages: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFilterInput = {
  readonly achievements: InputMaybe<STRAPI_ACHIEVEMENTFilterListInput>;
  readonly backgroundImages: InputMaybe<STRAPI__MEDIAFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};


type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSFieldSelector;
};

type STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERSSortInput = {
  readonly achievements: InputMaybe<STRAPI_ACHIEVEMENTSortInput>;
  readonly backgroundImages: InputMaybe<STRAPI__MEDIASortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDER = Node & {
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly images: Maybe<ReadonlyArray<Maybe<STRAPI__MEDIA>>>;
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly node: STRAPI__COMPONENT_BASE_GALERY_SLIDER;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector = {
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly images: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERFilterInput = {
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly images: InputMaybe<STRAPI__MEDIAFilterListInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDEREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_GALERY_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_GALERY_SLIDERGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_GALERY_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSTRAPI__COMPONENT_BASE_HEROSTRAPI__COMPONENT_BASE_VIDEOS_LISTUnion = STRAPI__COMPONENT_BASE_GALERY_SLIDER | STRAPI__COMPONENT_BASE_HERO | STRAPI__COMPONENT_BASE_VIDEOS_LIST;

type STRAPI__COMPONENT_BASE_GALERY_SLIDERSortInput = {
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly images: InputMaybe<STRAPI__MEDIASortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_HERO = Node & {
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly backgroundImage: Maybe<STRAPI__MEDIA>;
  readonly backgroundVideo: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonUrl: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly footer: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly subtitlePos: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly videoId: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_HEROConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_HERO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_HEROConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_HEROConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};

type STRAPI__COMPONENT_BASE_HEROEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_HERO>;
  readonly node: STRAPI__COMPONENT_BASE_HERO;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_HERO>;
};

type STRAPI__COMPONENT_BASE_HEROFieldSelector = {
  readonly backgroundColor: InputMaybe<FieldSelectorEnum>;
  readonly backgroundImage: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly backgroundVideo: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOFieldSelector>;
  readonly buttonText: InputMaybe<FieldSelectorEnum>;
  readonly buttonUrl: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly footer: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly subtitle: InputMaybe<FieldSelectorEnum>;
  readonly subtitlePos: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly videoId: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_HEROFilterInput = {
  readonly backgroundColor: InputMaybe<StringQueryOperatorInput>;
  readonly backgroundImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly backgroundVideo: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOFilterInput>;
  readonly buttonText: InputMaybe<StringQueryOperatorInput>;
  readonly buttonUrl: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly footer: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly subtitle: InputMaybe<StringQueryOperatorInput>;
  readonly subtitlePos: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly videoId: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_HEROGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_HEROGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_HERO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};


type STRAPI__COMPONENT_BASE_HEROGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_HEROFieldSelector;
};

type STRAPI__COMPONENT_BASE_HEROSortInput = {
  readonly backgroundColor: InputMaybe<SortOrderEnum>;
  readonly backgroundImage: InputMaybe<STRAPI__MEDIASortInput>;
  readonly backgroundVideo: InputMaybe<STRAPI__COMPONENT_BASE_VIDEOSortInput>;
  readonly buttonText: InputMaybe<SortOrderEnum>;
  readonly buttonUrl: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly footer: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly subtitle: InputMaybe<SortOrderEnum>;
  readonly subtitlePos: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly videoId: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDER = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly partners: Maybe<ReadonlyArray<Maybe<STRAPI_PARTNER>>>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly node: STRAPI__COMPONENT_BASE_PARTNERS_SLIDER;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly partners: InputMaybe<STRAPI_PARTNERFieldSelector>;
  readonly sectionTitle: InputMaybe<FieldSelectorEnum>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly partners: InputMaybe<STRAPI_PARTNERFilterListInput>;
  readonly sectionTitle: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDEREdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_PARTNERS_SLIDER>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};


type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_PARTNERS_SLIDERFieldSelector;
};

type STRAPI__COMPONENT_BASE_PARTNERS_SLIDERSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly partners: InputMaybe<STRAPI_PARTNERSortInput>;
  readonly sectionTitle: InputMaybe<SortOrderEnum>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_SCHEDULE = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly events: Maybe<ReadonlyArray<Maybe<STRAPI_EVENT>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly scheduleTitle: Maybe<Scalars['String']>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};

type STRAPI__COMPONENT_BASE_SCHEDULEEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly node: STRAPI__COMPONENT_BASE_SCHEDULE;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SCHEDULE>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly events: InputMaybe<STRAPI_EVENTFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly scheduleTitle: InputMaybe<FieldSelectorEnum>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly events: InputMaybe<STRAPI_EVENTFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly scheduleTitle: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SCHEDULE>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};


type STRAPI__COMPONENT_BASE_SCHEDULEGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SCHEDULEFieldSelector;
};

type STRAPI__COMPONENT_BASE_SCHEDULESortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly events: InputMaybe<STRAPI_EVENTSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly scheduleTitle: InputMaybe<SortOrderEnum>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRID = Node & {
  readonly bannerImage: Maybe<STRAPI__MEDIA>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly signupImage: Maybe<STRAPI__MEDIA>;
  readonly signup_sections: Maybe<ReadonlyArray<Maybe<STRAPI_SIGNUP_SECTION>>>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly node: STRAPI__COMPONENT_BASE_SIGNUP_GRID;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector = {
  readonly bannerImage: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly signupImage: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly signup_sections: InputMaybe<STRAPI_SIGNUP_SECTIONFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDFilterInput = {
  readonly bannerImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly signupImage: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly signup_sections: InputMaybe<STRAPI_SIGNUP_SECTIONFilterListInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SIGNUP_GRID>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SIGNUP_GRIDGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SIGNUP_GRIDFieldSelector;
};

type STRAPI__COMPONENT_BASE_SIGNUP_GRIDSortInput = {
  readonly bannerImage: InputMaybe<STRAPI__MEDIASortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly signupImage: InputMaybe<STRAPI__MEDIASortInput>;
  readonly signup_sections: InputMaybe<STRAPI_SIGNUP_SECTIONSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRID = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly sectionSubtitle: Maybe<Scalars['String']>;
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<STRAPI_SPEAKER>>>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly node: STRAPI__COMPONENT_BASE_SPEAKERS_GRID;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sectionSubtitle: InputMaybe<FieldSelectorEnum>;
  readonly sectionTitle: InputMaybe<FieldSelectorEnum>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sectionSubtitle: InputMaybe<StringQueryOperatorInput>;
  readonly sectionTitle: InputMaybe<StringQueryOperatorInput>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERFilterListInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_SPEAKERS_GRID>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};


type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_SPEAKERS_GRIDFieldSelector;
};

type STRAPI__COMPONENT_BASE_SPEAKERS_GRIDSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sectionSubtitle: InputMaybe<SortOrderEnum>;
  readonly sectionTitle: InputMaybe<SortOrderEnum>;
  readonly speakers: InputMaybe<STRAPI_SPEAKERSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
};

type STRAPI__COMPONENT_BASE_VIDEO = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mp4: Maybe<STRAPI__MEDIA>;
  readonly parent: Maybe<Node>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly webm: Maybe<STRAPI__MEDIA>;
};

type STRAPI__COMPONENT_BASE_VIDEOConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEOEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEO;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEO>;
};

type STRAPI__COMPONENT_BASE_VIDEOFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mp4: InputMaybe<STRAPI__MEDIAFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly webm: InputMaybe<STRAPI__MEDIAFieldSelector>;
};

type STRAPI__COMPONENT_BASE_VIDEOFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mp4: InputMaybe<STRAPI__MEDIAFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly webm: InputMaybe<STRAPI__MEDIAFilterInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LIST = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly video_lists: Maybe<ReadonlyArray<Maybe<STRAPI_VIDEOLIST>>>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEOS_LIST;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly video_lists: InputMaybe<STRAPI_VIDEOLISTFieldSelector>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly video_lists: InputMaybe<STRAPI_VIDEOLISTFilterListInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEOS_LIST>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEOS_LISTGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEOS_LISTFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEOS_LISTSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly video_lists: InputMaybe<STRAPI_VIDEOLISTSortInput>;
};

type STRAPI__COMPONENT_BASE_VIDEOSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mp4: InputMaybe<STRAPI__MEDIASortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly webm: InputMaybe<STRAPI__MEDIASortInput>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTION = Node & {
  readonly article: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly footer: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isSectionVisible: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly strapi_component: Maybe<Scalars['String']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly videoId: Maybe<Scalars['String']>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge = {
  readonly next: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly node: STRAPI__COMPONENT_BASE_VIDEO_SECTION;
  readonly previous: Maybe<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector = {
  readonly article: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly footer: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly isSectionVisible: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly strapi_component: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly videoId: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONFilterInput = {
  readonly article: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly footer: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isSectionVisible: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly strapi_component: InputMaybe<StringQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly videoId: InputMaybe<StringQueryOperatorInput>;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__COMPONENT_BASE_VIDEO_SECTION>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_distinctArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_groupArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_maxArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_minArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};


type STRAPI__COMPONENT_BASE_VIDEO_SECTIONGroupConnection_sumArgs = {
  field: STRAPI__COMPONENT_BASE_VIDEO_SECTIONFieldSelector;
};

type STRAPI__COMPONENT_BASE_VIDEO_SECTIONSortInput = {
  readonly article: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly footer: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly isSectionVisible: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly strapi_component: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly videoId: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIA = Node & {
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<STRAPI__MEDIAFormats>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly localFile: Maybe<File>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly size: Maybe<Scalars['Float']>;
  readonly strapi_id: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type STRAPI__MEDIA_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type STRAPI__MEDIA_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type STRAPI__MEDIAConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__MEDIAConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_groupArgs = {
  field: STRAPI__MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__MEDIAConnection_maxArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_minArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAConnection_sumArgs = {
  field: STRAPI__MEDIAFieldSelector;
};

type STRAPI__MEDIAEdge = {
  readonly next: Maybe<STRAPI__MEDIA>;
  readonly node: STRAPI__MEDIA;
  readonly previous: Maybe<STRAPI__MEDIA>;
};

type STRAPI__MEDIAFieldSelector = {
  readonly alternativeText: InputMaybe<FieldSelectorEnum>;
  readonly caption: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsFieldSelector>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly localFile: InputMaybe<FileFieldSelector>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly strapi_id: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFilterInput = {
  readonly alternativeText: InputMaybe<StringQueryOperatorInput>;
  readonly caption: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsFilterInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly strapi_id: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFilterListInput = {
  readonly elemMatch: InputMaybe<STRAPI__MEDIAFilterInput>;
};

type STRAPI__MEDIAFormats = {
  readonly large: Maybe<STRAPI__MEDIAFormatsLarge>;
  readonly medium: Maybe<STRAPI__MEDIAFormatsMedium>;
  readonly small: Maybe<STRAPI__MEDIAFormatsSmall>;
  readonly thumbnail: Maybe<STRAPI__MEDIAFormatsThumbnail>;
};

type STRAPI__MEDIAFormatsFieldSelector = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeFieldSelector>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumFieldSelector>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallFieldSelector>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailFieldSelector>;
};

type STRAPI__MEDIAFormatsFilterInput = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeFilterInput>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumFilterInput>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallFilterInput>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailFilterInput>;
};

type STRAPI__MEDIAFormatsLarge = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsLargeFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsLargeFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsLargeSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsMedium = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsMediumFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsMediumFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsMediumSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsSmall = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsSmallFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsSmallFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsSmallSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAFormatsSortInput = {
  readonly large: InputMaybe<STRAPI__MEDIAFormatsLargeSortInput>;
  readonly medium: InputMaybe<STRAPI__MEDIAFormatsMediumSortInput>;
  readonly small: InputMaybe<STRAPI__MEDIAFormatsSmallSortInput>;
  readonly thumbnail: InputMaybe<STRAPI__MEDIAFormatsThumbnailSortInput>;
};

type STRAPI__MEDIAFormatsThumbnail = {
  readonly ext: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type STRAPI__MEDIAFormatsThumbnailFieldSelector = {
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly hash: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly mime: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type STRAPI__MEDIAFormatsThumbnailFilterInput = {
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly hash: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly mime: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<FloatQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type STRAPI__MEDIAFormatsThumbnailSortInput = {
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type STRAPI__MEDIAGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<STRAPI__MEDIAEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<STRAPI__MEDIAGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<STRAPI__MEDIA>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type STRAPI__MEDIAGroupConnection_distinctArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_groupArgs = {
  field: STRAPI__MEDIAFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type STRAPI__MEDIAGroupConnection_maxArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_minArgs = {
  field: STRAPI__MEDIAFieldSelector;
};


type STRAPI__MEDIAGroupConnection_sumArgs = {
  field: STRAPI__MEDIAFieldSelector;
};

type STRAPI__MEDIASortInput = {
  readonly alternativeText: InputMaybe<SortOrderEnum>;
  readonly caption: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly formats: InputMaybe<STRAPI__MEDIAFormatsSortInput>;
  readonly hash: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly localFile: InputMaybe<FileSortInput>;
  readonly mime: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly strapi_id: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<FieldSelectorEnum>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFieldSelector = {
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSortInput = {
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SortOrderEnum>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};


}
