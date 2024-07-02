export const checkEventIsActive = (date: string, startHour: string, endHour: string): boolean => {
  const parseDateTime = (date: string, time: string): Date => {
    const year = 2024
    const [day, month] = date.split('.').map(Number)
    const [hours, minutes] = time.split(':').map(Number)
    const parsedDate = new Date(year, month - 1, day, hours, minutes)

    return parsedDate
  }
  const startDate = parseDateTime(date, startHour).getTime()
  const endDate = parseDateTime(date, endHour).getTime()
  const currentDate = Date.now()

  return startDate < currentDate && endDate > currentDate
}
