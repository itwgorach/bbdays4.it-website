import { SignupArrowIcon, SignupArrowIconLong } from 'components/icons'
import { useLanguageContext } from 'contexts/LanguageContext'
import React, { FC } from 'react'

type SignupBannerProps = {
  bannerImageUrl: string
}

const SignupBanner: FC<SignupBannerProps> = ({ bannerImageUrl }) => {
  const { language } = useLanguageContext()
  return (
    <div className="signup__banner" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
      <div className="signup__banner-inner">
        <div className="signup__banner-title">
          <span className="signup__banner-title -first-line">{language === 'pl' ? 'Dołącz ' : 'Join '}</span>
          <span className="signup__banner-title -second-line">{language === 'pl' ? 'do nas' : 'us'}</span>
        </div>
        <SignupArrowIcon className="signup__banner-icon -mobile" />
        <SignupArrowIconLong className="signup__banner-icon -desktop" />
      </div>
    </div>
  )
}

export default SignupBanner
