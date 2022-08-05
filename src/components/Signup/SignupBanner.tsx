import { SignupArrowIcon, SignupArrowIconLong } from 'components/icons'
import React, { FC } from 'react'

type SignupBannerProps = {
  bannerImageUrl: string,
}

const SignupBanner: FC<SignupBannerProps> = ({ bannerImageUrl }) => {
  return (
    <div className="signup__banner" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
      <div className="signup__banner-inner">
        <div className="signup__banner-title">
          <span className="signup__banner-title -first-line">Dołącz </span>
          <span className="signup__banner-title -second-line">do nas</span>
        </div>
        <SignupArrowIcon className="signup__banner-icon -mobile" />
        <SignupArrowIconLong className="signup__banner-icon -desktop" />
      </div>
    </div>
  )
}

export default SignupBanner
