import React from 'react'

import { graphql, Link } from 'gatsby'

const PostTemplate = ({ data: {strapiPost:{Title, Content}}}: any) => {
  return (
    <div>
      <Link to="/posts">Posty</Link>
      <h1>{Title}</h1>
      <p>{Content.data.Content}</p>
    </div>
  )
}

export const data = graphql`
  query postData($Slug: String) {
    strapiPost(Slug: { eq: $Slug }) {
      Title
      Content {
        data {
          Content
        }
      }
    }
  }
`

export default PostTemplate
