import { YoutubeLinks } from 'constants/constants'
import { PlayIcon } from 'components/icons'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'

const LiveBanner = () => {
  const [displayBanner, setDisplayBanner] = useState(false)
  const [date, setDate] = useState(new Date())

  const currentDay = date.getDate()
  const currentHour = date.getHours()
  const liveDayLink = YoutubeLinks.find((link) => link.date === currentDay)

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 10 * 1000)

    if (liveDayLink && currentHour >= 15 && currentHour <= 18) {
      setDisplayBanner(true)
    } else {
      setDisplayBanner(false)
    }

    return () => clearInterval(interval)
  }, [currentHour, liveDayLink])

  const LiveBannerClasses = cx('live-banner', {
    '-hidden': !displayBanner,
  })

  return (
    <div className={LiveBannerClasses}>
      <div className="live-banner__inner">
        <span className="live-banner__header">Jesteśmy live</span>
        <a className="live-banner__button" href={liveDayLink?.href} rel="noopener noreferrer" target="_blank">
          <span>Dołącz</span>
          <PlayIcon className="-icon" />
        </a>
      </div>
    </div>
  )
}

export default LiveBanner
