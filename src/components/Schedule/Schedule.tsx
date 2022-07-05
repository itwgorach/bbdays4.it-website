import React, { FC } from 'react'
import { ScheduleType } from 'types'

import ScheduleDesktop from './ScheduleDesktop/ScheduleDesktop'
import ScheduleMobile from './ScheduleMobile/ScheduleMobile'

const Schedule: FC<ScheduleType> = ({ events, scheduleTitle }) => {
  return (
    <>
      <ScheduleMobile events={events} scheduleTitle={scheduleTitle} />
      <ScheduleDesktop events={events} scheduleTitle={scheduleTitle} />
    </>
  )
}

export default Schedule
