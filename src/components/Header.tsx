import { formatDateString, getGreeting } from '@/util'

export const Header = () => {
  const today = new Date()

  return (
    <div className="displayBetween mx-6 my-2 BoldM-none">
      <span>
        Hello,
        <span className="text-orange"> Good {getGreeting(today)}!</span>
      </span>
      <span>
        Time:
        <span className="text-orange">{formatDateString(today, 'time')}</span>
      </span>
    </div>
  )
}
