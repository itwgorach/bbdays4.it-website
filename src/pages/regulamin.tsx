import React, { FC } from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import RulesPageType from 'types/RulesPageType'

const RulesPage: FC<RulesPageType> = ({
  data: {
    strapiRules: { text },
  },
  data,
}) => {
  console.log(data)

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
      localizations {
        data {
          id
          attributes {
            locale
            text
          }
        }
      }
    }
  }
`

export default RulesPage
