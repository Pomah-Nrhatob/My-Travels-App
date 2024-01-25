import styles from "./MainLayout.module.css";
import TravelGeneralInfo from "./TravelGeneralInfo";

import ChaptersList from "./ChaptersList";

function MainLayout() {
  return (
    <main className={styles.main_page}>
      <TravelGeneralInfo />
      <ChaptersList />
    </main>
  );
}

export default MainLayout;
