import React from 'react'
import styles from './ChaptersList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  addChapter,
  selectChapters,
} from '../../../redux/slices/chaptersOfTravelListSlice'
import TextCreator from './TextCreator'
import { useParams } from 'react-router-dom'
import { createTravelWithId } from '../utils/createTravelWithId'

function ChaptersList() {
  const id = useParams()
  const chaptersOfTravel = useSelector(selectChapters).filter(
    (chapter) => chapter.travelId == id.id
  )
  const dispatch = useDispatch()

  const handleAddNewChapter = () => {
    const createChapter = createTravelWithId({
      title: '',
      text: '',
      travelId: id.id,
    })
    dispatch(addChapter(createChapter))
  }

  return (
    <>
      {chaptersOfTravel.map((chapter) => {
        return <TextCreator key={chapter.id} chapter={chapter} />
      })}
      {id.id ? (
        <button className={styles} onClick={handleAddNewChapter}>
          Добавить новую главу
        </button>
      ) : (
        ''
      )}
    </>
  )
}

export default ChaptersList
