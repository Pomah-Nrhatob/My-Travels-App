import React from "react";
import { Link } from "react-router-dom";
import { DRAFT_PAGE } from "../../utils/consts";
import { useSelector } from "react-redux";
import { selectTravelList } from "../../redux/slices/myTravelListSlice";

function DraftPage() {
  const draftTravels = useSelector(selectTravelList);

  return (
    <div>
      <Link to={DRAFT_PAGE + `/addtravel`}>Добавить новое путешествие</Link>
      {draftTravels.map((travel) => {
        return <h1>{travel.titleState}</h1>;
      })}
    </div>
  );
}

export default DraftPage;
