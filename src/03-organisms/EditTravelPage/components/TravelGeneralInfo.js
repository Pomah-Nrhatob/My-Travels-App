import React, { useEffect, useState } from "react";
import styles from "./TravelGeneralInfo.module.css";
import { Link, useParams } from "react-router-dom";
import { DRAFT_PAGE, EDIT_TRAVEL } from "../../../utils/consts";
import { createTravelWithId } from "../utils/createTravelWithId";
import {
  addTravel,
  changeTravel,
  selectTravelList,
} from "../../../redux/slices/myTravelListSlice";
import { useDispatch, useSelector } from "react-redux";

function TravelGeneralInfo() {
  const [generalInfoState, setGeneralInfoState] = useState({ title: "" });
  const id = useParams();
  const dispatch = useDispatch();
  const travelList = useSelector(selectTravelList);

  useEffect(() => {
    if (id.id) {
      const travel = travelList.find((travel) => travel.id === id.id);
      setGeneralInfoState(travel);
    }
  }, []);

  const createTravel = createTravelWithId({
    title: generalInfoState.title,
  });
  const travelActiveId = createTravel.id;

  const handleAddTravel = () => {
    dispatch(addTravel(createTravel));
    setGeneralInfoState(createTravel);
  };

  const handleSaveShange = () => {
    dispatch(changeTravel(generalInfoState));
  };

  return (
    <div className={styles.generalInfo_main}>
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
  );
}

export default TravelGeneralInfo;
