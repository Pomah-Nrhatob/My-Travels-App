import React, { useRef, useState } from "react";
import styles from "./TextCreator.module.css";
import { useDispatch } from "react-redux";
import { changeChapter } from "../../../redux/slices/chaptersOfTravelListSlice";

function TextCreator({ chapter }) {
  const [titleState, setTitleState] = useState(chapter.title);
  const [textState, setTextState] = useState(chapter.text);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const textareaInputHandler = () => {
    textAreaRef.current.style.height = "10px";
    textAreaRef.current.style.height = `${Math.min(
      textAreaRef.current.scrollHeight,
      10000
    )}px`;
  };

  const handleSaveTitle = () => {
    dispatch(changeChapter({ ...chapter, title: titleState }));
  };
  const handleSaveText = () => {
    dispatch(changeChapter({ ...chapter, text: textState }));
  };

  return (
    <div className={styles.main}>
      <textarea
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
      <textarea
        placeholder="Введите текст главы..."
        onInput={textareaInputHandler}
        ref={textAreaRef}
        onChange={(e) => {
          setTextState(e.target.value);
        }}
        onBlur={handleSaveText}
        value={textState}
        className={styles.textarea}
      />
      <hr />
      <div>{textState}</div>
    </div>
  );
}

export default TextCreator;
