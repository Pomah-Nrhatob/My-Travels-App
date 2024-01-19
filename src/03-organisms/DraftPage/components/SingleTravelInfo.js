import React from "react";
import styles from "./SingleTravelInfo.module.css";
import { Link } from "react-router-dom";
import { EDIT_TRAVEL, DRAFT_PAGE } from "../../../utils/consts";

function SingleTravelInfo({ travel }) {
  return (
    <div className={styles.travelInfo_main}>
      <h1>{travel.title}</h1>
      <Link
        className={styles.link_btn}
        to={DRAFT_PAGE + EDIT_TRAVEL + `/${travel.id}`}
      >
        Редактировать
      </Link>
    </div>
  );
}

export default SingleTravelInfo;
