import React, { FC } from 'react'
import { ScheduleType } from 'types'

import ScheduleDesktop from './ScheduleDesktop/ScheduleDesktop'
import ScheduleMobile from './ScheduleMobile/ScheduleMobile'

const Schedule: FC<ScheduleType> = ({ events, scheduleTitle }) => {
  const titleId = scheduleTitle ? scheduleTitle.toLocaleLowerCase() : ''

  return (
    <div id={titleId}>
      <ScheduleMobile events={events} scheduleTitle={scheduleTitle} />
      <ScheduleDesktop events={events} scheduleTitle={scheduleTitle} />
    </div>
  )
}

export default Schedule
