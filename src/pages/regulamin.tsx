import React, { FC } from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import RulesPageType from 'types/RulesPageType'
import { useLanguageContext } from 'contexts/LanguageContext'

const RulesPage: FC<RulesPageType> = ({ data }) => {
  const { language } = useLanguageContext()

  const plText = data.strapiRules.text.data.text
  const enText = data.strapiRules.localizations.data[0].attributes.text
  const rulesText = language === 'pl' ? plText : enText

  return (
    <div className="rules">
      <ReactMarkdown>{rulesText}</ReactMarkdown>
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
