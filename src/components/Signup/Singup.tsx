// import { signupSections } from 'constants/constants'
import React, { FC } from 'react'
import { SignupType } from 'types'

import SignupBanner from './SignupBanner'
import SignupSection from './SignupSection'

const Signup: FC<SignupType> = ({ signup_sections }) => {
  return (
    <div className="signup">
      <SignupBanner />
      {signup_sections && signup_sections.map((section, index) => <SignupSection key={index} {...section} />)}
    </div>
  )
}

export default Signup
