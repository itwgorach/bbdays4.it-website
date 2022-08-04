import { SignupArrowIcon, SignupArrowIconLong } from 'components/icons'
import React from 'react'

const SignupBanner = () => {
  return (
    <div className="signup__banner">
      <div className="signup__banner-inner">
        <div className="signup__banner-title">
          <span className="signup__banner-title -first-line">Dołącz</span>
          <span className="signup__banner-title -second-line">do nas</span>
        </div>
        <SignupArrowIcon className="signup__banner-icon -short" />
        <SignupArrowIconLong className="signup__banner-icon -long" />
      </div>
    </div>
  )
}

export default SignupBanner
