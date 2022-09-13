import { YoutubeLinks } from 'constants/constants'
import { PlayIcon } from 'components/icons'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useMediaQuery } from 'react-responsive'

const openLiveLink = (link: string | undefined) => {
  link && window.open(link, '_blank', 'noopener,noreferrer')
}

const LiveBanner = () => {
  const [displayBanner, setDisplayBanner] = useState(false)
  const [date, setDate] = useState(new Date())
  const isMobile = useMediaQuery({ maxWidth: 992 })

  const currentDay = date.getDate()
  const currentHour = date.getHours()
  const liveDayLink = YoutubeLinks.find((link) => link.date === currentDay)

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 10 * 1000)

    if (liveDayLink && currentHour === 17) {
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
    <div
      className={LiveBannerClasses}
      role="button"
      onClick={isMobile ? () => openLiveLink(liveDayLink?.href) : undefined}>
      <div className="live-banner__inner">
        <span className="live-banner__header">Jesteśmy live</span>
        <div
          className="live-banner__button"
          role="button"
          onClick={!isMobile ? () => openLiveLink(liveDayLink?.href) : undefined}>
          <span>Dołącz</span>
          <PlayIcon className="-icon" />
        </div>
      </div>
    </div>
  )
}

export default LiveBanner
