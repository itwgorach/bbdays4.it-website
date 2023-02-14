import React, { FC } from 'react'
import { SignupSectionType } from 'types'
import cx from 'classnames'

const SignupSection: FC<SignupSectionType> = ({ buttonText, buttonUrl, title, subtitle, link }) => {
  const buttonClasses = cx('signup__section-button', {
    '-disabled': !buttonUrl,
  })

  return (
    <div className="signup__section">
      <div className="signup__section-inner">
        <div className="signup__section-wrapper">
          <div className="signup__section-text">
            <div className="signup__section-subtitle">{subtitle}</div>
            {link ? (
              <a className="signup__section-title -link" href={link} rel="noopener noreferrer" target="_blank">
                {title}
              </a>
            ) : (
              <div className="signup__section-title">{title}</div>
            )}
          </div>
          <a
            className={buttonClasses}
            rel="noopener noreferrer"
            target="_blank"
            {...(buttonUrl && { href: buttonUrl })}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignupSection
