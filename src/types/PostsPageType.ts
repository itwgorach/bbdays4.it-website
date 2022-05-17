import STRAPI_POSTConnection = GatsbyTypes.STRAPI_POSTConnection

type PostsPageType = {
  data: {
    allStrapiPost: STRAPI_POSTConnection
  },
}

export default PostsPageType
