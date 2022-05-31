import React, { FC } from 'react'
import { Link } from 'gatsby'

import { SpeakerEdgeType, SpeakersPageType } from 'types'

const SpeakersPage: FC<SpeakersPageType> = ({
  data: {
    allStrapiSpeaker: { edges },
  },
}) => {
  return (
    <div>
      <h1>Speakerzy</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { FirstName, LastName, Photo } }: SpeakerEdgeType, index: number) => {
        return (
          <div key={index}>
            <h3>
              {FirstName} {LastName}
            </h3>
            <img alt="speaker's photo" src={Photo?.url} />
          </div>
        )
      })}
    </div>
  )
}

// export const query = graphql`
//   {
//     allStrapiSpeaker {
//       edges {
//         node {
//           FirstName
//           LastName
//           Photo {
//             url
//           }
//         }
//       }
//     }
//   }
// `

export default SpeakersPage
