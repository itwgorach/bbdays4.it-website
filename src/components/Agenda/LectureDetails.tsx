import React, { FC } from 'react'
import cx from 'classnames'
import { SpeakerType } from 'types'

const LectureDetails: FC<SpeakerType> = ({
  description,
  firstName,
  lastName,
  linkedinUrl,
  linktrUrl,
  photo,
  position,
  title,
  twitterUrl,
}) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px 30px',
      }}>
      <div>Name: {`${firstName} ${lastName}`}</div>
      <div>Position: {position}</div>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
    </div>
  )
}

export default LectureDetails
