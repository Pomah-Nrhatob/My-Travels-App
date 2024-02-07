import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelList } from '../../../redux/slices/myTravelListSlice'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styles from './MyCalendar.module.css'

function MyCalendar({
  setCalendarActive,
  setGeneralInfoState,
  generalInfoState,
}) {
  const [value, setValue] = useState(new Date())

  const travelList = useSelector(selectTravelList)

  const handleDateTravel = (value) => {
    setGeneralInfoState({ ...generalInfoState, dateTravel: value })
    console.log(value)
  }

  const na = {}

  const fn = () => {
    const ys = []
    const arr = value.toString().split('')
    const oneArr = arr.slice(4, 15)
    const twoArr = arr.slice(66, 77)

    function ret(dates) {
      const datesTwo =
        dates.length > 0
          ? dates
              .slice(4, 6)
              .reduce((el, acc) => (el += acc))
              .toString()
          : false

      const datesThree =
        dates.length > 0
          ? dates
              .slice(7, 11)
              .reduce((el, acc) => (el += acc))
              .toString()
          : false

      const datesOneByInstruction =
        dates.length > 0
          ? dates
              .slice(0, 3)
              .reduce((el, acc) => (el += acc))
              .toString()
          : false
      function datesOneFn(arg) {
        if (arg === 'Jan') {
          return '01'
        }
        if (arg === 'Feb') {
          return '02'
        }
        if (arg === 'Mar') {
          return '03'
        }
        if (arg === 'Apr') {
          return '04'
        }
        if (arg === 'May') {
          return '05'
        }
        if (arg === 'Jun') {
          return '06'
        }
        if (arg === 'Jul') {
          return '07'
        }
        if (arg === 'Aug') {
          return '08'
        }
        if (arg === 'Sep') {
          return '09'
        }
        if (arg === 'Oct') {
          return '10'
        }
        if (arg === 'Nov') {
          return '11'
        }
        if (arg === 'Dec') {
          return '12'
        }
      }
      const datesOne = datesOneFn(datesOneByInstruction)

      return [...ys, datesTwo, datesOne, datesThree].toString()
    }
    const dateGoNumb = ret(oneArr)
    const dateBackNumb = ret(twoArr)

    return { ...na, dateGoNumb, dateBackNumb }
  }

  const values = fn()

  return (
    <div>
      <Calendar
        className={styles.container}
        onChange={setValue}
        value={value}
        onClickDay={() => handleDateTravel(values)}
        selectRange
      />
      <span
        className={styles.close_btn}
        onClick={() => setCalendarActive(false)}
      >
        Закрыть
      </span>
    </div>
  )
}

export default MyCalendar
