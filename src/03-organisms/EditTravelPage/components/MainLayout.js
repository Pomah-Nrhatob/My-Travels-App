import React from "react";
import styles from "./MainLayout.module.css";
import TextCreator from "../../../02-templates/TextCreator/components/TextCreator";

function MainLayout() {
  return (
    <main className={styles.main_page}>
      <TextCreator />
    </main>
  );
}

export default MainLayout;
