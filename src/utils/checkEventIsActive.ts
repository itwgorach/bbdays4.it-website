export const checkEventIsActive = (date, startHour, endHour) => {
  const parseDateTime = (date, time) => {
    const [day, month] = date.split('.').map(Number)
    const [hours, minutes] = time.split(':').map(Number)
    const year = 2024
    const parsedDate = new Date(year, month - 1, day, hours, minutes)

    return parsedDate
  }
  const startDate = parseDateTime(date, startHour)
  const endDate = parseDateTime(date, endHour)

  return startDate < endDate
}
