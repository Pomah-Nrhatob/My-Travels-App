import React, { useEffect, useState } from 'react'
import styles from './TravelGeneralInfo.module.css'
import { Link, useParams } from 'react-router-dom'
import { DRAFT_PAGE, EDIT_TRAVEL } from '../../../utils/consts'
import { createTravelWithId } from '../utils/createTravelWithId'
import {
  addTravel,
  changeTravel,
  selectTravelList,
} from '../../../redux/slices/myTravelListSlice'
import { useDispatch, useSelector } from 'react-redux'
import MyCalendar from './MyCalendar'
import {
  cleanFavoriteCountry,
  selectCountry,
  toggleFavoriteCountry,
} from '../../../redux/slices/countrySlice'

function TravelGeneralInfo() {
  const [generalInfoState, setGeneralInfoState] = useState({
    title: '',
    dateTravel: '',
    countyTravel: [],
  })
  const id = useParams()
  const dispatch = useDispatch()
  const travelList = useSelector(selectTravelList)
  const country = useSelector(selectCountry)

  useEffect(() => {
    if (id.id) {
      const travel = travelList.find((travel) => travel.id === id.id)
      setGeneralInfoState(travel)
    }
  }, [])

  const createTravel = createTravelWithId({
    title: generalInfoState.title,
    dateTravel: generalInfoState.dateTravel,
    countyTravel: generalInfoState.countyTravel,
  })
  const travelActiveId = createTravel.id

  const handleAddTravel = () => {
    dispatch(addTravel(createTravel))
    setGeneralInfoState(createTravel)
  }

  const handleSaveShange = () => {
    dispatch(changeTravel(generalInfoState))
  }

  const handleToggleIsFavoriteCountry = (id) => {
    dispatch(toggleFavoriteCountry(id))
  }

  const handleCleanChooseCountry = () => {
    dispatch(cleanFavoriteCountry())
  }

  const submitCountryChoose = (event) => {
    event.preventDefault()
    const chooseCountry = country.filter((el) => !!el.choose)
    setGeneralInfoState({ ...generalInfoState, countyTravel: chooseCountry })
    dispatch(cleanFavoriteCountry())
    setCountryActive(false)
  }

  const [calendarActive, setCalendarActive] = useState(false)
  const [countryActive, setCountryActive] = useState(false)

  return (
    <div className={styles.generalInfo_main}>
      {!!countryActive ? (
        <form
          onSubmit={submitCountryChoose}
          className={styles.form_country_container}
        >
          {country.map((el) => {
            return (
              <label>
                <input
                  key={el.id}
                  checked={el.choose}
                  type="checkbox"
                  name="country"
                  value={`${el.name}`}
                  onClick={() => handleToggleIsFavoriteCountry(el.id)}
                />
                {el.name}
              </label>
            )
          })}
          <div className={styles.choose_country_btn}>
            <button onClick={handleCleanChooseCountry}>Очистить</button>
            <button type="submit">Применить</button>
          </div>
        </form>
      ) : (
        <span
          className={styles.country_choose_span}
          onClick={() => setCountryActive(true)}
        >
          Выбор страны
        </span>
      )}

      {calendarActive ? (
        <MyCalendar
          generalInfoState={generalInfoState}
          setCalendarActive={setCalendarActive}
          setGeneralInfoState={setGeneralInfoState}
        />
      ) : (
        <span
          className={styles.calendar_btn}
          onClick={() => setCalendarActive(true)}
        >
          Календарь
        </span>
      )}
      <textarea
        onChange={(e) =>
          setGeneralInfoState({ ...generalInfoState, title: e.target.value })
        }
        value={generalInfoState.title}
        placeholder="Введите название путешествия"
        className={styles.titleTravel_textarea}
      ></textarea>
      {id.id ? (
        <button onClick={handleSaveShange}>Сохранить изменения</button>
      ) : (
        <Link
          onClick={handleAddTravel}
          to={DRAFT_PAGE + EDIT_TRAVEL + `/${travelActiveId}`}
        >
          Добавить путешествие
        </Link>
      )}
    </div>
  )
}

export default TravelGeneralInfo
