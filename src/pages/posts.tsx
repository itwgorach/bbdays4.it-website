import React from 'react'

import { graphql, Link } from 'gatsby'

type Query = {
  data: AllStrapiPost
}

type AllStrapiPost = {
  allStrapiPost: Edges
}

type Edges = {
  edges: [Node]
}

type Node = {
  node: {
    Slug: string
    Title: string
    ShortDescription: string
  }
}

const PostsPage = ({data: {allStrapiPost: { edges }}}: Query) => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { Title, ShortDescription, Slug } }: Node, index: number) => {
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
