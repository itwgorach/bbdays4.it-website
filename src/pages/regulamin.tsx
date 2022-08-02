import React, { FC } from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import RulesPageType from 'types/RulesPageType'

const RulesPage: FC<RulesPageType> = ({
  data: {
    strapiRules: { text },
  },
}) => {
  return (
    <div className="rules">
      <ReactMarkdown>{text.data.text}</ReactMarkdown>
    </div>
  )
}

export const query = graphql`
  {
    strapiRules {
      text {
        data {
          text
        }
      }
    }
  }
`

export default RulesPage
