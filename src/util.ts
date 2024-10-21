type Format = 'date' | 'time' | 'weekday'

const dateFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true, // 12시간제로 설정
}

const weekdayFormat: Intl.DateTimeFormatOptions = {
  weekday: 'long',
}

const formatTable: Record<Format, Intl.DateTimeFormatOptions> = {
  date: dateFormat,
  time: timeFormat,
  weekday: weekdayFormat,
}

export const formatDateString = (date: Date, format: Format) => {
  if (format === 'time') {
    return date.toLocaleTimeString('en-US', formatTable[format])
  }
  return date.toLocaleDateString('en-US', formatTable[format])
}
