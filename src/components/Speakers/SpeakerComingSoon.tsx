import React from 'react'

import { DownArrowIcon, OpenEyeOpen } from 'components/icons'
import { Link } from 'gatsby'

const SpeakerCommingSoon = () => (
  <Link className="speaker-soon" to="#agenda">
    <div className="speaker-soon__mask"></div>
    <div className="speaker-soon__title">
      <span className="speaker-soon__text">Ag</span>
      <span className="speaker-soon__text">en</span>
      <span className="speaker-soon__text">da</span>
    </div>
    <div className="speaker-soon__icons">
      <OpenEyeOpen className="speaker-soon__icons-eye" />
      <DownArrowIcon className="speaker-soon__icons-arrow" />
    </div>
  </Link>
)

export default SpeakerCommingSoon
