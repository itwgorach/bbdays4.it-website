import React, { FC } from 'react'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { Waypoint } from 'react-waypoint'
import { ScheduleType } from 'types'

import ScheduleDesktop from './ScheduleDesktop/ScheduleDesktop'
import ScheduleMobile from './ScheduleMobile/ScheduleMobile'
import ScheduleLiveInformation from './ScheduleLiveInformation/ScheduleLiveInformation'

const Schedule: FC<ScheduleType> = ({ events, scheduleTitle }) => {
  const titleId = scheduleTitle ? scheduleTitle.toLocaleLowerCase() : ''
  const { setActiveLink } = useActiveLink()

  return (
    <div className="schedule" id={titleId}>
      <Waypoint
        bottomOffset="60%"
        topOffset="39%"
        onEnter={() => {
          setActiveLink(titleId)
        }}
        onLeave={() => {
          setActiveLink('')
        }}>
        <div>
          <ScheduleLiveInformation events={events} />
          <ScheduleMobile events={events} scheduleTitle={scheduleTitle} />
          <ScheduleDesktop events={events} scheduleTitle={scheduleTitle} />
        </div>
      </Waypoint>
    </div>
  )
}

export default Schedule
