import React from "react";
import { Link } from "react-router-dom";
import { EDIT_TRAVEL, DRAFT_PAGE } from "../../../utils/consts";
import { useSelector } from "react-redux";
import { selectTravelList } from "../../../redux/slices/myTravelListSlice";
import SingleTravelInfo from "./SingleTravelInfo";
import styles from "./DraftList.module.css";
import { selectChapters } from "../../../redux/slices/chaptersOfTravelListSlice";

function DraftList() {
  const draftTravels = useSelector(selectTravelList);
  const chapters = useSelector(selectChapters);

  return (
    <div className={styles.draft_mainDiv}>
      <Link to={DRAFT_PAGE + EDIT_TRAVEL}>Добавить новое путешествие</Link>
      <div className={styles.draft_list}>
        {draftTravels.map((travel) => {
          return <SingleTravelInfo key={travel.id} travel={travel} />;
        })}
      </div>
    </div>
  );
}

export default DraftList;
