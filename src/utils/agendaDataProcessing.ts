import { LectureType, SpeakerType } from 'types'

const groupArrayByKey = (arr: LectureType[], key: string) => {
  return arr.reduce((storage, item) => {
    const group = item[key]
    storage[group] = storage[group] || []
    storage[group].push(item)
    return storage
  }, {})
}

const makeContent = (arr) => {
  return Object.keys(arr)
    .sort()
    .reduce((obj, key) => {
      obj[key] = arr[key]
      return obj
    }, {})
}

export const makeLectureSection = (lectures: LectureType[], fromHour: string | null, toHour: string | null) => {
  const lecturesFiltered = lectures.filter((event) => {
    if (fromHour && toHour) {
      return event.startHour >= fromHour && event.startHour < toHour
    }

    if (fromHour && !toHour) {
      return event.startHour >= fromHour
    }

    if (!fromHour && toHour) {
      return event.startHour < toHour
    }
  })

  const lecturesGrouped = groupArrayByKey(lecturesFiltered, 'startHour')
  const section = makeContent(lecturesGrouped)

  return section
}

export const getSpeaker = (name: string, speakers: SpeakerType[]) => {
  const speaker =
    speakers &&
    speakers.filter((speaker) => {
      return `${speaker.firstName} ${speaker.lastName}`.toLocaleLowerCase() === name.toLocaleLowerCase()
    })

  return speaker && speaker[0]
}
