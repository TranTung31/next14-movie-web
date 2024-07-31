export const formatDateTimeDMY = (inputDate: string) => {
  if (!inputDate) return ''

  const date = new Date(inputDate)
  const day = String(date.getUTCDay()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear())

  return `${day}/${month}/${year}`
}