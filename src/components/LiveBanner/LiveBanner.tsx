import { YoutubeLinks } from 'constants/constants'
import { PlayIcon } from 'components/icons'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'

const LiveBanner = () => {
  const [displayBanner, setDisplayBanner] = useState(false)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const currentDay = date.getDate()
    const currentHour = date.getHours()
    const isLiveDay = YoutubeLinks.some((link) => link.date === currentDay)
    const interval = setInterval(() => setDate(new Date()), 10 * 1000)

    if (isLiveDay && currentHour >= 15 && currentHour <= 18) {
      setDisplayBanner(true)
    } else {
      setDisplayBanner(false)
    }

    return () => clearInterval(interval)
  }, [date])

  const LiveBannerClasses = cx('live-banner', {
    '-hidden': !displayBanner,
  })

  return (
    <div className={LiveBannerClasses}>
      <div className="live-banner__inner">
        <span className="live-banner__header">Jesteśmy live</span>
        <a className="live-banner__button">
          <span>Dołącz</span>
          <PlayIcon className="-icon" />
        </a>
      </div>
    </div>
  )
}

export default LiveBanner
