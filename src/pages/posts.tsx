import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'

import { PostEdgeType, PostsPageType } from 'types'

const PostsPage: FC<PostsPageType> = ({
  data: {
    allStrapiPost: { edges },
  },
}) => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { Title, ShortDescription, Slug, id } }: PostEdgeType) => (
        <div key={id}>
          <Link to={`/aktualnosci/${Slug}`}>{Title}</Link>
          <p>{ShortDescription}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  {
    allStrapiPost {
      edges {
        node {
          Slug
          Title
          ShortDescription
        }
      }
    }
  }
`

export default PostsPage
