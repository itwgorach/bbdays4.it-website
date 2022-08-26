import { useActiveLink } from 'components/Layout/Layout'
import React, { FC } from 'react'
import { Waypoint } from 'react-waypoint'
import { SignupSectionType, SignupType } from 'types'

import SignupBanner from './SignupBanner'
import SignupSection from './SignupSection'

const Signup: FC<SignupType> = ({ signup_sections, signupImage, bannerImage }) => {
  const renderSignupSections = (sections: SignupSectionType[]) =>
    sections.map((section, index) => <SignupSection key={index} {...section} />)

  const { setActiveLink } = useActiveLink()

  return (
    <Waypoint
      bottomOffset="40%"
      topOffset="50%"
      onEnter={() => {
        setActiveLink('dolaczdonas')
      }}
      onLeave={() => {
        setActiveLink('')
      }}>
      <div className="signup" id="dolaczdonas">
        <SignupBanner bannerImageUrl={bannerImage?.url} />
        <div className="signup__wrapper" style={{ backgroundImage: `url(${signupImage?.url})` }}>
          {signup_sections && renderSignupSections(signup_sections)}
        </div>
      </div>
    </Waypoint>
  )
}

export default Signup
