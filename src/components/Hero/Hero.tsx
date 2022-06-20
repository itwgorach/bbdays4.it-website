import classnames from 'classnames'
import React, { FC } from 'react'

import { BaseHeroType } from 'types'

const Hero: FC<BaseHeroType> = ({ title, subtitle, subtitlePos, backgroundImage, buttonText, buttonUrl, backgroundColor }) => (
  <div
    className={classnames('hero', {
      '-full-height': subtitle !== null,
      '-simple': subtitle === null && buttonText === null && buttonUrl === null,
    })}
    style={{ backgroundColor: backgroundColor, backgroundImage: `url(${backgroundImage?.url}` }}>
    {subtitlePos === 'top' && <h3 className="hero__subtitle">{subtitle}</h3>}
    <h1 className={classnames('hero__title', { '-small': subtitle == null })}>{title}</h1>
    {subtitlePos === 'bottom' && <h3 className="hero__subtitle -bottom">{subtitle}</h3>}
    {buttonText !== null && buttonUrl !== null && (
      <a className="hero__button" href={buttonUrl} rel="noopener noreferrer" target="_blank">
        {buttonText}
      </a>
    )}
  </div>
)

export default Hero
