import {
  MAIN_PAGE,
  TRAVEL_DIARY_PAGE,
  ADD_TRAVEL,
  PLANNED_TRAVEL_PAGE,
  DRAFT_PAGE,
} from "../../utils/consts";
import MainPage from "../MainPage/MainPage";
import SingleTravelPage from "../SingleTravelPage/SingleTravelPage";
import TravelDiaryPage from "../TravelDiaryPage/TravelDiaryPage";
import AddTravelPage from "../AddTravelPage/AddTravelPage";
import PlannedTravelPage from "../PlannedTravelPage/PlannedTravelPage";
import DraftPage from "../DrafrPage/DraftPage";

export const routes = [
  {
    path: MAIN_PAGE,
    Component: MainPage,
  },
  {
    path: TRAVEL_DIARY_PAGE,
    Component: TravelDiaryPage,
  },
  {
    path: DRAFT_PAGE,
    Component: DraftPage,
  },
  {
    path: DRAFT_PAGE + ADD_TRAVEL,
    Component: AddTravelPage,
  },
  {
    path: TRAVEL_DIARY_PAGE + `/:id`,
    Component: SingleTravelPage,
  },
  {
    path: PLANNED_TRAVEL_PAGE,
    Component: PlannedTravelPage,
  },
];
