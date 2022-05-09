import React from 'react'

import { graphql, Link } from 'gatsby'

const PostsPage = ({data: {allStrapiPost: { edges }}}: any) => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { Title, ShortDescription, Slug } }: any, index: number) => {
        return (
          <div key={index}>
            <Link to={`/aktualnosci/${Slug}`}>{Title}</Link>
            <p>{ShortDescription}</p>
          </div>
        )
      })}
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
