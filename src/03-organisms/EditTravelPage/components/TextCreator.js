import React, { useRef, useState } from "react";
import styles from "./TextCreator.module.css";
import { useDispatch } from "react-redux";
import { changeChapter } from "../../../redux/slices/chaptersOfTravelListSlice";
import TextEditor from "../../../02-templates/TextEditor/components/TextEditor";

function TextCreator({ chapter }) {
  const [titleState, setTitleState] = useState(chapter.title);
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();

  const handleSaveTitle = () => {
    dispatch(changeChapter({ ...chapter, title: titleState }));
  };
  const handleSaveText = (text) => {
    dispatch(changeChapter({ ...chapter, text: text }));
  };

  return (
    <div
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      className={focus ? styles.main_active : styles.main}
    >
      <div className={styles.chapter_info}>
        <h3>Название главы:</h3>
        <input
          onChange={(e) => {
            setTitleState(e.target.value);
          }}
          onBlur={() => {
            handleSaveTitle();
          }}
          value={titleState}
          placeholder="Введите название главы..."
          className={styles.textTitle}
        />
      </div>
      <TextEditor chapter={chapter} handleSaveText={handleSaveText} />
    </div>
  );
}

export default TextCreator;
