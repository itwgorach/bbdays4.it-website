import { breakpoints } from 'constants/constants'
import React, { useMemo } from 'react'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { useMediaQuery } from 'react-responsive'
import { Waypoint } from 'react-waypoint'
import { AchievementType, FestivalInNumbersType } from 'types'
import { getSortedByIndex } from 'utils/getSortedSpeakers'

const getNumberElements = (name?: string) => {
  if (!name) {
    return {
      plusSign: false,
      title: '',
    }
  }

  const nameArray = name.split('+')

  return {
    plusSign: nameArray.length > 1,
    title: nameArray[0],
  }
}

const FestivalInNumbers = ({ achievements, backgroundImages }: FestivalInNumbersType) => {
  const { setActiveLink } = useActiveLink()
  const sortedAchievements = Array.isArray(achievements) && getSortedByIndex<AchievementType>(achievements)
  const isMobile = useMediaQuery({ maxWidth: breakpoints.sm })
  const isTablet = useMediaQuery({ maxWidth: breakpoints.xl })

  const backgroundUrl = useMemo(() => {
    if (isMobile) {
      return backgroundImages?.[0]?.url || backgroundImages?.[1]?.url || backgroundImages?.[2]?.url
    }

    if (isTablet) {
      return backgroundImages?.[1]?.url || backgroundImages?.[2]?.url || backgroundImages?.[0]?.url
    }

    return backgroundImages?.[2]?.url || backgroundImages?.[1]?.url || backgroundImages?.[0]?.url
  }, [isMobile, isTablet, backgroundImages])

  return (
    <Waypoint
      bottomOffset="60%"
      topOffset="39%"
      onEnter={() => {
        setActiveLink('festiwal_w_liczbach')
      }}
      onLeave={() => {
        setActiveLink('')
      }}>
      <div className="achievements" id="festiwal_w_liczbach" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className="achievements__wrapper">
          {sortedAchievements &&
            sortedAchievements.map(({ name, number, id }) => {
              const { title, plusSign } = getNumberElements(number)

              return (
                <div key={id} className="achievements__title">
                  <h1 className="achievements__title-first-line">
                    {title}
                    {plusSign && <span className="plusIcon">+</span>}
                  </h1>
                  <p className="achievements__title-second-line">{name}</p>
                </div>
              )
            })}
        </div>
      </div>
    </Waypoint>
  )
}

export default FestivalInNumbers
