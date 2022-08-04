import React, { FC } from 'react'
import { SignupSectionType } from 'types'

const SignupSection: FC<SignupSectionType> = ({ buttonText, buttonUrl, title, subtitle, backgroundImage }) => {
  return (
    <div className="signup__section">
      <img alt="background" className="signup__section-background" src={backgroundImage.url} />
      <div className="signup__section-inner">
        <div className="signup__section-wrapper">
          <div className="signup__section-text">
            <div className="signup__section-subtitle">{subtitle}</div>
            <div className="signup__section-title">{title}</div>
          </div>
          <a className="hero__button" href={buttonUrl} rel="noopener noreferrer" target="_blank">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignupSection
