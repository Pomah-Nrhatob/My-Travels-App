import React, { useRef, useState } from "react";
import styles from "./TextCreator.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTravel,
  selectTravelList,
} from "../../../redux/slices/myTravelListSlice";
import { createTravelWithId } from "../utils/createTravelWithId";

function TextCreator() {
  const [textState, setTextState] = useState("");
  const [titleState, setTitleState] = useState("");
  const myTravelList = useSelector(selectTravelList);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const handleAddTravel = () =>
    dispatch(addTravel(createTravelWithId({ titleState, textState })));

  const textareaInputHandler = () => {
    textAreaRef.current.style.height = "10px";
    textAreaRef.current.style.height = `${Math.min(
      textAreaRef.current.scrollHeight,
      10000
    )}px`;
  };

  return (
    <div className={styles.main}>
      <textarea
        onChange={(e) => setTitleState(e.target.value)}
        value={titleState}
        placeholder="Введите название главы..."
        className={styles.textTitle}
      />
      <textarea
        placeholder="Введите текст главы..."
        onInput={textareaInputHandler}
        ref={textAreaRef}
        onChange={(e) => setTextState(e.target.value)}
        value={textState}
        className={styles.textarea}
      />
      <button onClick={handleAddTravel}>Click</button>
      <button onClick={() => console.log(myTravelList)}>Check</button>
    </div>
  );
}

export default TextCreator;
