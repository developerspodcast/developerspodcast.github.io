import React from "react";
import styles from "./twoSection.module.css";

const TwoSection = ({ firstSection, secondSection }) => (
  <div className={styles.twoSection}>
    <div>{firstSection}</div>
    <div>{secondSection}</div>
  </div>
);

export default TwoSection;
