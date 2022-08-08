import React, { FC } from 'react'
import { SignupSectionType, SignupType } from 'types'

import SignupBanner from './SignupBanner'
import SignupSection from './SignupSection'

const Signup: FC<SignupType> = ({ signup_sections, signupImage, bannerImage }) => {
  const renderSignupSections = (sections: SignupSectionType[]) =>
    sections.map((section, index) => <SignupSection key={index} {...section} />)

  return (
    <div className="signup">
      <SignupBanner bannerImageUrl={bannerImage?.url} />
      <div className="signup__wrapper" style={{ backgroundImage: `url(${signupImage?.url})` }}>
        {signup_sections && renderSignupSections(signup_sections)}
      </div>
    </div>
  )
}

export default Signup
