import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'

import { PostTemplateType } from 'types'

const PostTemplate: FC<PostTemplateType> = ({
  data: {
    strapiPost: { Title, Content },
  },
}) => {
  return (
    <div>
      <Link to="/posts">Posty</Link>
      <h1>{Title}</h1>
      <p>{Content?.data?.Content}</p>
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
