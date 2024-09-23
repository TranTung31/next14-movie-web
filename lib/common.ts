export const formatDateTimeDMY = (inputDate: string) => {
  if (!inputDate) return ''

  const date = new Date(inputDate)
  const day = String(date.getUTCDay()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear())

  return `${day}/${month}/${year}`
}

export const formatServerUrl = (inputServer: string) => {
  if (!inputServer) return 'viet-sub'

  if (inputServer === 'Vietsub #1') {
    return 'viet-sub'
  } else if (inputServer === 'Lồng Tiếng #1') {
    return 'long-tieng'
  } else if (inputServer === 'Thuyết minh #1') {
    return 'thuyet-minh'
  } else {
    return 'viet-sub'
  }
}
